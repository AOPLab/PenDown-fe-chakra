import '@fontsource/montserrat';

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  // theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>Hello</Heading>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="red.500"
              href="https://chakra-ui.com"
              fontSize="md"
              fontWeight={800}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
