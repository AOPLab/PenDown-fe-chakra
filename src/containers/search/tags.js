import React from 'react';
import {
  Container, Box, Heading, SimpleGrid, Button, Center,
} from '@chakra-ui/react';
import TagBadge from '../../components/ui/TagBadge';

export default function Tags() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const pageProperties = {
    title: 'Tags',
  };

  return (
    <>
      <Container maxW="5xl">
        <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
          <Heading>{pageProperties.title}</Heading>
          <SimpleGrid
            minChildWidth="140px"
            spacing={4}
            mt={8}
            px={0}
            py={0}
            mx="auto"
          >
            <TagBadge>#funny</TagBadge>
            <TagBadge>#presentation</TagBadge>
            <TagBadge>#tutorial</TagBadge>
            <TagBadge>#class-note</TagBadge>
            <TagBadge>#note-taking</TagBadge>
            <TagBadge>#multinational</TagBadge>
            <TagBadge>#brainstorming</TagBadge>
            <TagBadge>#flower</TagBadge>
            <TagBadge>#painting</TagBadge>
            <TagBadge>#superb</TagBadge>
          </SimpleGrid>
          <Center mt={8}>
            <Button
              variant="pendown-primary"
              size="lg"
                    // onClick={() => history.push('/login')}
                    // onKeyDown={() => history.push('/login')}
              tabIndex="-1"
              role="button"
            >
              View More
            </Button>
          </Center>
        </Box>
      </Container>
    </>
  );
}
