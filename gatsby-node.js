exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/cv/)) {
    page.context.layout = "cv";
  } else {
    page.context.layout = "default";
  }

  createPage(page);
};
