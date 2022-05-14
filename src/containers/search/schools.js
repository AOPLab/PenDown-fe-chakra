import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button, Text,
} from '@chakra-ui/react';
import MiscCard from '../../components/ui/cards/MiscCard';
import SearchLoading from '../../components/SearchLoading';

import { searchSchools } from '../../actions/common/common';

export default function Schools() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const schools = useSelector((state) => state.school.byId);
  const loading = useSelector((state) => state.loading.common.common);

  const onViewMore = () => {
    if (location.pathname !== '/search/schools') {
      history.push('/search/schools');
    }
    dispatch(searchSchools(search.q, search.schools.cur_offset + 12));
  };

  useEffect(() => {
    if (search.q !== null && search.q !== '' && !search.schools.ids[0]) {
      dispatch(searchSchools(search.q, 0));
    }
  }, [dispatch, search.schools.ids, search.q]);

  if (loading.searchSchools) {
    return (
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Schools</Heading>
        <SearchLoading />
      </Box>
    );
  }

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Schools</Heading>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {search.schools.ids[0] && search.schools.ids[0].length !== 0
            ? (
              <SimpleGrid
                columns={{
                  base: 1, md: 1, lg: 1, xl: 2,
                }}
                spacing={{ base: 10, md: 12 }}
                mt={8}
                px={0}
                py={0}
                mx="auto"
              >
                {Object.keys(search.schools.ids).map((key) => search.schools.ids[key].map((id) => (<MiscCard key={id} onClick={() => history.push(`/school/${id}`)} property={{ title: `${schools[id].name}` }} />)))}
              </SimpleGrid>
            ) : <Text>No Data</Text>}
        </Flex>
        {search.schools.totalCnt && search.schools.totalCnt !== 0 && (search.schools.cur_offset + 12) < search.schools.totalCnt
          ? (
            <Center mt={8}>
              <Button
                variant="pendown-primary"
                size="lg"
                onClick={() => onViewMore()}
                tabIndex="-1"
                role="button"
              >
                View More
              </Button>
            </Center>
          ) : <></>}
      </Box>
    </>
  );
}
