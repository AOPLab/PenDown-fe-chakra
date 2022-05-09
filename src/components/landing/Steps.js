import React from 'react';
import {
  Heading, Box, Image, Text, SimpleGrid, useStyleConfig, chakra,
} from '@chakra-ui/react';

function Steps(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('Step', { variant: props.variant });

  return (
    <>
      <Box>
        <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }} fontWeight={900} lineHeight="150%">
            Get started in just
            {' '}
            <chakra.span color="primary.500">4</chakra.span>
            {' '}
            steps
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ sm: '1', md: '2' }}
          spacing={10}
          // margin="0 10vw 0 10vw"
          // padding="3vh 0 3vh 0"
          alignItems="center"
        >
          <Box textAlign="left" minW="300px">
            <Heading fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }} fontWeight={800} lineHeight="150%">
              Step 1
              <Text fontWeight={400}>Create an account.</Text>
            </Heading>
          </Box>
          <Box height="100%" align="center">
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.png" />
          </Box>
          <Box height="100%" align="center">
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/levitate.gif" />
          </Box>
          <Box textAlign="left" minW="300px">
            <Heading fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }} fontWeight={800} lineHeight="150%">
              Step 2
              <Text fontWeight={400}>Login and start browsing.</Text>
            </Heading>
          </Box>
          <Box textAlign="left" minW="300px">
            <Heading fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }} fontWeight={800} lineHeight="150%">
              Step 3
              <Text fontWeight={400}>Purchase and download the note you need!</Text>
            </Heading>
          </Box>
          <Box height="100%" align="center">
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/coffee.gif" />
          </Box>
          <Box height="100%" align="center">
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.gif" />
          </Box>
          <Box textAlign="left" minW="300px">
            <Heading fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }} fontWeight={800} lineHeight="150%">
              Step 4
              <Text fontWeight={400}>Upload your pen-down and make your pen-down more valuable.</Text>
            </Heading>
          </Box>
        </SimpleGrid>
      </Box>
      <Box borderBottom="2px solid black" position="absolute" left="0" right="0" />
    </>
  );
}

export default Steps;
