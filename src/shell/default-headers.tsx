import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MyHelmet } from "@/components/atoms/my-helmet";
import * as R from "ramda";

import "modern-normalize/modern-normalize.css";
import { SetNonNullable } from "type-fest";

export const useSiteMetadata = () => {
	const data = useStaticQuery<Queries.SiteMetadataQuery>(graphql`
		query SiteMetadata {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`)?.site?.siteMetadata;

	return R.mergeDeepRight(
		{
			title: "",
			description: "",
		} satisfies SetNonNullable<typeof data>,
		data ?? {}
	);
};

export const DefaultHeaders = () => {
	const data = useSiteMetadata();

	return (
		<MyHelmet>
			<meta
				name="google-site-verification"
				content="9OBwzAgCmUComfywGqCjEriNiYJ8qS4OYM9Fz4fan7s"
			/>
			<title id="title">{data.title}</title>
			<meta name="description" content={data.description ?? undefined} />
		</MyHelmet>
	);
};
