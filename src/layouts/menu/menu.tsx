import * as React from "react";
import { AppTheme, ThemeMode } from "@/shell/theme";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import ToggleButton, { toggleButtonClasses } from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export type AppMenuProps = React.PropsWithChildren<{
	open?: boolean;
	onClose?: () => void;
	themeMode?: ThemeMode;
	onThemeModeChange?: (e: any, mode: ThemeMode) => void;
}>;

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

	toggleGroup: (theme: AppTheme) =>
		css({
			width: "100%",
			[`& .${toggleButtonClasses.root}`]: {
				width: "100%",
			},
		}),
};

export const AppMenu = ({
	children,
	open,
	onClose,
	themeMode,
	onThemeModeChange,
}: AppMenuProps) => {
	return (
		<Drawer css={styles.root} anchor="right" open={open} onClose={onClose}>
			<Box css={styles.header}>
				<Typography variant="body1" fontWeight="500">
					Settings
				</Typography>
				<IconButton color="inherit" onClick={onClose} edge="end">
					<CloseIcon color="primary" fontSize="small" />
				</IconButton>
			</Box>
			<Divider />
			<Box css={styles.section.root}>
				<Typography css={styles.section.heading}>Theme Mode</Typography>
				<ToggleButtonGroup
					css={styles.toggleGroup}
					value={themeMode}
					exclusive
					onChange={(e, mode) =>
						mode && onThemeModeChange?.(e, mode as ThemeMode)
					}
				>
					<ToggleButton value={ThemeMode.Light}>
						<LightModeIcon />
					</ToggleButton>
					<ToggleButton value={ThemeMode.Dark} aria-label="centered">
						<DarkModeIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			{children}
		</Drawer>
	);
};
