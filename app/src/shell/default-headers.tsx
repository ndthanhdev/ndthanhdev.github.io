import "modern-normalize/modern-normalize.css";

import { graphql, useStaticQuery } from "gatsby";
import * as R from "ramda";
import React from "react";
import type { SetNonNullable } from "type-fest";

import { MyHelmet } from "@/components/atoms/my-helmet";

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
	`).site?.siteMetadata;

	return R.mergeDeepRight(
		{
			description: "",
			title: "",
		} satisfies SetNonNullable<typeof data>,
		data ?? {},
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
			<meta name="description" content={data.description} />
		</MyHelmet>
	);
};
