import { ThemeMode, useThemeMode } from "@/shell/theme";
import { create } from "zustand";
import { AppMenu } from "./menu";

type SettingsState = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const useSettings = create<SettingsState>((set) => ({
	open: false,
	setOpen: (open: boolean) => set((state) => ({ open: !state.open })),
}));

export type SettingContainerProps = React.PropsWithChildren<{}>;

export const SettingContainer = ({ children }: SettingContainerProps) => {
	const settings = useSettings();
	const theme = useThemeMode();

	return (
		<AppMenu
			open={settings.open}
			onClose={() => settings.setOpen(false)}
			themeMode={theme.themeMode}
			onThemeModeChange={(e, mode) => theme.setThemeMode(mode)}
		>
			{children}
		</AppMenu>
	);
};
