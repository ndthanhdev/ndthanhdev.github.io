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
		// "gatsby-plugin-theme-ui",
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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-HT08YR5ZW7",
					// "GA-TRACKING_ID", // Google Analytics / GA
					// "AW-CONVERSION_ID", // Google Ads / Adwords / AW
					// "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: "OPT_CONTAINER_ID",
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					// exclude: ["/preview/**", "/do-not-track/me/too/"],
					// Defaults to https://www.googletagmanager.com
					// origin: "YOUR_SELF_HOSTED_ORIGIN",
				},
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-KX72TPPN",
				includeInDevelopment: true,
			},
		},
	],
};

export default config;
