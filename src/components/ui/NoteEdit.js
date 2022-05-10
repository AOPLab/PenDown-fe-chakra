import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Heading,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { FiUpload, FiEdit3 } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import EditDescriptions from './notepage/EditDescriptions';
import { getNote, editNote } from '../../actions/note/note';
import { fetchAllTags } from '../../actions/tag/tag';

const steps = [
  { label: 'Uploaded notes', icon: FiUpload },
  { label: 'Edit descriptions', icon: FiEdit3 },
];

const initialContent = {
  courseId: null,
  schoolId: null,
  title: null,
  courseOption: null,
  selectedItems: [],
};

export default function NoteEdit({
  isNoteOpen, onNoteClose, scrollBehavior, finalFocusRef,
}) {
  const history = useHistory();
  // const config = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading.note.note);
  const error = useSelector((state) => state.error.note);
  const tags = useSelector((state) => state.tag);
  const errorToast = useToast();
  // const dispatch = useDispatch();

  // FIXME: copied from src/containers/note/index.js
  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  const config = useSelector((state) => state.auth);
  const notes = useSelector((state) => state.note.byId);
  // const user = useSelector((state) => state.user);

  const { control: pdfControl, reset: resetPdfFile } = useForm();
  const { control: notaControl, reset: resetNoteFile } = useForm();
  const { control: gnControl, reset: resetGnoteFile } = useForm();

  const [pdfFile, setPdfFile] = useState(null);
  const [noteFile, setNoteFile] = useState(null);
  const [gnoteFile, setGNoteFile] = useState(null);
  const [content, setContent] = useState(initialContent);
  const [tagList, setTagList] = useState([]);
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
        tagList: notes[noteId].tagIds.map((id) => ({ value: id, label: tags.byId[id].name })),
        is_saved: notes[noteId].is_saved,
        pdf_filename: notes[noteId].pdf_filename,
        notability_filename: notes[noteId].notability_filename,
        goodnotes_filename: notes[noteId].goodnotes_filename,
        pdf_url: notes[noteId].pdf_url,
        nota_url: notes[noteId].notability_url,
        gnote_url: notes[noteId].goodnotes_url,
      });
    }
  }, [noteId, notes, tags.byId]);

  useEffect(() => {
    if (noteId !== null && Number.isInteger(Number(noteId))) {
      if (config.token !== null && config.token !== '') {
        dispatch(getNote(noteId, config.token));
      } else {
        dispatch(getNote(noteId));
      }
    }
  }, [config.token, dispatch, noteId]);
  // end copied from src/containers/note/index.js

  const {
    nextStep, prevStep, reset, activeStep,
  } = useSteps({
    initialStep: 0,
  });

  const setFile = {
    pdf: setPdfFile,
    nota: setNoteFile,
    gnote: setGNoteFile,
  };

  const files = {
    pdf: pdfFile,
    nota: noteFile,
    gnote: gnoteFile,
  };

  const {
    reset: resetDescription, register, handleSubmit, setValue, formState: { errors, isSubmitting }, setError,
  } = useForm({
    defaultValues: {
      bean: 0,
      description: '',
    },
  });

  useEffect(() => {
    setValue('bean', notes[noteId].bean);
    setValue('description', notes[noteId].description);
  }, [noteId, notes, setValue]);

  const onSubmit = async (values) => {
    if (!Number.isInteger(Number(values.bean))) {
      setError('bean', { type: 'focus', message: 'Not Integer!' }, { shouldFocus: true });
      errorToast({
        title: 'Bean',
        description: 'Not Integer!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const existTagArray = content.selectedItems.filter((item) => item.value !== item.label);
    const tagArray = existTagArray.map((item) => parseInt(item.value, 10));
    const newTagArray = content.selectedItems.filter((item) => item.value === item.label).map((newItem) => newItem.label);
    await dispatch(editNote(config.token, noteId, content.title, values.description, values.isTemplate === 'Yes', parseInt(content.courseId, 10), parseInt(values.bean, 10), notes[noteId].tagIds, tagArray, newTagArray));
    setSubmitDone(true);
  };

  const contents = [
    <></>,
    <EditDescriptions key="2" errors={errors} register={register} files={files} setContent={setContent} tagLists={tagList} property={property} setProperty={setProperty} />,
  ];

  const modalSize = useBreakpointValue({ base: 'full', md: 'xl' });
  const modalRadius = useBreakpointValue({ base: 'md', md: 'pendown' });

  useEffect(() => {
    setTagList(tags.allIds.map((id) => ({ value: id, label: tags.byId[id].name })));
  }, [tags.allIds, tags.byId]);

  useEffect(() => {
    dispatch(fetchAllTags());
  }, [dispatch]);

  useEffect(() => {
    if (submitDone === true && loading.addNote === false) {
      if (error.addNote) {
        errorToast({
          title: 'Add Note Fail',
          description: error.addNote,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        reset();
        resetGnoteFile({ 'GoodNotes File': null });
        resetNoteFile({ 'Notability File': null });
        resetPdfFile({ 'PDF File': null });
        resetDescription();
        setPdfFile(null);
        setNoteFile(null);
        setGNoteFile(null);
        onNoteClose();
      }
      setSubmitDone(false);
    }
  }, [error, error.addNote, errorToast, loading, loading.addNote, onNoteClose, reset, resetDescription, resetGnoteFile, resetNoteFile, resetPdfFile, submitDone]);

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isNoteOpen}
      onClose={onNoteClose}
      finalFocusRef={finalFocusRef}
      scrollBehavior={scrollBehavior}
      size={modalSize}
      isCentered
    >
      <ModalOverlay
        backdropFilter="blur(10px)"
        bg="blackAlpha.300"
      />
      <ModalContent border="2px solid black" borderRadius={modalRadius}>
        <ModalHeader fontWeight="bold" borderBottom="2px solid black">Edit your ✨ note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" width="100%" my={4}>
            <Steps activeStep={1} colorScheme="secondary">
              {steps.map(({ label, icon }, index) => (
                <Step label={label} key={label} icon={icon}>
                  {contents[index]}
                </Step>
              ))}
            </Steps>
            {activeStep === steps.length ? (
              <Flex px={4} py={4} width="100%" flexDirection="column">
                <Heading fontSize="xl" textAlign="center">
                  Woohoo! All steps completed!
                </Heading>
                <Flex>
                  <Button mx="auto" mt={6} onClick={reset} p={3} variant="pendown-yellow">
                    Reset
                  </Button>
                  <Button mx="auto" mt={6} onClick={onNoteClose} p={3} variant="pendown-yellow">
                    Close
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Flex width="100%" justify="flex-end">
                <Button
                  isDisabled={activeStep === 0}
                  mr={4}
                  onClick={prevStep}
                  variant="pendown"
                >
                  Prev
                </Button>
                {activeStep === steps.length - 2
                  ? <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting} variant="pendown-primary">Submit</Button> : (
                    <Button isDisabled={typeof (files.pdf) === 'undefined'} onClick={nextStep} variant="pendown-primary">
                      Next
                    </Button>
                  )}
              </Flex>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
