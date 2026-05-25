import type { BaseMessage } from "@langchain/core/messages";

import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { useCallback, useEffect, useRef, useState } from "react";

import { ChatInput } from "../components/chat-input";
import { MessageBubble } from "../components/message-bubble";
import { ModelSelector } from "../components/model-selector";
import { useModel } from "../hooks/use-model";
import { createAgentGraph, runAgent } from "../lib/agent";

interface DisplayMessage {
	content: string;
	role: "assistant" | "user";
}

export function ChatPage() {
	const { model, status } = useModel();
	const [messages, setMessages] = useState<DisplayMessage[]>([]);
	const [generating, setGenerating] = useState(false);
	const historyReference = useRef<BaseMessage[]>([]);
	const scrollReference = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollReference.current?.scrollTo({
			behavior: "smooth",
			top: scrollReference.current.scrollHeight,
		});
	}, [messages]);

	const handleSend = useCallback(
		async (userMessage: string) => {
			if (!model || status !== "ready") return;

			setMessages((previous) => [
				...previous,
				{ content: userMessage, role: "user" },
			]);
			setGenerating(true);

			try {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const graph = createAgentGraph(model);
				const response = await runAgent(
					graph,
					userMessage,
					historyReference.current,
				);

				historyReference.current = [
					...historyReference.current,
					new HumanMessage(userMessage),
					new AIMessage(response),
				];

				setMessages((previous) => [
					...previous,
					{ content: response, role: "assistant" },
				]);
			} catch (error: unknown) {
				const errorMessage =
					error instanceof Error ? error.message : "Something went wrong";
				setMessages((previous) => [
					...previous,
					{
						content: `Error: ${errorMessage}`,
						role: "assistant",
					},
				]);
			} finally {
				setGenerating(false);
			}
		},
		[model, status],
	);

	return (
		<div
			style={{
				background: "#121212",
				color: "#e0e0e0",
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<header
				style={{
					borderBottom: "1px solid #333",
					padding: "0.75rem 1rem",
				}}
			>
				<ModelSelector />
			</header>

			<div
				ref={scrollReference}
				style={{
					flex: 1,
					overflowY: "auto",
					padding: "1rem",
				}}
			>
				{messages.length === 0 && status !== "ready" && (
					<div
						style={{
							color: "#666",
							paddingTop: "2rem",
							textAlign: "center",
						}}
					>
						Select and load a model to start chatting.
					</div>
				)}
				{messages.length === 0 && status === "ready" && (
					<div
						style={{
							color: "#666",
							paddingTop: "2rem",
							textAlign: "center",
						}}
					>
						Model loaded. Send a message to begin.
					</div>
				)}
				{messages.map((message, index) => (
					<MessageBubble
						content={message.content}
						key={index}
						role={message.role}
					/>
				))}
				{generating && (
					<div
						style={{
							color: "#888",
							fontSize: "0.875rem",
							padding: "0.5rem 0",
						}}
					>
						Thinking...
					</div>
				)}
			</div>

			<footer
				style={{
					borderTop: "1px solid #333",
					padding: "0.75rem 1rem",
				}}
			>
				<ChatInput
					disabled={status !== "ready" || generating}
					onSend={(message) => void handleSend(message)}
				/>
			</footer>
		</div>
	);
}
