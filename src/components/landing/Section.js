import React from 'react';
import { Heading, Box, SimpleGrid } from '@chakra-ui/react';

import SectionImage from './SectionImage';

function Section(props) {
  // const { variant, ...rest } = props;

  // const styles = useStyleConfig('Step', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box>
      <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }} fontWeight={900} lineHeight="150%">
          Share Your Notes,
          <br />
          Someone Out There Needs It!
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ sm: '1', md: '2' }}
        spacing={5}
        // margin="0 10vw 0 10vw"
        padding="3vh 0 3vh 0"
        alignItems="center"
      >
        <SectionImage
          image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          text="Focus in class only, ask for needed notes on PenDown"
        />
        <SectionImage
          image="https://images.unsplash.com/photo-1623076189461-f7706b741c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          text="Self-learning students get more resources to improve their learning"
        />
        <SectionImage
          image="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          text="Discover university courses from a different aspect"
        />
        <SectionImage
          image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          text="Find it hard to take notes beautifully"
        />
      </SimpleGrid>
    </Box>
  );
}

export default Section;
