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
import { Link as GatsbyLink } from "gatsby";
import * as React from "react";

import { ThemeMode } from "@/theme";

import { styles } from "./styles";

export type AppHeaderProps = React.PropsWithChildren<{
	onOpenSettings: (e: unknown) => void;

	themeMode: ThemeMode;
	onToggleThemeMode: (e: unknown) => void;
}>;

export const AppHeader = ({
	children,
	onOpenSettings,
	themeMode,
	onToggleThemeMode,
}: AppHeaderProps) => (
	<>
		<HideOnScroll>
			<AppBar css={styles.appBar}>
				<Toolbar css={styles.toolbar}>
					<Stack css={styles.left.root} direction="row" alignItems="center">
						<Link
							component={GatsbyLink}
							css={styles.brand}
							variant="h6"
							underline="none"
							to="/"
							aria-label="Home"
						>
							ndthanhdev
						</Link>
						<Button
							component={GatsbyLink}
							variant="text"
							size="large"
							to="/about"
							aria-label="About"
						>
							about
						</Button>
						<Button
							component={GatsbyLink}
							variant="text"
							size="large"
							to="/projects"
							arial-label="Projects"
						>
							Projects
						</Button>
					</Stack>
					<Stack css={styles.right.root} direction="row" alignItems="center">
						<IconButton
							size="large"
							edge="end"
							color="primary"
							onClick={onToggleThemeMode}
							area-label="Toggle theme mode"
						>
							{themeMode === ThemeMode.Light ? (
								<LightModeOutlinedIcon />
							) : (
								<DarkModeOutlinedIcon />
							)}
						</IconButton>
						<IconButton
							color="primary"
							size="large"
							onClick={onOpenSettings}
							aria-label="Open settings"
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
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
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
