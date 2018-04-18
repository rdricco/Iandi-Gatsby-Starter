import React, { Component } from "react";
const _ = require("lodash");
const slugify = require("lodash-addons");
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Flex, Box, Container } from "rebass";
import { FadeIn } from "animate-components";
import Button from '../components/atoms/Button/'
import Article from "../components/organisms/Article";
import Banner from "../components/molecules/Banner";
import ChevronLeft from "react-icons/lib/fa/angle-left";
import ChevronRight from "react-icons/lib/fa/angle-right";
import SEO from "../components/Utils/SEO";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text} </Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const BlogPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return <Box>
      <Helmet title={config.siteTitle}>
        <SEO />
      </Helmet>
      <FadeIn>
        <Banner heading={config.siteTitle} tagline={config.siteTagline} colorFont="#fff" bg={rebassTheme.colors.purplegatsby} />
        <Container pt={4}>
          {group.map(({ node }) => (
            <Article
              key={node.id}
              id={node.id}
              slug={node.slug}
              title={node.title}
              date={node.date}
              tags={node.tags}
              excerpt={node.childMarkdownRemark.excerpt}
              badgeColor={rebassTheme.colors.secondaryLightest}
              badgeBgColor={rebassTheme.colors.purplegatsby}
              // html={node.html}
            />
          ))}
        </Container>
        <Container>
          <Flex pb={6} pt={4}>
            <Button color={rebassTheme.colors.secondaryLightest} bg={rebassTheme.colors.black} mr="auto" ml={0} className="previousLink">
              <ChevronLeft /> <NavLink test={first} url={previousUrl} text="Recent" />
            </Button>

            <Button color={rebassTheme.colors.secondaryLightest} bg={rebassTheme.colors.black} ml="auto" mr={0} className="nextLink">
              <NavLink test={last} url={nextUrl} text="Older" /> <ChevronRight />
            </Button>
          </Flex>
        </Container>
      </FadeIn>
    </Box>;
};

export default BlogPage;




