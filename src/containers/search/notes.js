import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button, Text,
} from '@chakra-ui/react';
import NoteCard from '../../components/ui/cards/NoteCard';

import { searchNotes } from '../../actions/common/common';

export default function Notes() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const notes = useSelector((state) => state.note.byId);

  const onViewMore = () => {
    if (location.pathname !== '/search/notes') {
      history.push('/search/notes');
    }
    dispatch(searchNotes(search.q, search.type, search.notes.cur_offset + 12));
  };

  useEffect(() => {
    if (search.q !== null && search.q !== '' && !search.notes.ids[0]) {
      if (search.type === null) {
        dispatch(searchNotes(search.q, 'all', 0));
      } else {
        dispatch(searchNotes(search.q, search.type, 0));
      }
    }
  }, [dispatch, search.notes.ids, search.q, search.type]);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Notes</Heading>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {search.notes.ids[0] && search.notes.ids[0].length !== 0
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
                {Object.keys(search.notes.ids).map((key) => search.notes.ids[key].map((id) => ((<NoteCard key={id} noteId={id} imageUrl={notes[id].preview_url} username={notes[id].username} viewCount={notes[id].view_cnt} savedCount={notes[id].saved_cnt} title={notes[id].title} dateCreated={notes[id].created_at} noteType={notes[id].note_type} />))))}
              </SimpleGrid>
            ) : <Text>No Data</Text>}
        </Flex>
        {search.notes.totalCnt && search.notes.totalCnt !== 0 && (search.notes.cur_offset + 12) < search.notes.totalCnt
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
