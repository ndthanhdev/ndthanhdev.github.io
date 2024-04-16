import * as React from "react";
import Stack from "@mui/material/Stack";
import { Wip } from "@/components/organisms/wip";
import { useAppDrawerStore } from "@/stores/use-app-drawer-store";
import { useThemeModeStore } from "@/stores/use-theme-mode-store";
import { MainTemplate } from "@/components/templates/main";

function Index() {
	const drawer = useAppDrawerStore();
	const theme = useThemeModeStore();

	return (
		<MainTemplate
			appDrawerProps={{
				onClose: drawer.closeDrawer,
				open: drawer.open,
				themeMode: theme.themeMode,
				onThemeModeChange: (_, mode) => theme.setThemeMode(mode),
			}}
			appHeaderProps={{
				onOpenSettings: drawer.openDrawer,
				themeMode: theme.themeMode,
				onToggleThemeMode: theme.toggleThemeMode,
			}}
			appFooterProps={{}}
		>
			<Wip />
		</MainTemplate>
	);
}

export default Index;
