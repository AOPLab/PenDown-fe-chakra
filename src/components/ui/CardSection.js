import React from 'react';
import { useSelector } from 'react-redux';
import {
  Flex, SimpleGrid, Select, Box,
} from '@chakra-ui/react';

import NoteCard from './cards/NoteCard';
import NoData from '../util/NoData';

function CardSection({ noteType, handleNoteTypeChange, noteIds }) {
  const notes = useSelector((state) => state.note.byId);
  return (
    <>
      <Flex w="full" direction="column" align="flex-end">
        <Select
          defaultValue="Choose Note Type"
          display="flex"
          value={noteType}
          focusBorderColor="primary.400"
          _hover={{ borderColor: 'primary.400' }}
          size="sm"
          bg="white"
          width="120px"
          borderColor="black"
          borderWidth="2px"
          borderRadius="pendown"
          onChange={handleNoteTypeChange}
          alignItems="center"
          justifyContent="center"
          my={2}
        >
          <option key="Choose Note Type" value="Choose Note Type">Note Type</option>
          <option key="All" value="All">All</option>
          <option key="Notability" value="Notability">Notability</option>
          <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
        </Select>
      </Flex>
      {noteIds.length === 0 ? (
        <Box mt="10%">
          <NoData />
        </Box>
      )
        : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            py={4}
            pb={10}
            mx="auto"
          >
            {noteIds.map((id) => (<NoteCard key={id} noteId={id} imageUrl={notes[id].preview_url} username={notes[id].username} viewCount={notes[id].view_cnt} savedCount={notes[id].saved_cnt} title={notes[id].title} dateCreated={notes[id].created_at} noteType={notes[id].note_type} />))}
          </SimpleGrid>
        )}
    </>
  );
}

export default CardSection;
