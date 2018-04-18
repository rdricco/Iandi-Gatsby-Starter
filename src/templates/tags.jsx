import React from "react";
const _ = require("lodash");
const slugify = require("lodash-addons");
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import { Container, Box, Row, Heading, Text, Subhead } from "rebass";
import { FadeIn } from "animate-components";

const TagList = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`;

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allPostsMarkdown;

  return <Box my={4}>
      <Container py={4}>
        <FadeIn>
          <Row mx={0} pb={3}>
            <Heading>all posts tagged as {tag}</Heading>
          </Row>

          <TagList>
            {edges.map(({ node }) => {
              const { slug, title } = node;
              return <Row key={slug} mx={0} pb={2}>
                  <Subhead>
                    <Link to={"/" + slug}>{title}</Link>
                  </Subhead>
                </Row>;
            })}
          </TagList>
          <Link to="/tags">
            <Text>All tags here</Text>
          </Link>
        </FadeIn>
      </Container>
    </Box>;
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allPosts: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allPostsMarkdown(
      limit: 2000
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          tags
        }
      }
    }
  }
`;
