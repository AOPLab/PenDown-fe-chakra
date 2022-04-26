import React from 'react';
import {
  HStack, Flex, Divider, Text,
} from '@chakra-ui/react';
import FileUpload from '../../util/FileUpload';

// FiEye, FiHeart, FiBookmark

export default function AddNotes({ control }) {
  return (
    <>
      <Flex py={4}>
        <FileUpload
          name="PDF File"
          acceptedFileTypes=".pdf"
          isRequired
          placeholder="Choose .pdf file"
          control={control}
        >
          Upload PDF File
        </FileUpload>
      </Flex>
      <Divider />
      <Flex py={4}>
        <FileUpload
          name="PDF File"
          acceptedFileTypes=".note"
          placeholder="Choose .note file"
          control={control}
        >
          Upload .note file for Notability
        </FileUpload>
      </Flex>
      <HStack>
        <Divider />
        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
          or
        </Text>
        <Divider />
      </HStack>
      <Flex py={4}>
        <FileUpload
          name="PDF File"
          acceptedFileTypes=".goodnotes"
          placeholder="Choose .goodnotes file"
          control={control}
        >
          Upload .goodnotes file for Goodnotes
        </FileUpload>
      </Flex>
    </>
  );
}
