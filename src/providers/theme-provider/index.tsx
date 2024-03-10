import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	ThemeOptions,
} from "@mui/material";
import * as React from "react";
import { useThemeMode } from "../../stores/use-theme-mode";
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
	let theme = useThemeMode((state) =>
		state.themeMode === ThemeMode.Dark ? darkTheme : lightTheme,
	);

	if (overrideThemeMode) {
		theme = overrideThemeMode === ThemeMode.Light ? lightTheme : darkTheme;
	}

	console.log("theme", theme);

	React.useEffect(() => {
		useThemeMode.persist.rehydrate();
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
