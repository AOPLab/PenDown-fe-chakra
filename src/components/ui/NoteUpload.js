import React from 'react';
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
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const contents = [
    <AddNotes key="1" control={control} />,
    <AddDescriptions key="1" control={control} />,
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
                <Button onClick={nextStep} variant="pendown-primary">
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Flex>
            )}
          </Flex>
        </ModalBody>

      </ModalContent>
    </Modal>
  );
}
