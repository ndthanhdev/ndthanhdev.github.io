import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const styles = {
	image: (theme: AppTheme) =>
		css({
			backgroundColor: theme.palette.augmentColor({
				color: {
					main: theme.palette.background.paper,
				},
			}).light,
			maxWidth: "100%",
		}),

	root: (theme: AppTheme) =>
		css({
			marginBlockEnd: theme.spacing(4),
			width: "100%",
		}),
};
