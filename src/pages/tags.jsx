import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";
import { Container, Box, Row, Heading, Subhead, Text } from "rebass";
import { FadeIn } from "animate-components";

export const TagList = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`;

const TagsPage = ({
  data: { allPosts: { group }, site: { siteMetadata: { title } } }
}) => (
  <Box py={4}>
    <Container pt={4}>
      <FadeIn>
        <Helmet title={title} />
        <Row mx={0} pb={3}>
          <Heading>all tags</Heading>
        </Row>
        <TagList>
          {group.map(tag => (
            <Row key={tag.fieldValue} mx={0} pb={2}>
              <Subhead>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                </Link>
              </Subhead>
            </Row>
          ))}
        </TagList>
      </FadeIn>
    </Container>
  </Box>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allPosts: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allPosts(filter: { isPublished: { ne: false } }) {
      group(field: tags) {
        fieldValue
      }
    }
  }
`;
