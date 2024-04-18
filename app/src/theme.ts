import "@emotion/react";

import type { Theme as MuiTheme } from "@mui/material";

export interface AppTheme extends MuiTheme {}

declare module "@emotion/react" {
	export interface Theme extends AppTheme {}
}

export enum ThemeMode {
	Light = "light",
	Dark = "dark",
}
