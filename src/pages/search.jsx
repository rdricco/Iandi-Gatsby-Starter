import React, { Component } from "react";
import Helmet from "react-helmet";
import { Container } from "rebass";
import { FadeIn } from "animate-components";
import Search from "../components/organisms/Search";

class AboutPage extends Component {
  render() {
    return <Container pt={4} pb={6}>
          <FadeIn>
            <Search />
          </FadeIn>
      </Container>;
  }
}

export default AboutPage;
