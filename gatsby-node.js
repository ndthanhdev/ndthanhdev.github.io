// @ts-check

const path = require("path");

const postsDir = path.resolve(`./content/posts`);
const postTemplate = path.resolve(`./src/templates/post.tsx`);

/**
 * @type {import('gatsby').GatsbyNode['onCreatePage']}
 */
// exports.onCreatePage = ({ page, actions }) => {
// 	const { createPage } = actions;

// 	/**
// 	 * @type {any}
// 	 */
// 	const pageContext = page.context;

// 	if (page.path.match(/^\/cv\/?.*$/)) {
// 		pageContext.layout = "cv";
// 	} else if (page.path.match(/^\/posts\/?.*$/)) {
// 		pageContext.layout = "post";
// 	} else {
// 		pageContext.layout = "none";
// 	}

// 	createPage(page);
// };

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async (args) => {
	await createPosts();

	async function createPosts() {
		const { graphql, actions, reporter } = args;

		const slugify = (await import("@sindresorhus/slugify")).default;

		const { createPage } = actions;

		const result = await graphql(`
			query {
				allMdx {
					nodes {
						id
						frontmatter {
							title
							slug
						}
						internal {
							contentFilePath
						}
					}
				}
			}
		`);

		if (result.errors) {
			reporter.panicOnBuild("Error loading MDX result", result.errors);
		}

		// Create blog post pages.
		const posts = result.data.allMdx.nodes;

		// you'll call `createPage` for each result
		posts.forEach((node) => {
			const postPath = node.frontmatter.slug
				? node.frontmatter.slug
				: node.frontmatter.tittle
				? `/${slugify(node.frontmatter.title)}`
				: `/posts/${path.relative(node.internal.contentFilePath, postsDir)}`;

			createPage({
				// As mentioned above you could also query something else like frontmatter.title above and use a helper function
				// like slugify to create a slug
				path: postPath,
				// Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
				component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
				// You can use the values in this context in
				// our page layout component
				context: { id: node.id },
			});
		});
	}
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateWebpackConfig']}
 */
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@/components": path.resolve(__dirname, "src/components"),
			},
		},
	});
};
