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
			themeMode: ThemeMode.Light,
			setThemeMode: (mode) => {
				set(() => ({
					themeMode: mode,
				}));
			},
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
			storage: createJSONStorage(() => localForage),
			skipHydration: true,
		},
	),
);
