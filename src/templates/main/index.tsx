import * as React from "react";
import { AppHeader } from "@/widgets/app-header";
import { AppDrawer } from "@/widgets/app-drawer";

export type MainTemplateProps = React.PropsWithChildren<{}>;

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<>
			<AppHeader />
			<AppDrawer />
			{children}
		</>
	);
};
