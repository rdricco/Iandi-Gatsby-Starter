import React from "react"
import config from "../../data/SiteConfig"
import Helmet from "react-helmet"
import { Provider, Container, Box } from "rebass"
import rebassTheme from "../components/_settings/rebassTheme"
import globalStyles from "../components/_settings/globalStyles"
import NavBar from "../components/organisms/TopNavigation/"
import ScrollToTop from "../components/atoms/ScrollToTop"
import Footer from "../components/organisms/Footer"
import styled from "styled-components";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath === "search/") {
      title = "Search";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    }
    return title;
  }

  render() {
    const MainBox = styled(Box)`
    min-height: 100vh;
      a,
      a:visited,
      a:active {
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: ${rebassTheme.colors.purplegatsby};
      }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Poppins";
    }
    `
    const { children } = this.props;
    return <Provider theme={rebassTheme} ClassName="FullPage">
        <Helmet>
          <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <MainBox m={0} p={0} bg={rebassTheme.colors.secondaryLightest} color={rebassTheme.colors.black}>
          <NavBar bg={rebassTheme.colors.secondaryLightest} color={rebassTheme.colors.black} iconColor={rebassTheme.colors.purplegatsby} />

          {children()}

          <Footer bg={rebassTheme.colors.secondaryLightest} color={rebassTheme.colors.black} />
          <ScrollToTop showUnder={160} size={30} color={rebassTheme.colors.purplegatsby} />
        </MainBox>
      </Provider>;
  }
}
