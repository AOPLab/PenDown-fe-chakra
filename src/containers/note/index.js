import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  // Container,
  Box,
  Flex,
  Divider,
  Text,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import MainSection from '../../components/ui/notepage/MainSection';
import DescriptionSection from '../../components/ui/notepage/DescriptionSection';
import CourseSection from '../../components/ui/notepage/CourseSection';
import TagsSection from '../../components/ui/notepage/TagsSection';

import { getNote } from '../../actions/note/note';

function Note() {
  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  const config = useSelector((state) => state.auth);
  const notes = useSelector((state) => state.note.byId);
  // const user = useSelector((state) => state.user);

  const [property, setProperty] = useState({
    noteId: null,
    imageUrl: null,
    imageAlt: null,
    dateCreated: null,
    title: null,
    formattedPrice: null,
    description: null,
    school: null,
    course: null,
    viewCount: 0,
    savedCount: 0,
    noteType: null,
    username: null,
    fullName: null,
    template: false,
    tagIds: [],
    is_saved: false,
    pdf_filename: null,
    notability_filename: null,
    goodnotes_filename: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (notes[noteId]) {
      setProperty({
        noteId: notes[noteId].id,
        imageUrl: notes[noteId].preview_url,
        imageAlt: 'No Preview Image!',
        dateCreated: notes[noteId].created_at,
        title: notes[noteId].title,
        formattedPrice: notes[noteId].bean,
        description: notes[noteId].description,
        school: notes[noteId].school_name,
        course: `${notes[noteId].course_no} ${notes[noteId].course_name}`,
        viewCount: notes[noteId].view_cnt,
        savedCount: notes[noteId].saved_cnt,
        noteType: notes[noteId].note_type,
        userId: notes[noteId].account_id,
        username: notes[noteId].username,
        fullName: notes[noteId].username,
        template: notes[noteId].is_template,
        tagIds: notes[noteId].tagIds,
        is_saved: notes[noteId].is_saved,
        pdf_filename: notes[noteId].pdf_filename,
        notability_filename: notes[noteId].notability_filename,
        goodnotes_filename: notes[noteId].goodnotes_filename,
      });
    }
  }, [noteId, notes]);

  useEffect(() => {
    if (noteId !== null && Number.isInteger(Number(noteId))) {
      if (config.token !== null && config.token !== '') {
        dispatch(getNote(noteId, config.token));
      } else {
        dispatch(getNote(noteId));
      }
    }
  }, [config.token, dispatch, noteId]);

  return (
    <>
      {/* <Container maxW="5xl"> */}
      <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx="auto" maxW="3xl" py={12} px={6}>
          <Box
            width={{
              base: 'lg', xs: 'lg', sm: 'xl', md: '2xl',
            }}
            maxW="2xl"
            borderRadius="md"
            border="2px solid black"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="md"
            p={0}
          >
            <MainSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <DescriptionSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <CourseSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <TagsSection property={property} />
          </Box>
          <Box width="100%">
            <Text align="center" color="gray.900" fontWeight={500} fontSize="xs">
              Do you find something wrong?
              {' '}
              <Text as="span" color="red.500" fontWeight={700}>Report</Text>
            </Text>
          </Box>
        </Stack>
      </Flex>
      {/* </Container> */}
    </>
  );
}

export default Note;
