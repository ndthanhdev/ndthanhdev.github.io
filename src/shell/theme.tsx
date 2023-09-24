import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme as MuiTheme,
} from "@mui/material";
import * as React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AppTheme extends MuiTheme {}

declare module "@emotion/react" {
	export interface Theme extends AppTheme {}
}

export enum ThemeMode {
	Light = "light",
	Dark = "dark",
}

export const lightTheme = createTheme({});
export const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export type ThemeModeState = {
	themeMode: ThemeMode;
	setThemeMode: (mode: ThemeMode) => void;
};

export const useThemeMode = create(
	persist<ThemeModeState>(
		(set) => ({
			themeMode: ThemeMode.Light,
			setThemeMode: (mode) =>
				set((state) => ({
					themeMode: mode,
				})),
		}),
		{
			name: "app-theme-mode",
		},
	),
);

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

	return (
		<MuiThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};
