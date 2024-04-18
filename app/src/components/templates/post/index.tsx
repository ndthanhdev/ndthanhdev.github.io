import { Container } from "@mui/material";
import React from "react";

import { AppDrawer, AppDrawerProps } from "@/components/organisms/app-drawer";
import { AppHeader, AppHeaderProps } from "@/components/organisms/app-header";

export type PostTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appHeaderProps: AppHeaderProps;
}>;

export const PostTemplate = ({
	appDrawerProps,
	appHeaderProps,
	children,
}: PostTemplateProps) => (
	<>
		<AppHeader {...appHeaderProps} />
		<AppDrawer {...appDrawerProps} />
		<Container maxWidth="lg">{children}</Container>
	</>
);
