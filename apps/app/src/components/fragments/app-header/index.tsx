import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ThemeMode } from "@n8v/app/theme";
import { Link as GatsbyLink } from "gatsby";
import * as React from "react";

import { styles } from "./styles";

export type AppHeaderProps = React.PropsWithChildren<{
	onOpenSettings: (element: unknown) => void;

	onToggleThemeMode: (element: unknown) => void;
	themeMode: ThemeMode;
}>;

export const AppHeader = ({
	children,
	onOpenSettings,
	onToggleThemeMode,
	themeMode,
}: AppHeaderProps) => (
	<>
		<HideOnScroll>
			<AppBar css={styles.appBar}>
				<Toolbar css={styles.toolbar}>
					<Stack alignItems="center" css={styles.left.root} direction="row">
						<Link
							aria-label="Home"
							component={GatsbyLink}
							css={styles.brand}
							to="/"
							underline="none"
							variant="h6"
						>
							ndthanhdev
						</Link>
						<Button
							aria-label="About"
							component={GatsbyLink}
							size="large"
							to="/about"
							variant="text"
						>
							about
						</Button>
						<Button
							arial-label="Apps"
							component={GatsbyLink}
							size="large"
							to="/apps"
							variant="text"
						>
							apps
						</Button>
					</Stack>
					<Stack alignItems="center" css={styles.right.root} direction="row">
						<IconButton
							area-label="Toggle theme mode"
							color="primary"
							edge="end"
							onClick={onToggleThemeMode}
							size="large"
						>
							{themeMode === ThemeMode.Light ? (
								<LightModeOutlinedIcon />
							) : (
								<DarkModeOutlinedIcon />
							)}
						</IconButton>
						<IconButton
							aria-label="Open settings"
							color="primary"
							onClick={onOpenSettings}
							size="large"
						>
							<MenuOutlinedIcon />
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
		<Toolbar />
		{children}
	</>
);

interface Props {
	children: React.ReactElement;
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

function HideOnScroll(props: Props) {
	const { children, window } = props,
		/*
		 * Note that you normally won't need to set the window ref as useScrollTrigger
		 * will default to window.
		 * This is only being set here because the demo is in an iframe.
		 */
		trigger = useScrollTrigger({
			target: window ? window() : undefined,
		});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
