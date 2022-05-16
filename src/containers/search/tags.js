import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Button, Center, Flex,
} from '@chakra-ui/react';
import TagBadge from '../../components/ui/TagBadge';
import SearchLoading from '../../components/SearchLoading';

import { searchTags } from '../../actions/common/common';
import NoData from '../../components/util/NoData';

export default function Tags() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const tags = useSelector((state) => state.tag.byId);
  const loading = useSelector((state) => state.loading.common.common);

  const onViewMore = () => {
    if (location.pathname !== '/search/tags') {
      history.push('/search/tags');
    }
    dispatch(searchTags(search.q, search.tags.cur_offset + 12));
  };

  // useEffect(() => {
  //   if (search.q !== null && search.q !== '' && !search.tags.ids[0]) {
  //     dispatch(searchTags(search.q, 0));
  //   }
  // }, [dispatch, search.tags.ids, search.q]);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Tags</Heading>
        {search.tags.ids[0] && search.tags.ids[0].length !== 0
          && (
            <SimpleGrid
              minChildWidth="140px"
              spacing={4}
              mt={8}
              px={0}
              py={0}
              mx="auto"
            >
              {Object.keys(search.tags.ids).map((key) => search.tags.ids[key].map((id) => (
                <Link key={`link-${id}`} to={`/tag/${id}`}>
                  <TagBadge key={id}>{`#${tags[id].name}`}</TagBadge>
                </Link>
              )))}
            </SimpleGrid>
          ) }
        { loading.searchTags && (
        <SearchLoading />
        ) }
        { !loading.searchTags && (search.tags.totalCnt === 0 || search.tags.totalCnt === null) && (
        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          <NoData />
        </Flex>
        ) }
        {search.tags.totalCnt && search.tags.totalCnt !== 0 && (search.tags.cur_offset + 12) < search.tags.totalCnt
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
