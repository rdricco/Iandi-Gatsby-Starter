import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Container, Flex, Box, Row } from "rebass";
import HomeIcon from "react-icons/lib/io/android-home";
import IosSearch from "react-icons/lib/io/ios-search";

const NavRight = styled(Link)`
  margin-left: 15px;
  margin-right: 0px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

const LeftNav = () => {

    return <Flex ml="auto" mr="0" flexwrap="wrap">
        <NavRight role="button" to="/tags">
          all tags
        </NavRight>

        <NavRight role="button" to="/about">
          about
        </NavRight>
      </Flex>;

}

export default LeftNav;