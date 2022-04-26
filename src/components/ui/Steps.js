/* eslint-disable react/react-in-jsx-scope */
import {
  Heading,
  Box,
  Stack,
  Image,
  HStack,
  Text,
  SimpleGrid,
  useStyleConfig,
  Center,
} from '@chakra-ui/react';

function Steps(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('Step', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box borderBottom="2px solid black">
      <Box
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 4, md: 8 }}
      >
        <Heading
          fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }}
          fontWeight={900}
          lineHeight="110%"
        >
          Get Started in
          <Text as="span" color="yellow.600">
          &nbsp; Just 3 Steps
          </Text>
        </Heading>
      </Box>
      <Stack
        align="center"
        w="100%"
      >
        <HStack
          w="4xl"
          align="center"
        >
          <Box
            w="50%"
          >
            <Heading
              align="left"
              fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }}
              fontWeight={800}
              lineHeight="150%"
              py="2"
            >
              Step 1
              <Text
                fontWeight={400}
              >
                Create an account.
              </Text>
            </Heading>
          </Box>
          <Box
            w="50%"
          >
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.png" />
          </Box>
        </HStack>
        <HStack
          w="4xl"
          align="center"
        >
          <Box
            w="50%"
          >
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.png" />
          </Box>
          <Box
            w="50%"
          >
            <Heading
              align="left"
              fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }}
              fontWeight={800}
              lineHeight="150%"
              py="2"
            >
              Step 2
              <Text
                fontWeight={400}
              >
                Start browsing!
              </Text>
            </Heading>
          </Box>
        </HStack>
        <HStack
          w="4xl"
          align="center"
        >
          <Box
            w="50%"
          >
            <Heading
              align="left"
              fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }}
              fontWeight={800}
              lineHeight="150%"
              py="2"
            >
              Step 3
              <Text
                fontWeight={400}
              >
                Purchase and download your favorite notes!
              </Text>
            </Heading>
          </Box>
          <Box
            w="50%"
          >
            <Image w="100%" src="https://opendoodles.s3-us-west-1.amazonaws.com/ballet.png" />
          </Box>
        </HStack>
      </Stack>
      <SimpleGrid columns={2} spacing={10} px="15%">
        <Center
          bg="tomato"
          height="200px"
          position="relative"
        >
          <Heading
            verticalAlign="middle"
            position="absolute"
            top="50%"
            bottom="50%"
            fontSize={{ base: 'xl', sm: '1.5xl', md: '3xl' }}
            fontWeight={800}
            lineHeight="150%"
          >
            Step 1
            <Text
              fontWeight={400}
            >
              Create an account.
            </Text>
          </Heading>
        </Center>
        <Box height="200px">
          <Image
            w="80%"
            src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.png"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Steps;
