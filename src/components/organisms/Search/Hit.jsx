import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Markdown from "react-markdown";
import styled from "styled-components";

import { Container, Flex, Row, Badge, Heading, Subhead, Card, BackgroundImage } from "rebass";

const ResulItem = styled(Container)`
    margin: 0;
    padding: 0;
    `

const Hit = props => {
  const { classes, hit } = props;

  return <Container key={hit.slug} py={2} px={0} mx={0} className="container">
      <Card bg="secondaryLightest" className="Card" mx={0} py={2} width={1}>
        {/* <BackgroundImage className="BG"
          ratio={1/7}
          src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
        /> */}
        <Row mx={0}>
          <Subhead>
            <Link to={hit.slug} style={{ textDecoration: "none" }}>
              {hit.title}
            </Link>
          </Subhead>
        </Row>

        <Row mx={0} my={3}>
          {hit.tags && hit.tags.map(tag => <Badge key={tag} p={1} bg="black">
                <Link style={{ textDecoration: "none" }} to={`/tags/${_.kebabCase(tag)}`}>
                  {tag}
                </Link>
              </Badge>)}
        </Row>
      </Card>
    </Container>;
};

export default Hit;
