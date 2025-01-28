import { css } from "@emotion/react";
import { type AppTheme } from "@n8v/app/theme";
import { ellipsis } from "polished";

export const styles = {
	actions: () => css({ justifyContent: "end", marginTop: "auto" }),

	content: [
		css({
			flexGrow: 1,
			flexShrink: 1,
		}),
	],

	description: css({
		...ellipsis("100%", 3),
	}),

	media: (theme: AppTheme) =>
		css({
			height: theme.spacing(27),
			overflow: "hidden",
			pointerEvents: "none",
			position: "relative",
			width: theme.spacing(40),
		}),

	mediaIframe: () =>
		css({
			border: 0,
			height: "500%",
			overflow: "hidden",
			pointerEvents: "none",
			transform: "scale(0.2)",
			transformOrigin: "top left",
			width: "500%",
		}),

	root: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			height: theme.spacing(50),
			width: theme.spacing(40),
		}),
};
