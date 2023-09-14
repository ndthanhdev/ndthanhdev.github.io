import * as React from "react";
import { PostLayout } from "../layouts/post";
import { graphql, PageProps } from "gatsby";
import { Shell } from "../shell";
import { Merge } from "type-fest";
import { MyHelmet } from "@/components/my-helmet";

export type PostTemplateProps = Merge<
	PageProps<Queries.PostTemplateQuery>,
	React.PropsWithChildren<{}>
>;

const PostTemplate = ({ children, data }: PostTemplateProps) => {
	return (
		<>
			<Shell>
				<PostLayout>{children}</PostLayout>
			</Shell>
			<MyHelmet>
				<title>{data?.mdx?.frontmatter?.title}</title>
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
