import { useThemeMode } from "@/stores/use-theme-mode";

import { AppDrawer as Comp } from "./component";
import { useAppDrawer } from "../../stores/use-app-drawer";

export type AppDrawerProps = React.PropsWithChildren<{}>;

export const AppDrawer = ({ children }: AppDrawerProps) => {
	const settings = useAppDrawer();
	const theme = useThemeMode();

	return (
		<Comp
			open={settings.open}
			onClose={() => settings.setOpen(false)}
			themeMode={theme.themeMode}
			onThemeModeChange={(e, mode) => theme.setThemeMode(mode)}
		>
			{children}
		</Comp>
	);
};
