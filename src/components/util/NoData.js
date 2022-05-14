import React from 'react';
import {
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';

function NoData({ content }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      // height="50vh"
    >
      <Image
        w="20%"
        // rounded="lg"
        // shadow="pendown"
        // border="2px solid black"
        src="/images/util/no_data.svg"
        alt="No Data Available"
      />
      <Heading mt={12} fontWeight="medium" fontSize="2xl">{content || 'No Data'}</Heading>
    </Box>
  );
}

export default NoData;
