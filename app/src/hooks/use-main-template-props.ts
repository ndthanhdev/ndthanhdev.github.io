import { DateTime } from "luxon";
import * as React from "react";

import { MainTemplateProps } from "@/components/templates/main";
import { useAppDrawerStore } from "@/stores/use-app-drawer-store";
import { useThemeModeStore } from "@/stores/use-theme-mode-store";
import { envs } from "@/utils/envs";

export const useMainTemplateProps = (): MainTemplateProps => {
	const drawer = useAppDrawerStore(),
		theme = useThemeModeStore(),
		year = React.useMemo(() => DateTime.now().year.toString(), []);

	return {
		appDrawerProps: {
			onClose: drawer.closeDrawer,
			onThemeModeChange: (_, mode) => {
				theme.setThemeMode(mode);
			},
			open: drawer.open,
			themeMode: theme.themeMode,
		},
		appFooterProps: {
			buildNumber: envs.buildNumber,
			mode: envs.mode,
			rev: envs.rev,
			year,
		},
		appHeaderProps: {
			onOpenSettings: drawer.openDrawer,
			onToggleThemeMode: theme.toggleThemeMode,
			themeMode: theme.themeMode,
		},
	};
};
