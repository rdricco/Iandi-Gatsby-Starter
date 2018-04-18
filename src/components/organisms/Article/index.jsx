import React, { Component } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import Link from "gatsby-link";
import { Box, Row, Divider, Truncate, Small, Heading, Text } from "rebass";
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
                <Small>Posted on {this.props.date}</Small>
              </Row>

              <Box mx={0} className="postContent">
                {this.props.html != null ? <div dangerouslySetInnerHTML={{ __html: this.props.html }} /> : null}

                {this.props.excerpt != null ? <Box mb={4}>
                    <Text mb={2}>{this.props.excerpt}</Text>

                    <Small>
                      <Link to={this.props.slug} className="postURL">
                        Read More
                      </Link>
                    </Small>
                  </Box> : null}
              </Box>

              <Row mx={0} mb={4} mt={4} className="postTags">
                <PostTags tags={this.props.tags} bg={this.props.badgeBgColor} color={this.props.badgeColor} />
              </Row>
            </Box>
            <Divider mb={100} />
          </Box>;
    }
}

export default Article;