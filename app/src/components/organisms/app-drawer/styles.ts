import { css } from "@emotion/react";
import { drawerClasses } from "@mui/material/Drawer";
import { toggleButtonClasses } from "@mui/material/ToggleButton";

import { AppTheme } from "@/theme";

export const styles = {
	root: (theme: AppTheme) =>
		css({
			[`& .${drawerClasses.paper}`]: {
				[theme.breakpoints.up("sm")]: {
					width: 310,
				},
				[theme.breakpoints.up("lg")]: {
					width: 360,
				},
			},
		}),

	header: (theme: AppTheme) =>
		css({
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: theme.spacing(2),
		}),

	section: {
		root: (theme: AppTheme) => css({ padding: theme.spacing(2) }),
		heading: (theme: AppTheme) =>
			css({
				color: theme.palette.text.secondary,
				marginBlockEnd: theme.spacing(1),
			}),
	},

	toggleGroup: () =>
		css({
			width: "100%",
			[`& .${toggleButtonClasses.root}`]: {
				width: "100%",
			},
		}),
};
