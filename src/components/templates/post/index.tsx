import React from "react";
import { Container } from "@mui/material";
import { AppDrawer, AppDrawerProps } from "@/components/organisms/app-drawer";
import { AppHeader, AppHeaderProps } from "@/components/organisms/app-header";

export type PostLayoutProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appHeaderProps: AppHeaderProps;
}>;

export const PostLayout = ({
	appDrawerProps,
	appHeaderProps,
	children,
}: any) => {
	return (
		<>
			<AppHeader {...appHeaderProps} />
			<AppDrawer {...appDrawerProps} />
			<Container maxWidth="xl">{children}</Container>
		</>
	);
};
