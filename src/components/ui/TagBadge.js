import {
  Badge, Box, Center, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function TagBadge({ children, style }) {
  return (
    <Box>
      <Badge
        style={style}
        borderRadius="pendown"
        colorScheme="white"
        border="2px black solid"
        width="full"
        maxWidth="140px"
        px="10px"
        py="10px"
        fontWeight={800}
      >
        <Center>
          <Text isTruncated size="md">
            {children}
          </Text>
        </Center>
      </Badge>
    </Box>
  );
}
