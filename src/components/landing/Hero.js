import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box, chakra,
  Flex, useColorModeValue, Button,
  Icon,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

function Hero(props) {
  // const { variant, ...rest } = props;
  const history = useHistory();
  const Feature = ({ ft }) => (
    <Flex alignItems="center" color={useColorModeValue(null, 'white')}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </Icon>
      {ft}
    </Flex>
  );

  return (
    <>
      <Box px={4} py={32} pb={16} mx="auto">
        <Box
          w={{ base: 'full', md: 11 / 12 }}
          mx="auto"
          textAlign={{ base: 'left', md: 'center' }}
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="extrabold"
            lineHeight="shorter"
            letterSpacing={{ base: 'normal', md: 'tight' }}
            color={useColorModeValue('gray.900', 'gray.100')}
          >
            Pen down, start
            {' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, secondary.400,primary.500)"
              fontWeight="extrabold"
            >
              enjoying notes
            </Text>
            {' '}
            from your peers
          </chakra.h1>
          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            PenDown is a platform for sharing notes and ideas.
            We are on a mission to bring together the best notes from students and professionals all over the world.
            Pen down, and you can start absorbing knowledge from others!
          </chakra.p>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: 'left', md: 'center' }}
          >
            <Button
              as="a"
              variant="pendown-primary"
              colorScheme="brand"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              onClick={() => history.push('/login')}
            >
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            <Button
              as="a"
              variant="pendown"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              Contact Us
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Box>
        <Box
          w={{ base: 'full' }}
          mx="auto"
          mt={20}
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            // shadow="pendown"
            // border="2px solid black"
            src="./images/gettingStarted/search.png"
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Box>
      <Box borderBottom="2px solid black" position="absolute" left="0" right="0" />
    </>
  );
}

export default Hero;
