/* eslint-disable react/jsx-props-no-spreading */
import { Badge } from '@chakra-ui/react';
import React from 'react';

export default function BannerBadge({ children, ...props }) {
  return (
    <Badge
      rounded="3xl"
      variant="pendown"
      px="4"
      py="2"
      colorScheme="white"
      border="2px black solid"
      fontWeight={800}
      fontSize="lg"
      // style={props.style}
      {...props}
    >
      {children}
    </Badge>
  );
}
