import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  Tooltip,
  Icon,
  Text,
} from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { FiUpload, FiEdit3 } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import AddNotes from './uploadmodal/AddNotes';
import AddDescriptions from './uploadmodal/AddDescriptions';
import { addNote } from '../../actions/note/note';
import { fetchAllTags } from '../../actions/tag/tag';

const steps = [
  { label: 'Upload notes', icon: FiUpload },
  { label: 'Add descriptions', icon: FiEdit3 },
];

const initialContent = {
  courseId: null,
  schoolId: null,
  title: null,
  courseOption: null,
  selectedItems: [],
};

export default function NoteUpload({
  isNoteOpen, onNoteClose, scrollBehavior, finalFocusRef,
}) {
  const history = useHistory();
  const config = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading.note.note);
  const error = useSelector((state) => state.error.note);
  const tags = useSelector((state) => state.tag);
  const errorToast = useToast();
  const dispatch = useDispatch();

  const {
    nextStep, prevStep, reset, activeStep,
  } = useSteps({
    initialStep: 0,
  });

  const { control: pdfControl, reset: resetPdfFile } = useForm();
  const { control: notaControl, reset: resetNoteFile } = useForm();
  const { control: gnControl, reset: resetGnoteFile } = useForm();

  const [pdfFile, setPdfFile] = useState(null);
  const [noteFile, setNoteFile] = useState(null);
  const [gnoteFile, setGNoteFile] = useState(null);
  const [content, setContent] = useState(initialContent);
  const [tagList, setTagList] = useState([]);
  const [submitDone, setSubmitDone] = useState(false);

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
    reset: resetDescription, register, handleSubmit, formState: { errors, isSubmitting }, setError,
  } = useForm();

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
    if (noteFile === null && gnoteFile === null) {
      errorToast({
        title: 'Note',
        description: 'You must upload at least one note file!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const existTagArray = content.selectedItems.filter((item) => item.value !== item.label);
    const tagArray = existTagArray.map((item) => parseInt(item.value, 10));
    const newTagArray = content.selectedItems.filter((item) => item.value === item.label).map((newItem) => newItem.label);
    await dispatch(addNote(config.token, content.title, values.description, values.isTemplate === 'Yes', parseInt(content.courseId, 10), parseInt(values.bean, 10), pdfFile, noteFile, gnoteFile, tagArray, newTagArray, history));
    setSubmitDone(true);
  };

  const contents = [
    <AddNotes key="1" pdfControl={pdfControl} notaControl={notaControl} gnControl={gnControl} setFile={setFile} />,
    <AddDescriptions key="2" errors={errors} register={register} files={files} setContent={setContent} tagLists={tagList} />,
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

  function checkFile(filesToCheck) {
    const pdfStatus = (typeof (filesToCheck.pdf) !== 'undefined');
    const rawStatus = ((typeof (filesToCheck.nota) !== 'undefined') || (typeof (filesToCheck.gnote) !== 'undefined'));
    return !(pdfStatus && rawStatus);
  }

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
        <ModalHeader fontWeight="bold" borderBottom="2px solid black">Publish your ✨ note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" width="100%" my={4}>
            <Steps activeStep={activeStep} colorScheme="secondary">
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
              <Flex width="100%" justify="space-between" alignItems="center">
                {activeStep === steps.length - 1
                  ? <></> : (
                    <Tooltip label="Make sure you have either uploaded a .note or a .goodnotes file before proceeding 😉" bg="secondary.600" placement="auto" closeDelay={500}>
                      <Flex alignItems="center" cursor="pointer">
                        <Icon color="red.600" mr={2} />
                        <Text fontSize="xs" color="red.600">Having trouble proceeding?</Text>
                      </Flex>
                    </Tooltip>
                  )}
                <Flex width="100%" justify="flex-end">
                  <Button
                    isDisabled={activeStep === 0}
                    mr={4}
                    onClick={prevStep}
                    variant="pendown"
                  >
                    Prev
                  </Button>
                  {activeStep === steps.length - 1
                    ? <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting} variant="pendown-primary">Submit</Button> : (
                      <Button isDisabled={checkFile(files)} onClick={nextStep} variant="pendown-primary">
                        Next
                      </Button>
                    )}
                </Flex>
              </Flex>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
