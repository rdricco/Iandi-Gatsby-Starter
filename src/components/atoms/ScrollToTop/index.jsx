import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import BackToTop from "react-icons/lib/fa/arrow-circle-up";
import themeRebass from "../../_settings/rebassTheme"


class ScrollToTopPage extends Component {
  render() {
    return <ScrollToTop showUnder={this.props.showUnder}>
        <BackToTop size={this.props.size} color={this.props.color} />
      </ScrollToTop>;
  }
}

export default ScrollToTopPage;
