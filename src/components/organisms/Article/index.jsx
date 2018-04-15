import React, { Component } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import Link from "gatsby-link";
import { Box, Row, Divider, Truncate, Small, Heading } from "rebass";
import PostTags from '../../Utils/PostTags/'

class Article extends React.Component {
    render() {
        return <Box key={this.props.id}>
            <Box mb={2} mt={4} className="blogPost" key={this.props.id}>
              <Row mx={0} mb={1} className="postTitle">
                <Heading>
                  <Link to={this.props.slug} className="postURL">
                    {this.props.title}
                  </Link>
                </Heading>
              </Row>

              <Row mx={0} mb={4} className="postDate">
                <Link className="postUrl" to={this.props.slug}>
                  <Small>Posted on {this.props.date}</Small>
                </Link>
              </Row>

              <Row mx={0} className="postContent">
                <Markdown source={this.props.html} escapeHtml={false} />
              </Row>

              <Row mx={0} mb={4} className="postTags">
                <PostTags tags={this.props.tags} bg={this.props.badgeBgColor} color={this.props.badgeColor}/>
              </Row>
            </Box>
            <Divider mb={100} />
          </Box>;
    }
}

export default Article;