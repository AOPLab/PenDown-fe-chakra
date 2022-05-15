import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Button, Center, Flex,
} from '@chakra-ui/react';
import SearchAvatar from '../../components/ui/avatar/SearchAvatar';
import SearchLoading from '../../components/SearchLoading';

import { searchPeople } from '../../actions/common/common';
import NoData from '../../components/util/NoData';

export default function People() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const accounts = useSelector((state) => state.accounts.byId);
  const loading = useSelector((state) => state.loading.common.common);

  const onViewMore = () => {
    if (location.pathname !== '/search/people') {
      history.push('/search/people');
    }
    dispatch(searchPeople(search.q, search.accounts.cur_offset + 12));
  };

  // useEffect(() => {
  //   if (search.q !== null && search.q !== '' && !search.accounts.ids[0]) {
  //     dispatch(searchPeople(search.q, 0));
  //   }
  // }, [dispatch, search.accounts.ids, search.q]);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>People</Heading>
        {search.accounts.ids[0] && search.accounts.ids[0].length !== 0
          && (
            <SimpleGrid
              minChildWidth="120px"
              spacing={4}
              mt={8}
              px={0}
              py={0}
              mx="auto"
            >
              {Object.keys(search.accounts.ids).map((key) => search.accounts.ids[key].map((id) => (<SearchAvatar key={id} onClick={() => history.push(`/account/${id}`)} username={accounts[id].username} />)))}
            </SimpleGrid>
          )}
        { loading.searchPeople && (
        <SearchLoading />
        ) }
        { !loading.searchPeople && (search.accounts.totalCnt === 0 || search.accounts.totalCnt === null) && (
        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          <NoData />
        </Flex>
        ) }
        {search.accounts.totalCnt && search.accounts.totalCnt !== 0 && (search.accounts.cur_offset + 12) < search.accounts.totalCnt
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
