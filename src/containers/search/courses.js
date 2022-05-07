import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button,
} from '@chakra-ui/react';
import MiscCard from '../../components/ui/cards/MiscCard';

export default function Courses() {
  // const history = useHistory();
  // const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const courses = useSelector((state) => state.course.byId);

  const pageProperties = {
    title: 'Courses',
  };

  const property = {
    title: 'IM 3007: System Analysis and Design',
    description: 'National Taiwan University',
  };

  console.log(Object.keys(search.courses.ids).map((key) => search.courses.ids[key].map((id) => { console.log(id); return id; })));

  return (
    <>
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
            spacing={{ base: 10, md: 12 }}
            mt={8}
            px={0}
            py={0}
            mx="auto"
          >
            {Object.keys(search.courses.ids).map((key) => search.courses.ids[key].map((id) => (<MiscCard key={id} property={{ title: `${courses[id].no}: ${courses[id].name}`, description: 'National Taiwan University' }} />)))}
          </SimpleGrid>
        </Flex>
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
    </>
  );
}
