import { Container } from "@mui/material";
import React from "react";

import { AppDrawer, AppDrawerProps } from "@/components/organisms/app-drawer";
import { AppFooter, AppFooterProps } from "@/components/organisms/app-footer";
import { AppHeader, AppHeaderProps } from "@/components/organisms/app-header";
import {
	PostHeader,
	PostHeaderProps,
} from "@/components/organisms/post-header";

import { styles } from "./styles";

export type PostTemplateProps = React.PropsWithChildren<{
	appDrawerProps: AppDrawerProps;
	appHeaderProps: AppHeaderProps;
	appFooterProps: AppFooterProps;
	postHeaderProps: PostHeaderProps;
}>;

export const PostTemplate = ({
	appDrawerProps,
	appHeaderProps,
	appFooterProps,
	postHeaderProps,
	children,
}: PostTemplateProps) => (
	<>
		<AppHeader {...appHeaderProps} />
		<AppDrawer {...appDrawerProps} />
		<Container maxWidth="md" css={styles.main}>
			<PostHeader {...postHeaderProps} css={styles.header} />
			{children}
		</Container>
		<AppFooter {...appFooterProps} />
	</>
);
