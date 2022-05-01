import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex, Heading,
} from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { FiUpload, FiEdit3 } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import AddNotes from './uploadmodal/AddNotes';
import AddDescriptions from './uploadmodal/AddDescriptions';

const steps = [
  { label: 'Upload notes', icon: FiUpload },
  { label: 'Add descriptions', icon: FiEdit3 },
];

export default function NoteUpload({
  isNoteOpen, onNoteClose, scrollBehavior, finalFocusRef,
}) {
  const {
    nextStep, prevStep, reset, activeStep,
  } = useSteps({
    initialStep: 0,
  });

  const {
    handleSubmit: pdfHandleSubmit,
    register: pdfRegister,
    setError: pdfSetError,
    control: pdfControl,
    formState: { errors: pdfErrors, isSubmitting: pdfIsSubmitting },
  } = useForm();

  const {
    handleSubmit: notaHandleSubmit,
    register: notaRegister,
    setError: notaSetError,
    control: notaControl,
    formState: { errors: notaErrors, isSubmitting: notaIsSubmitting },
  } = useForm();

  const {
    handleSubmit: gnHandleSubmit,
    register: gnRegister,
    setError: gnSetError,
    control: gnControl,
    formState: { errors: gnErrors, isSubmitting: gnIsSubmitting },
  } = useForm();

  const [pdfFile, setPdfFile] = useState(null);
  const [noteFile, setNoteFile] = useState(null);
  const [gnoteFile, setGNoteFile] = useState(null);

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

  console.log(`PDF file: ${files.pdf}`);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        reset();
        onNoteClose();
      }, 3000);
    });
  }

  const contents = [
    <AddNotes key="1" pdfControl={pdfControl} notaControl={notaControl} gnControl={gnControl} setFile={setFile} files={files} />,
    <AddDescriptions key="2" handleSubmit={handleSubmit} errors={errors} onClose={onNoteClose} isSubmitting={isSubmitting} register={register} files={files} />,
  ];

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isNoteOpen}
      onClose={onNoteClose}
      finalFocusRef={finalFocusRef}
      scrollBehavior={scrollBehavior}
      size="xl"
      isCentered
    >
      <ModalOverlay
        backdropFilter="blur(10px)"
        bg="blackAlpha.300"
      />
      <ModalContent border="2px solid black" borderRadius="pendown">
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
              <Flex width="100%" justify="flex-end">
                <Button
                  isDisabled={activeStep === 0}
                  mr={4}
                  onClick={prevStep}
                  variant="pendown"
                >
                  Prev
                </Button>
                {activeStep === steps.length - 1 ? <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting} variant="pendown-primary" type="submit">Submit</Button> : (
                  <Button isDisabled={typeof (files.pdf) === 'undefined'} onClick={nextStep} variant="pendown-primary">
                    Next
                  </Button>
                )}
                {/* <Button onClick={nextStep} variant="pendown-primary">
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button> */}
              </Flex>
            )}
          </Flex>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
}
