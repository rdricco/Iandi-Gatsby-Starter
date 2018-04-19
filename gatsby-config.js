require("dotenv").config();
const _ = require("lodash");
//
const config = require("./data/SiteConfig");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
/////// Query for Algolia Search
const query = `{
  allPostsMarkdown
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
        childMarkdownRemark{
          excerpt
        }
      }
    }
  }
}`;
const queries = [
  {
    query,
    transformer: ({ data }) => data.allPostsMarkdown.edges.map(({ node }) => node)
  }
];
///
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.userName,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-widows`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768
            }
          }
        ]
      }
    },
    // `gatsby-plugin-accessibilityjs`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        query: require("./data/configQuery")
      }
    },
    "gatsby-plugin-react-next",
    `gatsby-plugin-lodash`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        icon: true,
        viewBox: false
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `Roboto`]
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_ID,
        apiKey: process.env.ALGOLIA_KEY,
        indexName: process.env.ALGOLIA_INDEX,
        queries,
        chunkSize: 1000
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLEANALYTICS_ID,
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION
      }
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: process.env.FACEBOOKANALYTICS_ID,
        includeInDevelopment: false,
        debug: false,
        language: "en_US"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Iandi Starter",
        short_name: "Iandi Starter",
        start_url: "/",
        background_color: "#fff",
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/favicons/mstile-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/favicons/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allPostsMarkdown } }) => {
              return allPostsMarkdown.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.childMarkdownRemark.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug
                });
              });
            },
            query: `
            {
              allPostsMarkdown(
                limit: 1000,
                sort: { order: DESC, fields: [date] },
                filter: { isPublished: { ne: false } }
              ) {
                edges {
                  node {
                    title
                    date
                    html
                      childMarkdownRemark{
                      excerpt
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml"
          }
        ]
      }
    }
  ]
};
