import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Heading, Box, SimpleGrid, chakra,
  Flex, useColorModeValue, Button,
  Image,
} from '@chakra-ui/react';

function Features(props) {
  // const { variant, ...rest } = props;
  const history = useHistory();

  // const styles = useStyleConfig('Step', { variant: props.variant });

  return (
    <>
      <Box>
        <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }} mb={-4}>
          <Heading fontSize={{ base: '3xl', sm: '5xl' }} fontWeight="extrabold" lineHeight="shorter">
            Get started in just
            {' '}
            <chakra.span color="primary.500">4</chakra.span>
            {' '}
            steps
          </Heading>
        </Box>
        <Flex
          p={2}
          w="full"
          mb={-16}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            px={2}
            py={4}
          >
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="extrabold"
                  textAlign={{ base: 'center', md: 'left' }}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  lineHeight="150%"
                >
                  1. Create an account
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontSize={{ md: 'lg' }}
                >
                  All you need to get started is an account. Sign up for your free account today by just filling in the email or simply continuing with your Google account.
                </chakra.p>
                <Button
                  w={{ base: 'full', sm: 'auto' }}
                  size="lg"
                  variant="pendown-primary"
                  onClick={() => history.push('/register')}
                >
                  Sign Up Now
                </Button>
              </Box>
              <Image
                w="full"
                src="./images/gettingStarted/step1.png"
              />
            </SimpleGrid>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              flexDirection="column-reverse"
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box order={{ base: 'none', md: 2 }}>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="extrabold"
                  textAlign={{ base: 'center', md: 'left' }}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  lineHeight="150%"
                >
                  2. Start browsing
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontSize={{ md: 'lg' }}
                >
                  Looking for some notes? We&apos;ve got your back. Browse through our collection of notes uploaded by other users and find the one that suits your choice.
                </chakra.p>
                <Button
                  w={{ base: 'full', sm: 'auto' }}
                  size="lg"
                  variant="pendown-primary"
                  onClick={() => history.push('/search/all')}
                  // padding={4}
                >
                  Visit Search Page
                </Button>
              </Box>
              <Image
                w="full"
                src="./images/gettingStarted/step1.png"
              />
            </SimpleGrid>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="extrabold"
                  textAlign={{ base: 'center', md: 'left' }}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  lineHeight="150%"
                >
                  3. Download your favorite notes
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontSize={{ md: 'lg' }}
                >
                  Though now we are not still not available to support real-time cash payment, you can still download preferred notes and start using them.
                </chakra.p>
              </Box>
              <Image
                w="full"
                src="./images/gettingStarted/step1.png"
              />
            </SimpleGrid>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              flexDirection="column-reverse"
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box order={{ base: 'none', md: 2 }}>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="extrabold"
                  textAlign={{ base: 'center', md: 'left' }}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  lineHeight="150%"
                >
                  4. Upload to earn Beans
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontSize={{ md: 'lg' }}
                >
                  You might get an error stating that you&apos;re running out of beans. No worries, simply upload your notes and you&apos;ll be able to earn beans. Even better, you get to decide how much you want to sell. For every note you upload, you&apos;ll get a pack of 50 guaranteed beans so that you can always have a good start.
                </chakra.p>

              </Box>
              <Image
                w="full"
                src="./images/gettingStarted/step1.png"
              />
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Box borderBottom="2px solid black" position="absolute" left="0" right="0" />
    </>
  );
}

export default Features;
