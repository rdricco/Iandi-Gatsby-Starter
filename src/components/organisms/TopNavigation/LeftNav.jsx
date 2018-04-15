import React from "react";
import { navigateTo } from "gatsby-link";
import styled from "styled-components";
import { Flex, Link } from "rebass";
import HomeIcon from "react-icons/lib/io/android-home";
import IosSearch from "react-icons/lib/io/ios-search";

const NavLeft = styled(Link)`
  margin-left: 0px;
  margin-right: 15px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

const LeftNav = () => {
  return <Flex>
      <NavLeft role="button" aria-label="home" onClick={() => navigateTo("/")}>
        <HomeIcon size={30} />
      </NavLeft>
      <NavLeft role="button" aria-label="search" onClick={() => navigateTo("/search")}>
        <IosSearch role="button" size={30} />
      </NavLeft>
    </Flex>;
};

export default LeftNav;
