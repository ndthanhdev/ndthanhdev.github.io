import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme as MuiTheme,
} from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import * as React from "react";

const theme = createTheme();

export interface AppTheme extends MuiTheme {}

declare module "@emotion/react" {
	export interface Theme extends AppTheme {}
}

export type AppThemeProps = React.PropsWithChildren<{}>;

export const AppTheme = ({ children }: AppThemeProps) => {
	return (
		<MuiThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
		</MuiThemeProvider>
	);
};
