import * as React from "react";
import type { PageProps } from "gatsby";
import { AutoLayout } from "./auto-layout";
import { Headers } from "./headers";

import "@fontsource/roboto";

export type ShellProps = React.PropsWithChildren<
	{
		children?: React.ReactNode;
	} & PageProps
>;

export const Shell = (props: ShellProps) => {
	return (
		<>
			<Headers />
			<AutoLayout {...props} />
		</>
	);
};
