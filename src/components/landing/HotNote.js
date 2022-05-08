import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Heading, Box, SimpleGrid,
  Flex, Center, Button,
} from '@chakra-ui/react';
import NoteCard from '../ui/cards/NoteCard';

import { browseHotNotes } from '../../actions/note/note';

function HotNote(props) {
  // const { variant, ...rest } = props;
  const hotNoteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  const notes = useSelector((state) => state.note.byId);
  const error = useSelector((state) => state.error.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hotNoteIds.length === 0) {
      dispatch(browseHotNotes(0));
    }
  }, [dispatch, hotNoteIds.length]);

  return (
    <>
      <Box>
        <Box textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: '3xl', sm: '5xl' }} fontWeight="extrabold" lineHeight="shorter">
            See what&rsquo;s hot 🔥
          </Heading>
        </Box>
      </Box>
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
      >

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          py={4}
          pb={10}
          mx="auto"
        >
          {hotNoteIds.map((id) => (<NoteCard key={id} noteId={id} imageUrl={notes[id].preview_url} username={notes[id].username} viewCount={notes[id].view_cnt} savedCount={notes[id].saved_cnt} title={notes[id].title} dateCreated={notes[id].created_at} noteType={notes[id].note_type} />))}
        </SimpleGrid>
      </Flex>
      <Center mb={4} p={8}>
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
      <Box borderBottom="2px solid black" position="absolute" left="0" right="0" />

    </>
  );
}

export default HotNote;
