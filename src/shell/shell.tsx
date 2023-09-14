import * as React from "react";
import { DefaultHeaders } from "./default-headers";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppMDXProvider } from "./mdx-provider";
import { GlobalStyles } from "./global-styles";

export type ShellProps = React.PropsWithChildren<{
	children?: React.ReactNode;
}>;

export const Shell = ({ children }: ShellProps) => {
	return (
		<>
			<AppMDXProvider>
				<DefaultHeaders />
				<GlobalStyles />
				{children}
			</AppMDXProvider>
		</>
	);
};
