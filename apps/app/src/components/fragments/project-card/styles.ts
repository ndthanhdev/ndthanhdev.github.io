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
			border: 0,
			height: theme.spacing(300),
			overflow: "hidden",
			pointerEvents: "none",
			width: theme.spacing(400),
			zoom: 0.1,
		}),

	root: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			height: theme.spacing(50),
			width: theme.spacing(40),
		}),
};
