exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/cv/)) {
    page.context.layout = "cv";
    createPage(page);
  }
};
