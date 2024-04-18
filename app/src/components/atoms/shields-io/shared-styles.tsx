import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const iconShieldStyles = {
	wrapper: (theme: AppTheme) =>
		css({
			borderRadius: theme.spacing(1),
			borderColor: theme.palette.text.secondary,
			borderStyle: "solid",
			borderWidth: 1,
			display: "flex",
			justifyContent: "stretch",
			alignItems: "stretch",
			overflow: "hidden",
		}),
};
