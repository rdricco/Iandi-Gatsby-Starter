import React, { Component } from "react";
import config from "../../data/SiteConfig"
import { Container, Box, Avatar, Heading } from "rebass";
import { FadeIn } from "animate-components";

export default class AboutPage extends Component {
  render() {
    return <Box py={6}>
          <FadeIn>
        <Container>
              <Avatar my={2} size={100} alt-text='avatar.png' src={config.userAvatar} />
              <Heading pt={3}>
                {config.userDescription}
              </Heading>
        </Container>
          </FadeIn>
      </Box>;
  }
}
