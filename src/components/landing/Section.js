import React from 'react';
import {
  Heading, Box, SimpleGrid, Flex,
} from '@chakra-ui/react';

import SectionImage from './SectionImage';

function Section(props) {
  // const { variant, ...rest } = props;

  // const styles = useStyleConfig('Step', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box>
      <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }} mb={-4}>
        <Heading fontSize={{ base: '3xl', sm: '5xl' }} fontWeight="extrabold" lineHeight="shorter">
          Share Your Notes,
          <br />
          Someone Out There Needs It!
        </Heading>
      </Box>
      <Flex
        p={2}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          px={2}
          py={4}
        >
          <SimpleGrid
            columns={{ sm: '1', md: '2' }}
            spacing={4}
            // margin="0 10vw 0 10vw"
            padding="3vh 0 3vh 0"
            alignItems="center"
          >
            <SectionImage
              image="./images/section/exams_g4ow.png"
              text="Focus on class only, search for needed notes on PenDown"
            />
            <SectionImage
              image="./images/section/Online_learning_re_qw08.png"
              text="Self-learning students get more resources to improve their learning"
            />
            <SectionImage
              image="./images/section/Professor_re_mj1s.png"
              text="Discover university courses from a different aspect"
            />
            <SectionImage
              image="./images/section/Notebook_re_id0r.png"
              text="Stand on the shoulders of giants, get notes from the best"
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

export default Section;
