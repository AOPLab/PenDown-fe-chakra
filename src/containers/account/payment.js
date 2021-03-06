/* eslint-disable no-sparse-arrays */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Heading,
  useColorModeValue,
  Stat,
  StatNumber,
  StatLabel,
  Icon,
  HStack,
  Text,
  Flex,
  Stack,
  Box,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';

import CustomIcon from '../../components/ui/icon/index';
import PaymentCard from '../../components/ui/cards/PaymentCard';

function Payment() {
  const user = useSelector((state) => state.user);

  const [frequency, setFrequency] = useState('month');

  const featureList = {
    basic: [
      'Earn beans by uploading your notes',
      'Unlimited notes',
    ],
    vip: [
      'Everything from BASIC',
      'Download every note without uploading',
      'Buffet time!',
    ],
    deposit: [
      'Everything from BASIC',
      'You get to choose how much you want to deposit',
      'Every coin is worth 2 beans',
    ],
  };

  const Feature = (props) => (
    <Flex align="center">
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue('brand.500', 'brand.300')}
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
        <chakra.span mt={2} color={useColorModeValue('gray.700', 'gray.400')}>
          {props.children}
        </chakra.span>
      </Box>
    </Flex>
  );

  return (
    <>
      <Stack as="flex" direction="column" py={8} px={4} gap={4}>
        <Flex direction="column" gap={8} pb={8} borderBottom="2px black solid">
          <Heading fontSize="3xl">Status</Heading>
          <Stat
            px={4}
            py="2"
          // shadow="xl"
          // width="130px"
            minWidth="20%"
            maxWidth="50%"
            width="200px"
            border="2px solid"
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded="pendown"
          >
            <StatLabel fontWeight="medium" fontSize="md" isTruncated>
              Bean Balance
            </StatLabel>
            <StatNumber fontSize="2xl" fontWeight="bold">
              <HStack>
                <Icon as={CustomIcon.NoteBeanOriginal} />
                <Text>{user.bean}</Text>
              </HStack>
            </StatNumber>
          </Stat>
        </Flex>
        <Flex direction="column" gap={8} pb={8}>
          <Heading fontSize="3xl">Tiers</Heading>
          {/* content */}
          <SimpleGrid columns={[1, , , 3]} gap={[16, 8]}>
            <PaymentCard
              tierName="Basic"
              tierPrice="0"
              features={featureList.basic}
              tierStatus="Subscribed"
              bgColor="red.500"
              disabled
            />
            <PaymentCard
              tierName="VIP"
              tierPrice="15"
              features={featureList.vip}
              tierStatus="Coming soon..."
              bgColor="primary.500"
              disabled
            />
            <PaymentCard
              tierName="Deposit"
              tierPrice="5"
              features={featureList.deposit}
              tierStatus="Coming soon..."
              bgColor="pink.500"
              disabled
            />
          </SimpleGrid>
        </Flex>
      </Stack>
    </>
  );
}

export default Payment;
