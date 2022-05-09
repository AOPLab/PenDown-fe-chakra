import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button,
} from '@chakra-ui/react';
import NoteCard from '../../components/ui/cards/NoteCard';

import { searchTemplates } from '../../actions/common/common';

export default function Templates() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const notes = useSelector((state) => state.note.byId);

  const onViewMore = () => {
    dispatch(searchTemplates(search.q, search.type, search.templates.cur_offset + 12));
  };

  console.log(search.templates);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Templates</Heading>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
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
        </Flex>
        {search.templates.totalCnt && search.templates.totalCnt !== 0 && (search.templates.cur_offset + 1) * 12 < search.templates.totalCnt
        && (
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
        )}
      </Box>
    </>
  );
}
