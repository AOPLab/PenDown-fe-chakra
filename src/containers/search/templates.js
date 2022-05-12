import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button, Text,
} from '@chakra-ui/react';
import NoteCard from '../../components/ui/cards/NoteCard';
import SearchLoading from '../../components/SearchLoading';

import { searchTemplates } from '../../actions/common/common';

export default function Templates() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const notes = useSelector((state) => state.note.byId);
  const loading = useSelector((state) => state.loading.common.common);

  const onViewMore = () => {
    if (location.pathname !== '/search/templates') {
      history.push('/search/templates');
    }
    dispatch(searchTemplates(search.q, search.type, search.templates.cur_offset + 12));
  };

  useEffect(() => {
    if (search.q !== null && search.q !== '' && !search.templates.ids[0]) {
      if (search.type === null) {
        dispatch(searchTemplates(search.q, 'all', 0));
      } else {
        dispatch(searchTemplates(search.q, search.type, 0));
      }
    }
  }, [dispatch, search.q, search.templates.ids, search.type]);

  if (loading.searchTemplates) {
    return (
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Templates</Heading>
        <SearchLoading />
      </Box>
    );
  }

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Templates</Heading>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {search.templates.ids[0] && search.templates.ids[0].length !== 0
            ? (
              <SimpleGrid
                columns={{
                  base: 1, md: 2, lg: 2, xl: 3,
                }}
                // minChildWidth="135px"
                spacing={10}
                mt={8}
                px={0}
                py={0}
                mx="auto"
              >
                {Object.keys(search.templates.ids).map((key) => search.templates.ids[key].map((id) => ((<NoteCard key={id} noteId={id} imageUrl={notes[id].preview_url} username={notes[id].username} viewCount={notes[id].view_cnt} savedCount={notes[id].saved_cnt} title={notes[id].title} dateCreated={notes[id].created_at} noteType={notes[id].note_type} />))))}
              </SimpleGrid>
            ) : <Text>No Data</Text>}
        </Flex>
        {search.templates.totalCnt && search.templates.totalCnt !== 0 && (search.templates.cur_offset + 12) < search.templates.totalCnt
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
