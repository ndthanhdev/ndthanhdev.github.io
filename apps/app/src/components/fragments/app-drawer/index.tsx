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
import { ThemeMode } from "@n8v/app/theme";
import * as React from "react";

import { styles } from "./styles";

export type AppDrawerProps = React.PropsWithChildren<{
	onClose: () => void;
	onThemeModeChange: (element: unknown, mode: ThemeMode) => void;
	open: boolean;
	themeMode: ThemeMode;
}>;

export const AppDrawer = ({
	children,
	onClose,
	onThemeModeChange,
	open,
	themeMode,
}: AppDrawerProps) => (
	<Drawer anchor="right" css={styles.root} onClose={onClose} open={open}>
		<Box css={styles.header}>
			<Typography fontWeight="500" variant="body1">
				Settings
			</Typography>
			<IconButton color="inherit" edge="end" onClick={onClose}>
				<CloseIcon color="primary" fontSize="small" />
			</IconButton>
		</Box>
		<Divider />
		<Box css={styles.section.root}>
			<Typography css={styles.section.heading}>Theme Mode</Typography>
			<ToggleButtonGroup
				css={styles.toggleGroup}
				exclusive
				onChange={(element, mode: unknown) => {
					mode && onThemeModeChange(element, mode as ThemeMode);
				}}
				value={themeMode}
			>
				<ToggleButton value={ThemeMode.Light}>
					<LightModeIcon />
				</ToggleButton>
				<ToggleButton aria-label="centered" value={ThemeMode.Dark}>
					<DarkModeIcon />
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
		{children}
	</Drawer>
);
