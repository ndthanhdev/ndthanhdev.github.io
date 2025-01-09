import { css } from "@emotion/react";
import { type AppTheme } from "@n8v/app/theme";

export const styles = {
	actions: () => css({ justifyContent: "end" }),

	media: (theme: AppTheme) =>
		css({
			border: 0,
			height: theme.spacing(300),
			overflow: "hidden",
			pointerEvents: "none",
			width: theme.spacing(400),
			zoom: 0.1,
		}),
};
