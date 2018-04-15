const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const path = require("path");

const indexBlogTemplate = path.resolve("src/templates/index.jsx");
const blogPostTemplate = path.resolve("src/templates/post.jsx");
const tagTemplate = path.resolve("src/templates/tags.jsx");


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allPosts(
          sort: { fields: [date], order: DESC }
          filter: { isPublished: { ne: false } }
          ) {
          edges {
            node {
              id
              isPublished
              date(formatString: "DD/MM/YYYY")
              html
              tags
              title
              slug
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
            console.log(result.errors);
            return Promise.reject(result.errors);
        }
        
        const posts = result.data.posts.edges;
        posts.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: blogPostTemplate,
            context: {
              slug: node.slug
            }
          });
        });

        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: indexBlogTemplate,
          pageLength: 5,
          pathPrefix: "",
        });



        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.tags")) {
            tags = tags.concat(edge.node.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });
        resolve();
      });
  });
};

