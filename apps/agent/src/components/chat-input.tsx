import { type FormEvent, type KeyboardEvent, useRef, useState } from "react";

interface ChatInputProperties {
	disabled: boolean;
	onSend: (message: string) => void;
}

export function ChatInput({ disabled, onSend }: ChatInputProperties) {
	const [value, setValue] = useState("");
	const textareaReference = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const trimmed = value.trim();
		if (!trimmed || disabled) return;
		onSend(trimmed);
		setValue("");
		if (textareaReference.current) {
			textareaReference.current.style.height = "auto";
		}
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleSubmit(event);
		}
	};

	const handleInput = () => {
		const element = textareaReference.current;
		if (element) {
			element.style.height = "auto";
			element.style.height = `${Math.min(element.scrollHeight, 200).toString()}px`;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				alignItems: "flex-end",
				display: "flex",
				gap: "0.5rem",
			}}
		>
			<textarea
				disabled={disabled}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				onInput={handleInput}
				onKeyDown={handleKeyDown}
				placeholder={disabled ? "Load a model first..." : "Type a message..."}
				ref={textareaReference}
				rows={1}
				style={{
					background: "#1e1e1e",
					border: "1px solid #444",
					borderRadius: "8px",
					color: "#e0e0e0",
					flex: 1,
					fontFamily: "inherit",
					fontSize: "0.9375rem",
					lineHeight: 1.5,
					maxHeight: "200px",
					outline: "none",
					padding: "0.625rem 0.75rem",
					resize: "none",
				}}
				value={value}
			/>
			<button
				disabled={disabled || !value.trim()}
				style={{
					background: "#2563eb",
					border: "none",
					borderRadius: "8px",
					color: "white",
					cursor: disabled || !value.trim() ? "not-allowed" : "pointer",
					fontSize: "0.9375rem",
					opacity: disabled || !value.trim() ? 0.5 : 1,
					padding: "0.625rem 1.25rem",
				}}
				type="submit"
			>
				Send
			</button>
		</form>
	);
}
