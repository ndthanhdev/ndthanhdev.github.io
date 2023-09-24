import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Shell } from "../shell";
import { Merge } from "type-fest";
import { MyHelmet } from "@/components/my-helmet";
import { useSiteMetadata } from "@/shell/default-headers";
import { MainLayoutContainer } from "@/layouts/main";

export type PostTemplateProps = Merge<
	PageProps<Queries.PostTemplateQuery>,
	React.PropsWithChildren<{}>
>;

const PostTemplate = ({ children, data }: PostTemplateProps) => {
	const siteMetadata = useSiteMetadata();

	return (
		<>
			<Shell>
				<MainLayoutContainer>{children}</MainLayoutContainer>
			</Shell>
			<MyHelmet>
				<title>
					{data?.mdx?.frontmatter?.title} | {siteMetadata.title}
				</title>
			</MyHelmet>
		</>
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
