import React from 'react';
import ReactLoading from 'react-loading';
import {
  Flex,
} from '@chakra-ui/react';

function GeneralLoading() {
  return (
    <Flex minH="calc(100vh - 80px)" align="center" justify="center">
      <ReactLoading type="spinningBubbles" color="#A0AEC0" />
    </Flex>
  );
}

export default GeneralLoading;
