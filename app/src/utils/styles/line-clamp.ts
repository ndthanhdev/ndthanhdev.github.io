import type { CSSObject } from "@emotion/react";

export const lineClamp = (
	lineCount: number,
	fontSize: string | number,
	lineHeight: string | number,
): CSSObject => ({
	WebkitBoxOrient: "vertical",
	WebkitLineClamp: lineCount,
	display: "-webkit-box",
	maxHeight: `calc(${fontSize} * ${lineHeight} * ${lineCount})`,
	overflow: "hidden",
	textOverflow: "ellipsis",
});
