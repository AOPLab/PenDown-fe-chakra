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
  Button,
  Icon,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { FiEdit2 } from 'react-icons/fi';

import MainSection from '../../components/ui/notepage/MainSection';
import DescriptionSection from '../../components/ui/notepage/DescriptionSection';
import CourseSection from '../../components/ui/notepage/CourseSection';
import TagsSection from '../../components/ui/notepage/TagsSection';
import GeneralLoading from '../../components/GeneralLoading';

import { getNote, editNote } from '../../actions/note/note';
import NoteEdit from '../../components/ui/NoteEdit';

function Note() {
  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  const loading = useSelector((state) => state.loading.note.note);
  const error = useSelector((state) => state.error.note);
  const config = useSelector((state) => state.auth);
  const notes = useSelector((state) => state.note.byId);
  const user = useSelector((state) => state.user);

  const errorToast = useToast();

  // modal trigger
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const btnRef = React.useRef();
  // modal trigger end

  const color = useColorModeValue('white', 'gray.700');
  const [submitDone, setSubmitDone] = useState(false);

  const [property, setProperty] = useState({
    noteId: null,
    imageUrl: null,
    imageAlt: null,
    dateCreated: null,
    title: null,
    formattedPrice: null,
    description: null,
    schoolId: null,
    school: null,
    courseId: null,
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
    pdf_url: null,
    nota_url: null,
    gnote_url: null,
  });
  const dispatch = useDispatch();

  const onEditNote = (title, description, isTemplate, courseId, bean, oriTagIds, tagArray, newTagArray) => {
    dispatch(editNote(config.token, noteId, title, description, isTemplate, courseId, bean, oriTagIds, tagArray, newTagArray));
    setSubmitDone(true);
  };

  useEffect(() => {
    if (notes[noteId]) {
      console.log('sdfg: ', notes[noteId]);
      setProperty({
        noteId: notes[noteId].id,
        imageUrl: notes[noteId].preview_url,
        imageAlt: 'No Preview Image!',
        dateCreated: notes[noteId].created_at,
        title: notes[noteId].title,
        formattedPrice: notes[noteId].bean,
        description: notes[noteId].description,
        schoolId: notes[noteId].school_id,
        school: notes[noteId].school_name,
        course: `${notes[noteId].course_no} ${notes[noteId].course_name}`,
        courseId: notes[noteId].course_id,
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
        pdf_url: notes[noteId].pdf_url,
        nota_url: notes[noteId].notability_url,
        gnote_url: notes[noteId].goodnotes_url,
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

  useEffect(() => {
    if (submitDone === true && loading.editNote === false) {
      if (error.editNote) {
        errorToast({
          title: 'Edit Note Fail',
          description: error.editNote,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        onClose();
      }
      setSubmitDone(false);
    }
  }, [error.editNote, errorToast, loading.editNote, onClose, submitDone]);

  if (loading.getNote || loading.editNote) {
    return (
      <GeneralLoading />
    );
  }

  console.log('notes: ', notes);

  return (
    <>
      {/* <Container maxW="5xl"> */}
      {(user.id === property.userId)
        && (
          <Button size="lg" fontSize="24px" position="fixed" variant="pendown-yellow" top="20" mt="2" left="4" onClick={onOpen}><Icon as={FiEdit2} strokeWidth="3px" /></Button>
        )}
      <Flex minH="100vh" align="center" justify="center">
        <Stack spacing={8} mx="auto" maxW="3xl" py={12} px={6}>
          <Box
            // width={{
            //   base: 'lg', xs: 'lg', sm: 'xl', md: '2xl',
            // }}
            width={{ base: '80vw', md: '80vw' }}
            maxW="2xl"
            borderRadius="md"
            border="2px solid black"
            bg={color}
            boxShadow="lg"
            p={0}
          >
            <MainSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <DescriptionSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            {property.schoolId
              && (
                <>
                  <CourseSection property={property} />
                  <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
                </>
              )}
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
      <NoteEdit
        isNoteOpen={isOpen}
        onNoteClose={onClose}
        onEditNote={onEditNote}
        finalFocusRef={btnRef}
        scrollBehavior={scrollBehavior}
        property={property}
        setProperty={setProperty}
      />
      {/* </Container> */}
    </>
  );
}

export default Note;
