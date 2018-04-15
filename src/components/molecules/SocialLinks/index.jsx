import React, { Component } from "react";
import { Box, Link } from "rebass";
import Github from "react-icons/lib/fa/github-square";
import Facebook from "react-icons/lib/fa/facebook-official";
import Instagram from "react-icons/lib/fa/instagram";
import LinkedIn from "react-icons/lib/fa/linkedin";
import Twitter from "react-icons/lib/fa/twitter";
import Medium from 'react-icons/lib/fa/medium';

class SocialLinks extends Component {
  render() {
    return <Box>
        {this.props.github != null ? <Link href={"https://github.com/" + this.props.github}>
            <Github role="button" aria-label="github profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

        {this.props.facebook != null ? <Link href={"https://fb.me/" + this.props.github}>
            <Facebook role="button" aria-label="facebook profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

        {this.props.instagram != null ? <Link href={"https://instagram/" + this.props.github}>
            <Instagram role="button" aria-label="instagram profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

        {this.props.medium != null ? <Link href={"https://medium.com/" + this.props.github}>
            <Medium role="button" aria-label="medium profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

        {this.props.twitter != null ? <Link href={"https://twitter.com/" + this.props.github}>
            <Twitter role="button" aria-label="twitter profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

        {this.props.linkedin != null ? <Link href={"https://linkedin.com/" + this.props.github}>
            <LinkedIn role="button" aria-label="linkedin profile" size={this.props.size} color={this.props.color} />
          </Link> : null}

      </Box>;
  }
}

export default SocialLinks;
