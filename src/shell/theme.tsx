import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme as MuiTheme,
	ThemeOptions,
} from "@mui/material";
import * as React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import localForage from "localforage";

export interface AppTheme extends MuiTheme {}

declare module "@emotion/react" {
	export interface Theme extends AppTheme {}
}

export enum ThemeMode {
	Light = "light",
	Dark = "dark",
}

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

export type ThemeModeState = {
	themeMode: ThemeMode;
	setThemeMode: (mode: ThemeMode) => void;
};

export const useThemeMode = create(
	persist<ThemeModeState>(
		(set) => ({
			themeMode: ThemeMode.Dark,
			setThemeMode: (mode) =>
				set((state) => ({
					themeMode: mode,
				})),
		}),
		{
			name: "app-theme-mode",
			storage: createJSONStorage(() => localForage as any),
			skipHydration: true,
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

	React.useEffect(() => {
		useThemeMode.persist.rehydrate();
	}, []);

	return (
		<MuiThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};
