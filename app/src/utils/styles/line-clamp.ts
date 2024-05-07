import { CSSObject } from "@emotion/css";

export const lineClamp = (
	lineCount: number,
	fontSize: string | number,
	lineHeight: string | number,
): CSSObject => ({
	display: "-webkit-box",
	WebkitLineClamp: lineCount,
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
	maxHeight: `calc(${fontSize} * ${lineHeight} * ${lineCount})`,
});
