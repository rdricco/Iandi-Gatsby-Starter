import React from 'react';
import styled from 'styled-components';
import { Box, Container, Row, Banner, Heading, Subhead } from "rebass";

class BannerSite extends React.Component {
    render() {
        const BannerHome = Banner.extend`
          box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.32) inset;
          min-height: 22vh;
          background: linear-gradient(to right, ${this.props.colorLeft}, ${this.props.colorRight});
          text-decoration: none;
          color: ${this.props.colorFont};`;
        return (
            <BannerHome bg={this.props.bg}  backgroundImage={this.props.bgImage} className="BannerHome">
                <Container py={0} my={0}>
                    <Row>
                        <Heading>
                            {this.props.heading}
                        </Heading>
                    </Row>
                    <Row>
                        <Subhead>
                            {this.props.tagline}
                        </Subhead>
                    </Row>
                </Container>

            </BannerHome>
        );
    }
}

export default BannerSite;