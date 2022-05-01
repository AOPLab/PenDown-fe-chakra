import React from 'react';
import {
  Container, Box, Heading, SimpleGrid,
} from '@chakra-ui/react';
import SearchAvatar from '../../components/ui/search/SearchAvatar';

export default function People() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const pageProperties = {
    title: 'People',
  };

  return (
    <>
      <Box pt="20">
        <Container maxW="5xl">
          <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
            <Heading>{pageProperties.title}</Heading>
            <SimpleGrid
              minChildWidth="120px"
              spacing={4}
              mt={8}
              px={0}
              py={0}
              mx="auto"
            >
              <SearchAvatar username="icheft" />
              <SearchAvatar username="gary1030" />
              <SearchAvatar username="pendown.official" />
              <SearchAvatar username="brian_lxchen" />
              <SearchAvatar username="derekdylu" />
              <SearchAvatar username="Shannon" />
              <SearchAvatar username="guanyiii" />
              <SearchAvatar username="chienyu" />
              <SearchAvatar username="pd_test" />
              <SearchAvatar username="aoplab" />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
