/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  VStack, Stack,
  Box, Icon, HStack, Textarea,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  FiCalendar,
} from 'react-icons/fi';
import Editable from '../../util/Editable';
import CardBadge from '../CardBadge';
// using react hook form without control this time

// FiEye, FiHeart, FiBookmark

const property = {
  pdfUrl: 'http://www.africau.edu/images/default/sample.pdf',
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Alt',
  dateCreated: 'Mar. 12, 2022',
  title: 'IM 3007 Midterm Note',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  viewCount: '3.2k',
  savedCount: '32',
  notability: true,
};

export default function AddNotes({
  handleSubmit, errors, onClose, isSubmitting, register, files,
}) {
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        onClose();
      }, 3000);
    });
  }
  console.log(files.pdf.name);

  const [fileName, setFileName] = useState(files.pdf.name.split('.').slice(0, -1).join('.'));
  const inputRef = useRef();

  return (
    <>
      <Flex
        // bg={useColorModeValue('#F9FAFB', 'gray.600')}
        p={16}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <VStack py={2} textAlign="center" alignItems="center" spacing={4}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
          >
            <Editable
              text={fileName}
              placeholder="Enter a note title"
              childRef={inputRef}
              type="input"
            >
              <InputGroup size="md">
                <Input
                  ref={inputRef}
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter a note title"
                  focusBorderColor="primary.400"
                  style={{ fontWeight: '600' }}
                  size="lg"
                />
                <InputRightElement width="4.5rem">
                  <Button marginTop="8px" h="1.75rem" size="sm" variant="clean">
                    <CheckIcon color="secondary.500" />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Editable>
          </Heading>
          <CardBadge
            content="Notability"
          />
          <Box display="flex" alignItems="center">
            <HStack>
              <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm">
                {property.dateCreated}
              </Box>
            </HStack>
          </Box>
          <Box border="2px solid black" borderRadius="pendown" p="5px">
            <Document file={files.pdf}>
              <Page
                pageNumber={1}
                height={376}
                width={275}
              />
            </Document>
          </Box>
        </VStack>
      </Flex>
      <Stack spacing="8" px="0" py="8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="name">Description</FormLabel>
            <Textarea
              id="name"
              placeholder="What is good about this note?"
              {...register('Description', { required: true })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </form>
      </Stack>
    </>
  );
}
