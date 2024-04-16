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

	topWrapper: (theme: AppTheme) =>
		css({
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-start",
			paddingInline: theme.spacing(4),
			paddingBlockStart: theme.spacing(2),
			paddingBlockEnd: theme.spacing(8),
			maxWidth: theme.breakpoints.values.lg,
			width: "100%",
		}),

	leftWrapper: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			color: theme.palette.text.secondary,
		}),

	rightWrapper: (theme: AppTheme) =>
		css({
			display: "flex",
			justifyContent: "flex-end",
		}),
};
