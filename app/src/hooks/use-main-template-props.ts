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
			open: drawer.open,
			themeMode: theme.themeMode,
			onThemeModeChange: (_, mode) => {
				theme.setThemeMode(mode);
			},
		},
		appHeaderProps: {
			onOpenSettings: drawer.openDrawer,
			themeMode: theme.themeMode,
			onToggleThemeMode: theme.toggleThemeMode,
		},
		appFooterProps: {
			year,
			buildNumber: envs.buildNumber,
			rev: envs.rev,
			mode: envs.mode,
		},
	};
};
