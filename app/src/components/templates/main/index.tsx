import * as React from "react";
import { AppHeader, AppHeaderProps } from "@/components/organisms/app-header";
import { AppDrawer, AppDrawerProps } from "@/components/organisms/app-drawer";

export type MainTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appHeaderProps: AppHeaderProps;
}>;

export const MainTemplate = ({
	children,
	appDrawerProps,
	appHeaderProps,
}: MainTemplateProps) => {
	return (
		<>
			<AppHeader {...appHeaderProps} />
			<AppDrawer {...appDrawerProps} />
			{children}
		</>
	);
};
