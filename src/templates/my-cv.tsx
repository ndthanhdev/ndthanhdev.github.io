import * as React from "react";
import { PostLayout } from "../layouts/post";
import { graphql, PageProps } from "gatsby";
import { Shell } from "../shell";
import { Merge } from "type-fest";
import { MyHelmet } from "@/components/my-helmet";
import { useSiteMetadata } from "@/shell/default-headers";

export type MyCVTemplateProps = Merge<
	PageProps<Queries.PostTemplateQuery>,
	React.PropsWithChildren<{}>
>;

const MyCVTemplate = ({ children }: MyCVTemplateProps) => {
	const siteMetadata = useSiteMetadata();

	return (
		<>
			<Shell>
				<PostLayout>{children}</PostLayout>
			</Shell>
		</>
	);
};

export default MyCVTemplate;
