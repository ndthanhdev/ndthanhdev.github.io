import * as React from "react";
import { DefaultHeaders } from "./default-headers";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppMDXProvider } from "./mdx-provider";
import { GlobalStyles } from "./global-styles";
import { AppThemeProvider, AppThemeProps } from "./theme";

export type ShellProps = React.PropsWithChildren<{
	children?: React.ReactNode;
	themeProps?: AppThemeProps;
}>;

export const Shell = ({ children, themeProps }: ShellProps) => {
	return (
		<AppThemeProvider {...themeProps}>
			<AppMDXProvider>
				<DefaultHeaders />
				<GlobalStyles />
				{children}
			</AppMDXProvider>
		</AppThemeProvider>
	);
};
