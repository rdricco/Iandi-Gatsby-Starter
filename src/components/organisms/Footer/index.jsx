import config from "../../../../data/SiteConfig";
import React, { Component } from "react";
import styled from "styled-components";
import { Container, Flex, Box, Row, Column } from "rebass";
import SocialLinks from "../../molecules/SocialLinks";
import Copyright from "../../atoms/Copyright";

class Footer extends Component {
  render() {
    return (
      <Box className="footer" color={this.props.color} bg={this.props.bg}>
        <Container my={4}>
          <Row mx={0}>
            <Column w={1/2} px={0} my={0} py={0} className="LeftFooter">
            
              <Flex mr="auto">
                <SocialLinks
                color={this.props.color}
                size={'27'}
                github={config.userGithub}
                facebook={config.userFacebook}
                instagram={config.userInstagram}
                twitter={config.userTwitter}
                linkedin={config.userLinkedin}
                medium={config.userMedium}
                 >
                 </SocialLinks>
              </Flex>
            </Column>
            {/* <Column px={0} my={0} w={1/2}className="RightFooter">
              <Flex ml="auto">
                <Copyright
                author={config.userName} >
                </Copyright>
              </Flex>
            </Column> */}
          </Row>
        </Container>
      </Box>
    );
  }
}

export default Footer;
