import * as React from "react";
import { PostLayout } from "../layouts/post";
import { graphql, PageProps } from "gatsby";
import { Shell } from "../shell";
import { Merge } from "type-fest";
import { MyHelmet } from "@/components/my-helmet";
import { MyCVLayout } from "@/layouts/cv";

export type MyCVTemplateProps = Merge<
	PageProps<Queries.MyCVQueryQuery>,
	React.PropsWithChildren<{}>
>;

const MyCVTemplate = ({ children, data }: MyCVTemplateProps) => {
	return (
		<>
			<Shell>
				<MyHelmet>
					<title>{data.mdx?.frontmatter?.title}</title>
				</MyHelmet>
				<MyCVLayout>{children}</MyCVLayout>
			</Shell>
		</>
	);
};

export default MyCVTemplate;

export const pageQuery = graphql`
	query MyCVQuery($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`;
