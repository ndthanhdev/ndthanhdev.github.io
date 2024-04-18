import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";

import { AppThemeProvider } from "../providers/theme-provider";
import { DefaultHeaders } from "./default-headers";

export type ShellProps = React.PropsWithChildren<{
	children?: React.ReactNode;
}>;

const Shell = ({ children }: ShellProps) => (
	<AppThemeProvider>
		<DefaultHeaders />
		{children}
	</AppThemeProvider>
);

export default Shell;
