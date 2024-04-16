import { css } from "@emotion/react";
import { AppTheme } from "@/theme";

export const styles = {
	root: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
		}),

	contentContainer: (theme: AppTheme) =>
		css({
			width: "100%",
			display: "flex",
			justifyContent: "center",
		}),

	contentWrapper: (theme: AppTheme) =>
		css({
			backgroundColor: theme.palette.background.paper,
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			marginInline: theme.spacing(8),
			marginBlockStart: theme.spacing(4),
			marginBlockEnd: theme.spacing(6),
			width: "100%",
			maxWidth: theme.breakpoints.values.lg,
		}),

	leftWrapper: (theme: AppTheme) =>
		css({
			display: "flex",
			justifyContent: "flex-start",
		}),
	centerWrapper: (theme: AppTheme) =>
		css({ display: "flex", justifyContent: "center" }),
	rightWrapper: (theme: AppTheme) =>
		css({
			display: "flex",
			justifyContent: "flex-end",
		}),
};
