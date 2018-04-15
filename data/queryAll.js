'use strict'

module.exports = `
{
  allPosts{
    edges{
      node{
        id
        author {
          id
          biography
          gitHubProfile
          linkedInProfile
          facebookProfile
          instagramProfile
          twitterProfile
          avatar{
            id
            fileName
            handle
            width
            height
          }
        }
        coverImage {
          id
          fileName
          handle
          width
          height
        }
        title
        slug
        category
        tags
        date
        createdAt
        updatedAt
        isPublished
        html
        }
      }
    }
}`;
