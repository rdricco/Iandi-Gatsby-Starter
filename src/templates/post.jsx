import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
import { FadeIn } from "animate-components";
import Article from "../components/organisms/Article";
import PostTags from "../components/Utils/PostTags";
import {
  Container,
  Box,
  Banner,
} from "rebass";
export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.posts;
    const post = postNode;
    const author = post.author;
    const coverPost = post.coverImage.handle;

    return <Box key={post.id} pb={6}>
        <FadeIn>
          <Helmet title={`${post.title} | ${config.siteTitle}`}>
            <script src="https://just-comments.com/w.js" type="text/javascript" defer="true" />
          </Helmet>

          <Banner bg="grey" backgroundImage={`https://media.graphcms.com/resize=w:1900,h:646,fit:crop/quality=v:75/compress/${coverPost}`} />

          <Container pt={4}>
            <Article slug={post.slug} title={post.title} date={post.date} tags={post.tags} html={post.html} 
            badgeColor={rebassTheme.colors.secondaryLightest}
            badgeBgColor={rebassTheme.colors.purplegatsby}
             />
          </Container>

          <Container>
            
            <div
              className="just-comments"
              data-allowguests="true"
              data-apikey="ba86acdd-19b0-438c-b73f-47a92e9ed41c"
            >
            </div>
          </Container>
        </FadeIn>
      </Box>;
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           posts(slug: { eq: $slug }) {
             id
             title
             date(formatString: "DD/MM/YYYY")
             tags
             category
             html
             author {
               name
               id
               avatar {
                 id
                 fileName
                 handle
                 width
                 height
               }
               biography
               gitHubProfile
               linkedInProfile
               facebookProfile
               instagramProfile
               twitterProfile
             }
             coverImage {
               id
               handle
               fileName
               width
               height
             }
             slug
           }
         }
       `;
