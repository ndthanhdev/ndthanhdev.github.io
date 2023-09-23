import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { AppTheme, ThemeMode } from "@/shell/theme";
import { css } from "@emotion/react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useToggle } from "rooks";

export type MainLayoutProps = React.PropsWithChildren<{
	onOpenSettings?: (e: any) => void;
}>;

const styles = {
	appBar: (theme: AppTheme) =>
		css({
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundColor: theme.palette.background.paper,
		}),

	toolbar: (theme: AppTheme) =>
		css({
			flex: 1,
			width: "100%",
			maxWidth: theme.breakpoints.values.lg,
			display: "grid",
			gridTemplateColumns: "auto 1fr auto",
			gridTemplateRows: "auto",
			gridTemplateAreas: `\
				"left . right"
			`,
			alignItems: "center",
		}),

	brand: (theme: AppTheme) =>
		css({
			gridArea: "left",
			// color: theme.palette.primary.contrastText,
			textTransform: "uppercase",
		}),

	setting: (theme: AppTheme) =>
		css({
			gridArea: "right",
		}),
};

export const MainLayout = ({ children, onOpenSettings }: MainLayoutProps) => {
	return (
		<>
			<HideOnScroll>
				<AppBar css={styles.appBar}>
					<Toolbar css={styles.toolbar}>
						<Link css={styles.brand} variant="h6" underline="none" href="/">
							ndthanhdev
						</Link>
						<Button
							css={styles.setting}
							variant="outlined"
							onClick={onOpenSettings}
						>
							<SettingsOutlinedIcon />
						</Button>
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
