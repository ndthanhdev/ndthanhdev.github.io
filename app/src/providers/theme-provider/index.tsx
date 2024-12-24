import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
	createTheme,
	type ThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import * as React from "react";

import { ThemeMode } from "@/theme";

import { useThemeModeStore } from "../../stores/use-theme-mode-store";
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
		// eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
		Promise.resolve(useThemeModeStore.persist.rehydrate()).catch(console.error);
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
