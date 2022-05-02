import { Badge } from '@chakra-ui/react';
import React from 'react';

export default function CardBadge({ content, style }) {
  return (
    <Badge
      style={style}
      rounded="tag"
      px="4"
      py="2"
      colorScheme="gray"
      border="2px black solid"
      fontWeight={800}
    >
      {content}
    </Badge>
  );
}
