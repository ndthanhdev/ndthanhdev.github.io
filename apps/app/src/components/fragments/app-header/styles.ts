import { css } from "@emotion/react";
import { type AppTheme } from "@n8v/app/theme";

export const styles = {
	appBar: (theme: AppTheme) =>
		css({
			alignItems: "center",
			backgroundColor: theme.palette.background.paper,
			display: "flex",
			flexDirection: "column",
		}),

	brand: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightBold,
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
		root: () => css({ gridArea: "right" }),
	},

	toolbar: (theme: AppTheme) =>
		css({
			alignItems: "center",
			display: "grid",
			flex: 1,
			gridTemplateAreas: `\
				"left . right"
			`,
			gridTemplateColumns: "auto 1fr auto",
			gridTemplateRows: "1fr",
			maxWidth: theme.breakpoints.values.lg,
			width: "100%",
		}),
};
