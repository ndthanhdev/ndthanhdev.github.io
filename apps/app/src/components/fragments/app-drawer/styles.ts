import { css } from "@emotion/react";
import { drawerClasses } from "@mui/material/Drawer";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import { type AppTheme } from "@n8v/app/theme";

export const styles = {
	header: (theme: AppTheme) =>
		css({
			alignItems: "center",
			display: "flex",
			justifyContent: "space-between",
			padding: theme.spacing(2),
		}),

	root: (theme: AppTheme) =>
		css({
			[`& .${drawerClasses.paper}`]: {
				[theme.breakpoints.up("lg")]: {
					width: 360,
				},
				[theme.breakpoints.up("sm")]: {
					width: 310,
				},
			},
		}),

	section: {
		heading: (theme: AppTheme) =>
			css({
				color: theme.palette.text.secondary,
				marginBlockEnd: theme.spacing(1),
			}),
		root: (theme: AppTheme) => css({ padding: theme.spacing(2) }),
	},

	toggleGroup: () =>
		css({
			[`& .${toggleButtonClasses.root}`]: {
				width: "100%",
			},
			width: "100%",
		}),
};
