import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MyHelmet } from "@/components/my-helmet";

import "modern-normalize/modern-normalize.css";

export const CommonHeaders = () => {
	const data = useStaticQuery(graphql`
		query CommonHeaders {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`) as Queries.CommonHeadersQuery;

	return (
		<MyHelmet>
			<meta
				name="google-site-verification"
				content="9OBwzAgCmUComfywGqCjEriNiYJ8qS4OYM9Fz4fan7s"
			/>
			<title id="title">{data?.site?.siteMetadata?.title}</title>
			<meta
				name="description"
				content={data?.site?.siteMetadata?.description ?? undefined}
			/>
		</MyHelmet>
	);
};
