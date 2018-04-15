import React, { Component } from "react";
import { Small } from "rebass";

class Copyright extends Component {
  render() {
    return (

    <Small ml="auto">
        Copyright
        {' '}
        {(new Date().getFullYear())}
        .
        {' '}
        {this.props.author}
        {' '}
        All Rights Reserved.
    </Small>

    )
  };
}

export default Copyright;

