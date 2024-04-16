import { css } from "@emotion/react";
import { AppTheme } from "@/theme";

export const styles = {
	appBar: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundColor: theme.palette.background.paper,
		}),

	left: {
		root: (theme: AppTheme) =>
			css({
				gap: theme.spacing(2),
				gridArea: "left",
				textTransform: "uppercase",
			}),
	},

	right: {
		root: (theme: AppTheme) =>
			css({ gap: theme.spacing(2), gridArea: "right" }),
	},

	toolbar: (theme: AppTheme) =>
		css({
			flex: 1,
			width: "100%",
			maxWidth: theme.breakpoints.values.lg,
			display: "grid",
			gridTemplateColumns: "auto 1fr auto",
			gridTemplateRows: "1fr",
			gridTemplateAreas: `\
				"left . right"
			`,
			alignItems: "center",
		}),

	brand: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightBold,
		}),
};
