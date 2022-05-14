import React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';

function NoMatch() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="calc(100vh - 200px)"
    >
      <Heading mb={12} fontWeight="medium" fontSize="3xl">404. Page Not Found.</Heading>
      <Player
        autoplay
        loop
        src="/images/util/void.json"
        style={{ width: '30%' }}
      />
    </Box>
  );
}

export default NoMatch;
