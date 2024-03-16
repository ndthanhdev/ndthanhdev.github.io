import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Merge } from "type-fest";
import { useSiteMetadata } from "@/shell/default-headers";
import { MyHelmet } from "@/components/atoms/my-helmet";
import { MainTemplate } from "@/components/templates/main";
import { AppMDXProvider } from "@/providers/mdx-provider";
import { useAppDrawerStore } from "@/stores/use-app-drawer-store";
import { useThemeModeStore } from "@/stores/use-theme-mode-store";

export type PostTemplateProps = Merge<
	PageProps<Queries.PostTemplateQuery>,
	React.PropsWithChildren<{}>
>;

const PostTemplate = ({ children, data }: PostTemplateProps) => {
	const siteMetadata = useSiteMetadata();
	const drawer = useAppDrawerStore();
	const theme = useThemeModeStore();

	return (
		<AppMDXProvider>
			<MyHelmet>
				<title>
					{data?.mdx?.frontmatter?.title} | {siteMetadata.title}
				</title>
			</MyHelmet>
			<MainTemplate
				appDrawerProps={{
					onClose: drawer.closeDrawer,
					open: drawer.open,
					themeMode: theme.themeMode,
					onThemeModeChange: (_, mode) => theme.setThemeMode(mode),
				}}
				appHeaderProps={{
					onOpenSettings: drawer.openDrawer,
					themeMode: theme.themeMode,
					onToggleThemeMode: theme.toggleThemeMode,
				}}
			>
				{children}
			</MainTemplate>
		</AppMDXProvider>
	);
};

export default PostTemplate;

export const pageQuery = graphql`
	query PostTemplate($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`;
