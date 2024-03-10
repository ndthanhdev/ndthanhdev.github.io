import { useThemeMode } from "@/stores/use-theme-mode";
import { useAppDrawer } from "@/stores/use-app-drawer";
import { ThemeMode } from "@/theme";

import { AppHeader as Comp } from "./component";

export type AppHeaderProps = React.PropsWithChildren<{}>;

export const AppHeader = ({ children }: AppHeaderProps) => {
	const settings = useAppDrawer();
	const themeMode = useThemeMode();

	return (
		<Comp
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
			{children}
		</Comp>
	);
};
