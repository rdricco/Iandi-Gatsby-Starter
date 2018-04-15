import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import themeRebass from "../../_settings/rebassTheme"
import {
  Text,
  Badge,
} from "rebass";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return <div className="post-tag-container">
        {tags && tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Badge ml={0} bg={this.props.bg} color={this.props.color}>
                {tag}
              </Badge>
            </Link>
          ))}
      </div>;
  }
}

export default PostTags;
