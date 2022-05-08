import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import '../../styles/SectionImage.css';

function SectionImage(props) {
  // const { variant, ...rest } = props;

  // Pass the computed styles into the `__css` prop
  return (
    <Box
      className="container"
      borderRadius="pendown"
      borderWidth="2px"
      borderColor="black"
      transitionDuration="120ms"
      _hover={{ shadow: 'pendown' }}
    >
      <Image src={props.image} className="image" borderRadius="pendown" objectFit="cover" height="320px" />
      <Box className="overlay" bg="primary.500" borderRadius="pendown">
        <Text className="text" fontSize={{ base: 'l', sm: 'xl', md: '2xl' }} fontWeight="bold">
          {props.text}
        </Text>
      </Box>
    </Box>
  );
}

export default SectionImage;
