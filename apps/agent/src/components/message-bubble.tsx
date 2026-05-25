interface MessageBubbleProperties {
	content: string;
	role: "assistant" | "user";
}

export function MessageBubble({ content, role }: MessageBubbleProperties) {
	const isUser = role === "user";

	return (
		<div
			style={{
				display: "flex",
				justifyContent: isUser ? "flex-end" : "flex-start",
				padding: "0.25rem 0",
			}}
		>
			<div
				style={{
					background: isUser ? "#2563eb" : "#2a2a2a",
					borderRadius: "12px",
					color: "#e0e0e0",
					fontSize: "0.9375rem",
					lineHeight: 1.6,
					maxWidth: "75%",
					padding: "0.75rem 1rem",
					whiteSpace: "pre-wrap",
					wordBreak: "break-word",
				}}
			>
				{content}
			</div>
		</div>
	);
}
