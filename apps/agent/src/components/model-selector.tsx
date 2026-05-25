import { useState } from "react";

import { useModel } from "../hooks/use-model";
import { AVAILABLE_MODELS } from "../lib/models";

export function ModelSelector() {
	const { error, loadModel, modelId, progress, status } = useModel();
	const [selectedId, setSelectedId] = useState(modelId);

	const handleLoad = () => {
		void loadModel(selectedId);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
			<div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
				<select
					disabled={status === "loading"}
					onChange={(event) => {
						setSelectedId(event.target.value);
					}}
					style={{
						background: "#1e1e1e",
						border: "1px solid #444",
						borderRadius: "6px",
						color: "#e0e0e0",
						flex: 1,
						fontSize: "0.875rem",
						padding: "0.5rem",
					}}
					value={selectedId}
				>
					{AVAILABLE_MODELS.map((model) => (
						<option key={model.id} value={model.id}>
							{model.label} ({model.vrамMB} MB VRAM)
						</option>
					))}
				</select>
				<button
					disabled={status === "loading"}
					onClick={handleLoad}
					style={{
						background: status === "ready" ? "#2d7d46" : "#2563eb",
						border: "none",
						borderRadius: "6px",
						color: "white",
						cursor: status === "loading" ? "wait" : "pointer",
						fontSize: "0.875rem",
						opacity: status === "loading" ? 0.6 : 1,
						padding: "0.5rem 1rem",
						whiteSpace: "nowrap",
					}}
				>
					{status === "loading"
						? "Loading..."
						: status === "ready"
							? "Loaded"
							: "Load Model"}
				</button>
			</div>
			{status === "loading" && progress && (
				<div
					style={{
						color: "#888",
						fontSize: "0.75rem",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
				>
					{progress}
				</div>
			)}
			{error && (
				<div style={{ color: "#ef4444", fontSize: "0.75rem" }}>{error}</div>
			)}
		</div>
	);
}
