import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

export default function StatsCard({ title, stat }) {
  // const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py="5"
      // shadow="xl"
      width="150px"
      border="2px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="pendown"
      alignItems="center"
    >
      <StatNumber fontSize="2xl" fontWeight="bold" align="center">
        {stat}
      </StatNumber>
      <StatLabel fontWeight="medium" fontSize="xs" isTruncated align="center">
        {title}
      </StatLabel>
    </Stat>
  );
}
