import React from "react";
import styled from "styled-components";
import { Container, Flex, Row } from "rebass";
import Headroom from "react-headroom";
import LeftNav from "./LeftNav"
import RightNav from "./RightNav"

const NavigationContainer = Container.extend`
  max-width: 100%;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.32);
  padding-top: 15px;
  padding-bottom: 15px;
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-color: teal;
  }
`;

export class TopNavigation extends React.Component {
  render() {
    return (
      <Headroom>
        <NavigationContainer bg={this.props.bg} color={this.props.color}>
          <Container>
            <Flex>
              <Row w={1} mx={0}>
                <LeftNav iconColor={this.props.iconColor}/>
                <RightNav/>
              </Row>
            </Flex>
          </Container>
        </NavigationContainer>
      </Headroom>
    );
  }
}

export default TopNavigation;
