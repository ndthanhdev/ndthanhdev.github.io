import * as React from "react";

import { AppDrawer, AppDrawerProps } from "@/components/organisms/app-drawer";
import { AppFooter, AppFooterProps } from "@/components/organisms/app-footer";
import { AppHeader, AppHeaderProps } from "@/components/organisms/app-header";

import { styles } from "./styles";

export type MainTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appHeaderProps: AppHeaderProps;
	appFooterProps: AppFooterProps;
}>;

export const MainTemplate = ({
	children,
	appDrawerProps,
	appHeaderProps,
	appFooterProps,
}: MainTemplateProps) => (
	<>
		<AppHeader {...appHeaderProps} />
		<AppDrawer {...appDrawerProps} />
		<main css={styles.main}>{children}</main>
		<AppFooter {...appFooterProps} />
	</>
);
