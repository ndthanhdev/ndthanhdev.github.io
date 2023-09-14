import * as React from "react";
import { CommonHeaders } from "./headers";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppMDXProvider } from "./mdx-provider";

export type ShellProps = React.PropsWithChildren<{
	children?: React.ReactNode;
}>;

export const Shell = ({ children }: ShellProps) => {
	return (
		<>
			<AppMDXProvider>
				<CommonHeaders />
				{children}
			</AppMDXProvider>
		</>
	);
};
