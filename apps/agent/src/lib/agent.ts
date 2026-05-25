/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
import type { ChatWebLLM } from "@langchain/community/chat_models/webllm";
import type { BaseMessage } from "@langchain/core/messages";

import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { Annotation, StateGraph } from "@langchain/langgraph/web";

const AgentState = Annotation.Root({
	messages: Annotation<BaseMessage[]>({
		reducer: (current, update) => [...current, ...update],
	}),
});

export function createAgentGraph(model: ChatWebLLM) {
	async function agentNode(
		state: typeof AgentState.State,
	): Promise<typeof AgentState.Update> {
		const response = await model.invoke(state.messages);
		return { messages: [response] };
	}

	const graph = new StateGraph(AgentState)
		.addNode("agent", agentNode)
		.addEdge("__start__", "agent")
		.addEdge("agent", "__end__");

	return graph.compile();
}

export async function runAgent(
	graph: ReturnType<typeof createAgentGraph>,
	userMessage: string,
	history: BaseMessage[],
): Promise<string> {
	const result = await graph.invoke({
		messages: [...history, new HumanMessage(userMessage)],
	});

	const lastMessage = result.messages.at(-1);
	if (lastMessage instanceof AIMessage) {
		return typeof lastMessage.content === "string"
			? lastMessage.content
			: JSON.stringify(lastMessage.content);
	}

	return "No response generated.";
}
