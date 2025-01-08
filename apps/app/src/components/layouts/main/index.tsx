import Container from "@mui/material/Container";
import {
	AppDrawer,
	type AppDrawerProps,
} from "@n8v/app/components/fragments/app-drawer";
import {
	AppFooter,
	type AppFooterProps,
} from "@n8v/app/components/fragments/app-footer";
import {
	AppHeader,
	type AppHeaderProps,
} from "@n8v/app/components/fragments/app-header";
import * as React from "react";

import { styles } from "./styles";

export type MainTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appFooterProps: AppFooterProps;
	appHeaderProps: AppHeaderProps;
}>;

export const MainTemplate = ({
	appDrawerProps,
	appFooterProps,
	appHeaderProps,
	children,
}: MainTemplateProps) => (
	<>
		<AppHeader {...appHeaderProps} />
		<AppDrawer {...appDrawerProps} />
		<Container component="main" css={styles.main}>
			{children}
		</Container>
		<AppFooter {...appFooterProps} />
	</>
);
