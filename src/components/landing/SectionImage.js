import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import '../../styles/SectionImage.css';

function SectionImage(props) {
  // const { variant, ...rest } = props;

  // Pass the computed styles into the `__css` prop
  return (
    <Box className="container">
      <Image src={props.image} className="image" />
      <Box className="overlay" bg="green.500">
        <Text className="text" fontSize={{ base: 'l', sm: 'xl', md: '2xl' }}>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
}

export default SectionImage;
