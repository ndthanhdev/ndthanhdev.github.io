import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { ThemeMode } from "@/theme";

import { styles } from "./styles";

export type AppDrawerProps = React.PropsWithChildren<{
	open: boolean;
	onClose: () => void;
	themeMode: ThemeMode;
	onThemeModeChange: (e: unknown, mode: ThemeMode) => void;
}>;

export const AppDrawer = ({
	children,
	open,
	onClose,
	themeMode,
	onThemeModeChange,
}: AppDrawerProps) => (
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
				onChange={(e, mode: unknown) =>
					mode && onThemeModeChange(e, mode as ThemeMode)
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
