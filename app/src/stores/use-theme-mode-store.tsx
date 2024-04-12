import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import localForage from "localforage";
import { ThemeMode } from "@/theme";

export type ThemeModeState = {
	themeMode: ThemeMode;
	setThemeMode: (mode: ThemeMode) => void;
	toggleThemeMode: () => void;
};

export const useThemeModeStore = create(
	persist<ThemeModeState>(
		(set) => ({
			themeMode: ThemeMode.Dark,
			setThemeMode: (mode) =>
				set((state) => ({
					themeMode: mode,
				})),
			toggleThemeMode: () =>
				set((state) => ({
					themeMode:
						state.themeMode === ThemeMode.Dark
							? ThemeMode.Light
							: ThemeMode.Dark,
				})),
		}),
		{
			name: "app-theme-mode",
			storage: createJSONStorage(() => localForage as any),
			skipHydration: true,
		},
	),
);
