import { Container } from "@mui/material";
import {
	AppDrawer,
	type AppDrawerProps,
} from "@n8v/app/components/organisms/app-drawer";
import {
	AppFooter,
	type AppFooterProps,
} from "@n8v/app/components/organisms/app-footer";
import {
	AppHeader,
	type AppHeaderProps,
} from "@n8v/app/components/organisms/app-header";
import {
	PostHeader,
	type PostHeaderProps,
} from "@n8v/app/components/organisms/post-header";
import React from "react";

import { styles } from "./styles";

// eslint-disable-next-line unicorn/prevent-abbreviations
export type PostTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appFooterProps: AppFooterProps;
	appHeaderProps: AppHeaderProps;
	postHeaderProps: PostHeaderProps;
}>;

export const PostTemplate = ({
	appDrawerProps,
	appFooterProps,
	appHeaderProps,
	children,
	postHeaderProps,
}: PostTemplateProps) => (
	<>
		<AppHeader {...appHeaderProps} />
		<AppDrawer {...appDrawerProps} />
		<Container css={styles.main} maxWidth="md">
			<PostHeader {...postHeaderProps} css={styles.header} />
			{children}
		</Container>
		<AppFooter {...appFooterProps} />
	</>
);
