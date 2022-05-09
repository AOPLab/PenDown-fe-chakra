import React from 'react';
import {
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

export default function NavItemHover({ icon, onClick, children }) {
  return (
    <Flex
      align="center"
      px="4"
      pl="2"
      py="2"
      cursor="pointer"
      color={useColorModeValue('red.600', 'red.200')}
      bg={useColorModeValue('gray.100', 'gray.800')}
      role="group"
      fontWeight="semibold"
      fontSize="md"
      transition=".15s ease"
      onClick={onClick}
    >
      {icon && (
      <Icon
        mx="2"
        boxSize="4"
        _hover={{
          color: 'red.600',
        }}
            // _groupHover={{
            //   color,
            // }}
        as={icon}
      />
      )}
      {children}
    </Flex>
  );
}
