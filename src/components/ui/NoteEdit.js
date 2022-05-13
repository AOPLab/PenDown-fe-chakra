import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import EditDescriptions from './notepage/EditDescriptions';
import { fetchAllTags } from '../../actions/tag/tag';

const initialContent = {
  courseId: null,
  schoolId: null,
  title: null,
  courseOption: null,
  selectedItems: [],
};

export default function NoteEdit({
  isNoteOpen, onNoteClose, onEditNote, scrollBehavior, finalFocusRef, property, setProperty,
}) {
  // const history = useHistory();
  // const config = useSelector((state) => state.auth);
  // const loading = useSelector((state) => state.loading.note.note);
  // const error = useSelector((state) => state.error.note);
  const tags = useSelector((state) => state.tag);
  const errorToast = useToast();
  // const dispatch = useDispatch();

  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const notes = useSelector((state) => state.note.byId);
  // const user = useSelector((state) => state.user);
  const [content, setContent] = useState(initialContent);
  const [tagList, setTagList] = useState([]);
  // const [submitDone, setSubmitDone] = useState(false);

  const dispatch = useDispatch();

  const {
    reset: resetDescription, register, handleSubmit, setValue, formState: { errors, isSubmitting }, setError,
  } = useForm({
    defaultValues: {
      bean: 0,
      description: '',
    },
  });

  useEffect(() => {
    if (notes[noteId]) {
      setValue('bean', notes[noteId].bean);
      setValue('description', notes[noteId].description);
    }
  }, [noteId, notes, setValue]);

  const handleCancel = () => {
    setValue('bean', notes[noteId].bean);
    setValue('description', notes[noteId].description);
    onNoteClose();
  };

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
    onEditNote(content.title, values.description, values.isTemplate === 'Yes', parseInt(content.courseId, 10), parseInt(values.bean, 10), notes[noteId].tagIds, tagArray, newTagArray);
    resetDescription();
  };

  const modalSize = useBreakpointValue({ base: 'full', md: 'xl' });
  const modalRadius = useBreakpointValue({ base: 'md', md: 'pendown' });

  useEffect(() => {
    setTagList(tags.allIds.map((id) => ({ value: id, label: tags.byId[id].name })));
  }, [tags.allIds, tags.byId]);

  useEffect(() => {
    dispatch(fetchAllTags());
  }, [dispatch]);

  // useEffect(() => {
  //   if (submitDone === true && loading.editNote === false) {
  //     if (error.editNote) {
  //       errorToast({
  //         title: 'Edit Note Fail',
  //         description: error.editNote,
  //         status: 'error',
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     } else {
  //       resetDescription();
  //       onNoteClose();
  //     }
  //     setSubmitDone(false);
  //   }
  // }, [error, error.editNote, errorToast, loading, loading.editNote, onNoteClose, resetDescription, submitDone]);

  console.log('property: ', property);

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
            <EditDescriptions key="2" errors={errors} register={register} setContent={setContent} tagLists={tagList} property={property} setProperty={setProperty} />
            <Flex width="100%" justify="flex-end">
              <Button onClick={handleCancel} variant="pendown">Cancel</Button>
              <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting} variant="pendown-primary">Submit</Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
