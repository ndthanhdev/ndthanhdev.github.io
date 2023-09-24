import { ThemeMode, useThemeMode } from "@/shell/theme";
import { SettingContainer, useSettings } from "../menu";
import { MainLayout } from "./main";
import { createStore } from "zustand";

export const useMainLayout = createStore((set) => ({
	openSettings: false,
	setOpenSettings: (open: boolean) => set({ openSettings: open }),
}));

export type MainLayoutContainerProps = React.PropsWithChildren<{}>;

export const MainLayoutContainer = ({ children }: MainLayoutContainerProps) => {
	const settings = useSettings();
	const themeMode = useThemeMode();

	return (
		<MainLayout
			onOpenSettings={() => settings.setOpen(true)}
			themeMode={themeMode.themeMode}
			onToggleThemeMode={() =>
				themeMode.setThemeMode(
					themeMode.themeMode === ThemeMode.Light
						? ThemeMode.Dark
						: ThemeMode.Light,
				)
			}
		>
			<SettingContainer />
			{children}
		</MainLayout>
	);
};
