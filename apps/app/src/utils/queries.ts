export const cvPage = `
query cvPage($cvFile: String!) {
  mdx(internal: { contentFilePath: { eq: $cvFile } }) {
    id
  }
}
`;

export const postPages = `
query postPages {
  allMdx(
    filter: { internal: { contentFilePath: { glob: "**/posts/**" } } }
  ) {
    nodes {
      id
      frontmatter {
        title
        nanoId
        date
      }
      internal {
        contentFilePath
      }
    }
  }
}
`;
