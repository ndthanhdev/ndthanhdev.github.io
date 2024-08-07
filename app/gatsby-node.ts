/* eslint-disable @typescript-eslint/unbound-method, @typescript-eslint/no-unsafe-argument */
import type { GatsbyNode } from "gatsby";
import path from "path";

import { isValidNanoId } from "./src/utils/is-valid-nano-id";
import { cvPage, postPages } from "./src/utils/queries";

const postTemplate = path.resolve(`./src/layouts/post/index.tsx`),
	myCVTemplate = path.resolve(`./src/layouts/cv/index.tsx`),
	cvFile = path.resolve(`./content/cv/cv.mdx`);

export const createPages: GatsbyNode["createPages"] = async (args) => {
	await createPosts();
	await createCV();

	async function createCV() {
		const { graphql, actions, reporter } = args,
			{ createPage } = actions,
			result = await graphql<Queries.Query>(cvPage, {
				cvFile,
			});

		if (result.errors) {
			reporter.panicOnBuild("Error loading MDX result", result.errors);
		}

		const data = result.data!;

		createPage({
			path: `/cv`,
			component: `${myCVTemplate}?__contentFilePath=${cvFile}`,
			context: { id: data.mdx!.id },
		});
	}

	async function createPosts() {
		const { graphql, actions, reporter } = args,
			{ createPage } = actions,
			result = await graphql<Queries.Query>(postPages);

		if (result.errors) {
			reporter.panicOnBuild("Error loading MDX result", result.errors);
		}

		const data = result.data!,
			// Create blog post pages.
			posts = data.allMdx.nodes;

		// You'll call `createPage` for each result
		posts.forEach((node) => {
			const { nanoId } = node.frontmatter!;
			if (!isValidNanoId(nanoId)) {
				throw new Error(`Invalid nanoId`, {
					cause: node,
				});
			}

			const postPath = `/posts/${nanoId}`;

			createPage({
				/*
				 * As mentioned above you could also query something else like frontmatter.title above and use a helper function
				 * like slugify to create a slug
				 */
				path: postPath,
				// Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
				component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
				/*
				 * You can use the values in this context in
				 * our page layout component
				 */
				context: { id: node.id },
			});
		});
	}
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src/"),
			},
		},
	});
};
