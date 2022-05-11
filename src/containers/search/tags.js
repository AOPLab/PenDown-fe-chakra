import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Button, Center, Flex, Text,
} from '@chakra-ui/react';
import TagBadge from '../../components/ui/TagBadge';

import { searchTags } from '../../actions/common/common';

export default function Tags() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const tags = useSelector((state) => state.tag.byId);

  const onViewMore = () => {
    if (location.pathname !== '/search/tags') {
      history.push('/search/tags');
    }
    dispatch(searchTags(search.q, search.tags.cur_offset + 12));
  };

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Tags</Heading>
        {search.tags.ids[0] && search.tags.ids[0].length !== 0
          ? (
            <SimpleGrid
              minChildWidth="140px"
              spacing={4}
              mt={8}
              px={0}
              py={0}
              mx="auto"
            >
              {Object.keys(search.tags.ids).map((key) => search.tags.ids[key].map((id) => (<TagBadge key={id} onClick={() => history.push(`/tag/${id}`)}>{`#${tags[id].name}`}</TagBadge>)))}
            </SimpleGrid>
          ) : (
            <Flex
              w="full"
              justifyContent="center"
              alignItems="center"
            >
              <Text>No Data</Text>
            </Flex>
          )}
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
