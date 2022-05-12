import React from 'react';
import ReactLoading from 'react-loading';
import {
  Flex,
} from '@chakra-ui/react';

function SearchLoading() {
  return (
    <Flex minH="300px" align="center" justify="center">
      <ReactLoading type="spinningBubbles" color="#A0AEC0" />
    </Flex>
  );
}

export default SearchLoading;
