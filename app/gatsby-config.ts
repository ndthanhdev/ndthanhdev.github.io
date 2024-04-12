import type { GatsbyConfig } from "gatsby";
import Path from "path";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `ndthanhdev`,
		description: `ndthanhdev's personal website`,
		siteUrl: `https://ndthanhdev.github.io`,
	},
	graphqlTypegen: true,
	plugins: [
		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: Path.resolve("./src/shell/index.tsx"),
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-emotion",
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/shell/icon.svg",
			},
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-KX72TPPN",
				includeInDevelopment: true,
				routeChangeEventName: "route_change",
				enableWebVitalsTracking: true,
			},
		},
	],
};

export default config;
