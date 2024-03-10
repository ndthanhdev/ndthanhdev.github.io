import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Merge } from "type-fest";
import { useSiteMetadata } from "@/shell/default-headers";
import { MyHelmet } from "@/components/atoms/my-helmet";
import { MainTemplate } from "../main";
import { AppMDXProvider } from "@/providers/mdx-provider";

export type PostTemplateProps = Merge<
	PageProps<Queries.PostTemplateQuery>,
	React.PropsWithChildren<{}>
>;

const PostTemplate = ({ children, data }: PostTemplateProps) => {
	const siteMetadata = useSiteMetadata();

	return (
		<AppMDXProvider>
			<MainTemplate>{children}</MainTemplate>
			<MyHelmet>
				<title>
					{data?.mdx?.frontmatter?.title} | {siteMetadata.title}
				</title>
			</MyHelmet>
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
