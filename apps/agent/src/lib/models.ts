export interface ModelOption {
	contextWindow: number;
	id: string;
	label: string;
	vrамMB: number;
}

export const DEFAULT_MODEL_ID = "Phi-3.5-mini-instruct-q4f16_1-MLC";

export const AVAILABLE_MODELS: ModelOption[] = [
	{
		contextWindow: 4096,
		id: "Phi-3.5-mini-instruct-q4f16_1-MLC",
		label: "Phi 3.5 Mini (q4f16)",
		vrамMB: 3672,
	},
	{
		contextWindow: 4096,
		id: "Phi-3.5-mini-instruct-q4f32_1-MLC",
		label: "Phi 3.5 Mini (q4f32)",
		vrамMB: 5483,
	},
	{
		contextWindow: 1024,
		id: "Phi-3.5-mini-instruct-q4f16_1-MLC-1k",
		label: "Phi 3.5 Mini 1k (q4f16, low VRAM)",
		vrамMB: 2520,
	},
	{
		contextWindow: 4096,
		id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
		label: "Llama 3.2 3B (q4f16)",
		vrамMB: 2893,
	},
	{
		contextWindow: 4096,
		id: "Llama-3.1-8B-Instruct-q4f16_1-MLC",
		label: "Llama 3.1 8B (q4f16)",
		vrамMB: 5001,
	},
	{
		contextWindow: 4096,
		id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
		label: "Qwen 2.5 1.5B (q4f16)",
		vrамMB: 1629,
	},
];
