import * as React from "react";
import { DefaultHeaders } from "./default-headers";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppThemeProvider } from "../providers/theme-provider";

export type ShellProps = React.PropsWithChildren<{
	children?: React.ReactNode;
}>;

const Shell = ({ children }: ShellProps) => {
	return (
		<AppThemeProvider>
			<DefaultHeaders />
			{children}
		</AppThemeProvider>
	);
};


export default Shell;