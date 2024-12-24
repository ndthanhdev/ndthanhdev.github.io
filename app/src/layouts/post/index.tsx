import { graphql, PageProps } from "gatsby";
import * as React from "react";

import { MyHelmet } from "@/components/atoms/my-helmet";
import { PostTemplate } from "@/components/templates/post";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";
import { AppMDXProvider } from "@/providers/mdx-provider";
import { useSiteMetadata } from "@/shell/default-headers";

export type PostLayoutProps = PageProps<Queries.PostTemplateQuery>;

const PostLayout = ({ children, data }: PostLayoutProps) => {
	const siteMetadata = useSiteMetadata();

	const mainTemplateProps = useMainTemplateProps();

	return (
		<AppMDXProvider>
			<MyHelmet>
				<title>
					{data.mdx?.frontmatter?.title} | {siteMetadata.title}
				</title>
			</MyHelmet>
			<PostTemplate
				{...mainTemplateProps}
				postHeaderProps={{
					date: data.mdx?.frontmatter?.date,
					title: data.mdx?.frontmatter?.title,
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
				date
			}
		}
	}
`;
