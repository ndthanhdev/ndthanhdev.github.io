import { ChatWebLLM } from "@langchain/community/chat_models/webllm";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";

import { AVAILABLE_MODELS, DEFAULT_MODEL_ID } from "../lib/models";

export type ModelStatus = "error" | "idle" | "loading" | "ready";

interface ModelContextValue {
	error: string | undefined;
	loadModel: (modelId: string) => Promise<void>;
	model: ChatWebLLM | undefined;
	modelId: string;
	progress: string;
	status: ModelStatus;
}

const ModelContext = createContext<ModelContextValue | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
	const [modelId, setModelId] = useState(DEFAULT_MODEL_ID);
	const [status, setStatus] = useState<ModelStatus>("idle");
	const [progress, setProgress] = useState("");
	const [error, setError] = useState<string | undefined>();
	const modelReference = useRef<ChatWebLLM | undefined>(undefined);

	const loadModel = useCallback(async (selectedModelId: string) => {
		const modelConfig = AVAILABLE_MODELS.find((m) => m.id === selectedModelId);
		if (!modelConfig) {
			setError(`Unknown model: ${selectedModelId}`);
			return;
		}

		setStatus("loading");
		setError(undefined);
		setProgress("Initializing...");
		setModelId(selectedModelId);

		try {
			const chatModel = new ChatWebLLM({
				chatOptions: { temperature: 0.7 },
				model: selectedModelId,
			});

			await chatModel.initialize((report: { text: string }) => {
				setProgress(report.text);
			});

			modelReference.current = chatModel;
			setStatus("ready");
			setProgress("");
		} catch (error_: unknown) {
			const message =
				error_ instanceof Error ? error_.message : "Failed to load model";
			setError(message);
			setStatus("error");
			setProgress("");
		}
	}, []);

	const value = useMemo(
		() => ({
			error,
			loadModel,
			model: modelReference.current,
			modelId,
			progress,
			status,
		}),
		[error, loadModel, modelId, progress, status],
	);

	return (
		<ModelContext.Provider value={value}>{children}</ModelContext.Provider>
	);
}

export function useModel(): ModelContextValue {
	const context = useContext(ModelContext);
	if (!context) {
		throw new Error("useModel must be used within a ModelProvider");
	}
	return context;
}
