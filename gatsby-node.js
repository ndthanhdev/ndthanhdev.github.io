// @ts-check

/**
 * @types {import('gatsby').GatsbyNode['onCreatePage']}
 */
exports.onCreatePage = ({ page, actions }) => {
	const { createPage } = actions;

	/**
	 * @type {any}
	 */
	const pageContext = page.context;

	if (page.path.match(/^\/cv\/?.*$/)) {
		pageContext.layout = "cv";
	} else if (page.path.match(/^\/blogs\/?.*$/)) {
		pageContext.layout = "blog";
	} else {
		pageContext.layout = "none";
	}

	createPage(page);
};
