const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const slugify = require("lodash-addons"); 
const path = require("path");

const indexBlogTemplate = path.resolve("src/templates/index.jsx");
const blogPostTemplate = path.resolve("src/templates/post.jsx");
const tagTemplate = path.resolve("src/templates/tags.jsx");


exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  console.log(node.internal.type);
  // Posts here is the node you'd like to create markdown for use on remark plugins
  if (node.internal.type === `Posts`) {
    createNode({
      id: `md-${node.id}`,
      internal: {
        type: `${node.internal.type}Markdown`,
        mediaType: `text/markdown`,
        content: node.html,
        contentDigest: node.internal.contentDigest
      },
      parent: node.id,
      children: [],
      html: node.html,
      title: node.title,
      slug: node.slug,
      category: node.category,
      tags: node.tags,
      date: node.date,
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      isPublished: node.isPublished,
      coverImage: node.coverImage,
      author: node.author,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allPostsMarkdown(
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
              childMarkdownRemark{
                excerpt
              }
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
            // path: _.slugify(node.slug),
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
