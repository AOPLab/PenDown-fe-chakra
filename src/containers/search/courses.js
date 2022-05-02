import React from 'react';
import {
  Container, Box, Heading, SimpleGrid, Flex,
} from '@chakra-ui/react';
import MiscCard from '../../components/ui/cards/MiscCard';

export default function Courses() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const pageProperties = {
    title: 'Courses',
  };

  const property = {
    dateCreated: 'Mar. 12, 2022',
    title: 'IM 3007: System Analysis and Design',
    description: 'National Taiwan University',
    noteCount: '116',
    viewCount: '3.2k',
    savedCount: '32',
  };

  return (
    <>
      <Container maxW="5xl">
        <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
          <Heading>{pageProperties.title}</Heading>

          <Flex
            w="full"
            justifyContent="center"
            alignItems="center"
          >
            <SimpleGrid
              columns={{
                base: 1, md: 2, lg: 2, xl: 3,
              }}
              spacing={{ base: 8, md: 10 }}
              mt={8}
              px={0}
              py={0}
              mx="auto"
            >
              <MiscCard property={property} />
              <MiscCard property={property} />
              <MiscCard property={property} />
              <MiscCard property={property} />
              <MiscCard property={property} />
              <MiscCard property={property} />
              <MiscCard property={property} />

            </SimpleGrid>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
