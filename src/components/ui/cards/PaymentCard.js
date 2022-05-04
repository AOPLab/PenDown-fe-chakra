/* eslint-disable no-sparse-arrays */
import {
  useColorModeValue,
  Icon,
  Text,
  Flex,
  Stack,
  Box,
  chakra,
  Link,
} from '@chakra-ui/react';
import React from 'react';

// FiEye, FiHeart, FiBookmark

export default function PaymentCard({
  tierName, tierPrice, features, tierStatus, bgColor,
}) {
  const Feature = ({ children: fc }) => (
    <Flex align="center">
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color="inherit"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.span mt={2} color="inherit">
          {fc}
        </chakra.span>
      </Box>
    </Flex>
  );

  return (
    <Box
      rounded={['none', 'pendown']}
      shadow={['none', 'sm']}
      bg={bgColor}
      border="2px solid black"
      textColor="white"
    >
      <Flex
        direction="column"
        justify="space-between"
        p="6"
        alignItems="center"
        borderBottomWidth="1px"
        borderColor={useColorModeValue('gray.900', 'gray.300')}
      >
        <chakra.p
          mb={1}
          fontSize="xl"
          fontWeight="semibold"
          color="white"
          textTransform="uppercase"
        >
          {tierName}
        </chakra.p>
        <Text
          mb={2}
          fontSize="5xl"
          fontWeight={['bold', 'extrabold']}
          color="white"
          lineHeight="tight"
        >
          $
          {tierPrice}
          <chakra.span
            fontSize="2xl"
            fontWeight="medium"
            color={useColorModeValue('gray.50', 'gray.600')}
          >
            {' '}
            /
            month
          </chakra.span>
        </Text>
        <Link
          // w={['full', , 'auto']}
          w="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={5}
          py={3}
          border="solid transparent"
          fontWeight="bold"
          rounded="pendown"
          color={useColorModeValue('white')}
          bg={useColorModeValue('black', 'brand.500')}
          _hover={{
            bg: useColorModeValue('gray.800', 'brand.600'),
            shadow: 'pendown-light',
          }}
          to="/"
        >
          {tierStatus}
        </Link>
      </Flex>
      <Stack direction="column" p="6" spacing="3" flexGrow="1">
        {features.map((feature, i) => <Feature key={feature}>{feature}</Feature>)}
      </Stack>
    </Box>
  );
}
