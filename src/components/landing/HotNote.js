import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Heading, Box, SimpleGrid, useStyleConfig,
} from '@chakra-ui/react';
import NoteCard from '../ui/cards/NoteCard';

import { browseHotNotes } from '../../actions/note/note';

function HotNote(props) {
  // const { variant, ...rest } = props;
  const hotNoteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  const notes = useSelector((state) => state.note.byId);
  const error = useSelector((state) => state.error.user.user);
  const dispatch = useDispatch();

  const styles = useStyleConfig('Step', { variant: props.variant });

  useEffect(() => {
    if (hotNoteIds.length === 0) {
      dispatch(browseHotNotes(0));
    }
  }, [dispatch, hotNoteIds.length]);

  // Pass the computed styles into the `__css` prop
  return (
    <>
      <Box>
        <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: 'xl', sm: '2xl', md: '5xl' }} fontWeight={900} lineHeight="150%">
            See what&lsquo;s hot
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          py={4}
          pb={10}
          mx="auto"
        >
          {hotNoteIds.map((id) => (<NoteCard key={id} noteId={id} imageUrl={notes[id].preview_url} username={notes[id].username} viewCount={notes[id].view_cnt} savedCount={notes[id].saved_cnt} title={notes[id].title} dateCreated={notes[id].created_at} noteType={notes[id].note_type} />))}
        </SimpleGrid>
      </Box>
      <Box borderBottom="2px solid black" position="absolute" left="0" right="0" />
    </>
  );
}

export default HotNote;
