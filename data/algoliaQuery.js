export const query = `{
  allPosts
     (
      filter: { isPublished: { eq: true } }
    ) {
    edges {
      node {
        objectID: id
        title
        tags
        date(formatString: "DD/MM/YYYY")
        html
        slug
        isPublished
      }
    }
  }
}`;

export default const algoliaQueries = [
  {
    query,
    transformer: ({ data }) => data.allPosts.edges.map(({ node }) => node)
  }
];
