import localForage from "localforage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ThemeMode } from "@/theme";

export interface ThemeModeState {
	themeMode: ThemeMode;
	setThemeMode: (mode: ThemeMode) => void;
	toggleThemeMode: () => void;
}

export const useThemeModeStore = create(
	persist<ThemeModeState>(
		(set) => ({
			setThemeMode: (mode) => {
				set(() => ({
					themeMode: mode,
				}));
			},
			themeMode: ThemeMode.Light,
			toggleThemeMode: () => {
				set((state) => ({
					themeMode:
						state.themeMode === ThemeMode.Dark
							? ThemeMode.Light
							: ThemeMode.Dark,
				}));
			},
		}),
		{
			name: "app-theme-mode",
			skipHydration: true,
			storage: createJSONStorage(() => localForage),
		},
	),
);
