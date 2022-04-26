import React, { useState } from 'react';
import { Flex, Divider } from '@chakra-ui/react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import FileUpload from '../../util/FileUpload';

// FiEye, FiHeart, FiBookmark

export default function AddNotes({ control }) {
  const [pdfFile, setPdfFile] = useState(null);
  // const [noteFile, setNoteFile] = useState(null);
  console.log(pdfFile);
  return (
    <>
      <Flex py={4}>
        <FileUpload
          name="PDF File"
          acceptedFileTypes=".pdf"
          isRequired
          placeholder="Choose .pdf file"
          control={control}
          setValue={setPdfFile}
        >
          Upload PDF File
        </FileUpload>
      </Flex>
      <Divider />
      {pdfFile === null ? <></>
        : (
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        )}
      {/* <Flex py={4}>
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
      </Flex> */}
    </>
  );
}
