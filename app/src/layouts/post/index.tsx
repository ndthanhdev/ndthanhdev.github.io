import { graphql, PageProps } from "gatsby";
import * as React from "react";

import { MyHelmet } from "@/components/atoms/my-helmet";
import { PostTemplate } from "@/components/templates/post";
import { AppMDXProvider } from "@/providers/mdx-provider";
import { useSiteMetadata } from "@/shell/default-headers";
import { useAppDrawerStore } from "@/stores/use-app-drawer-store";
import { useThemeModeStore } from "@/stores/use-theme-mode-store";

export type PostLayoutProps = PageProps<Queries.PostTemplateQuery>;

const PostLayout = ({ children, data }: PostLayoutProps) => {
	const siteMetadata = useSiteMetadata(),
		drawer = useAppDrawerStore(),
		theme = useThemeModeStore();

	return (
		<AppMDXProvider>
			<MyHelmet>
				<title>
					{data.mdx?.frontmatter?.title} | {siteMetadata.title}
				</title>
			</MyHelmet>
			<PostTemplate
				appDrawerProps={{
					onClose: drawer.closeDrawer,
					open: drawer.open,
					themeMode: theme.themeMode,
					onThemeModeChange: (_, mode) => {
						theme.setThemeMode(mode);
					},
				}}
				appHeaderProps={{
					onOpenSettings: drawer.openDrawer,
					themeMode: theme.themeMode,
					onToggleThemeMode: theme.toggleThemeMode,
				}}
			>
				{children}
			</PostTemplate>
		</AppMDXProvider>
	);
};

export default PostLayout;

export const pageQuery = graphql`
	query PostTemplate($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`;
