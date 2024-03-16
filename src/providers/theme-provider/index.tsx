import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	ThemeOptions,
} from "@mui/material";
import * as React from "react";
import { useThemeModeStore } from "../../stores/use-theme-mode-store";
import { ThemeMode } from "@/theme";
import { GlobalStyles } from "./global-styles";

const themeOption = {
	palette: {
		primary: {
			main: "#6750A4",
		},
		secondary: {
			main: "#958da4",
		},
	},
} satisfies ThemeOptions;

export const lightTheme = createTheme({
	...themeOption,
});
export const darkTheme = createTheme({
	...themeOption,
	palette: {
		...themeOption.palette,
		mode: "dark",
	},
});

export type AppThemeProps = React.PropsWithChildren<{
	overrideThemeMode?: ThemeMode;
}>;

export const AppThemeProvider = ({
	children,
	overrideThemeMode,
}: AppThemeProps) => {
	let theme = useThemeModeStore((state) =>
		state.themeMode === ThemeMode.Dark ? darkTheme : lightTheme,
	);

	if (overrideThemeMode) {
		theme = overrideThemeMode === ThemeMode.Light ? lightTheme : darkTheme;
	}

	React.useEffect(() => {
		useThemeModeStore.persist.rehydrate();
	}, []);

	return (
		<MuiThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>
				<GlobalStyles />
				{children}
			</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};
