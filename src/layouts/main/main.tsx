import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { AppTheme, ThemeMode } from "@/shell/theme";
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link as GatsbyLink } from "gatsby";
import IconButton from "@mui/material/IconButton";

export type MainLayoutProps = React.PropsWithChildren<{
	onOpenSettings?: (e: any) => void;

	themeMode?: ThemeMode;
	onToggleThemeMode?: (e: any) => void;
}>;

const styles = {
	appBar: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundColor: theme.palette.background.paper,
		}),

	left: {
		root: (theme: AppTheme) =>
			css({
				gap: theme.spacing(2),
				gridArea: "left",
				textTransform: "uppercase",
			}),
	},

	right: {
		root: (theme: AppTheme) =>
			css({ gap: theme.spacing(2), gridArea: "right" }),
	},

	toolbar: (theme: AppTheme) =>
		css({
			flex: 1,
			width: "100%",
			maxWidth: theme.breakpoints.values.lg,
			display: "grid",
			gridTemplateColumns: "auto 1fr auto",
			gridTemplateRows: "1fr",
			gridTemplateAreas: `\
				"left . right"
			`,
			alignItems: "center",
		}),

	brand: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightBold,
		}),
};

export const MainLayout = ({
	children,
	onOpenSettings,
	themeMode,
	onToggleThemeMode,
}: MainLayoutProps) => {
	return (
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
							>
								ndthanhdev
							</Link>
							<Button
								component={GatsbyLink}
								variant="text"
								size="large"
								to="/about"
							>
								about
							</Button>
							<Button
								component={GatsbyLink}
								variant="text"
								size="large"
								to="/projects"
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
							>
								{themeMode === ThemeMode.Light ? (
									<LightModeOutlinedIcon />
								) : (
									<DarkModeOutlinedIcon />
								)}
							</IconButton>
							<IconButton color="primary" size="large" onClick={onOpenSettings}>
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
};

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
