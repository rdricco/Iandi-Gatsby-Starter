import React from "react";
import PropTypes from "prop-types";
import Algolicon from "../../atoms/Icons/algolia.svg";
import algoliaUrl, {
  ReactComponent as Algolia
} from "../../atoms/Icons/algolia.svg";
import { Flex, Box, Row, Container, Heading, Text, Column } from "rebass";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Pagination,
  Highlight
} from "react-instantsearch/dom";

import Hit from "./Hit";

const Search = props => {
  const { classes, algolia } = props;

  return (
    <Box py={3}>
      <Row mx={0} py={3}>
        <Heading>didn't find what you were looking for?</Heading>
      </Row>

      <InstantSearch
        appId="M1E2L8TRKF"
        apiKey="4845e931750c4a87c8184cd98bee333a"
        indexName="GraphCMS Gatbsy Starter"
      >
        <Row mx={0} mb={1}>
          <SearchBox aria-label="seacrh" />
        </Row>
        
        <Row mx={0} my={2}>
          <Stats />
        </Row>

          <Row mx={0} mb={3}>
            <Text>Powered by
            </Text>
            <Algolia height="1em" width="4.5em" />
          </Row>

        

        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Box>
  );
};

export default Search;
