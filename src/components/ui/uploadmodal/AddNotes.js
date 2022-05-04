import React from 'react';
import {
  Flex, Divider, HStack, Text,
} from '@chakra-ui/react';
import FileUpload from '../../util/FileUpload';

// FiEye, FiHeart, FiBookmark

export default function AddNotes({
  pdfControl, notaControl, gnControl, setFile,
}) {
  // const [pdfFile, setPdfFile] = useState(null);
  // const [noteFile, setNoteFile] = useState(null);
  // const [gnoteFile, setGNoteFile] = useState(null);
  // console.log(pdfFile);
  return (
    <>
      <Flex py={4}>
        <FileUpload
          name="PDF File"
          acceptedFileTypes=".pdf"
          isRequired
          placeholder="Choose .pdf file"
          control={pdfControl}
          setValue={setFile.pdf}
        >
          Upload PDF File
        </FileUpload>
      </Flex>

      {/* <Divider />
      {files.pdf === null ? <Center />
        : (
          <Center>
            <Document file={files.pdf}>
              <Page pageNumber={1} width={375} />
            </Document>
          </Center>
        )} */}
      <Divider />
      <Divider />
      <Divider />
      <Flex py={4}>
        <FileUpload
          name="Notability File"
          acceptedFileTypes=".note"
          placeholder="Choose .note file"
          control={notaControl}
          setValue={setFile.nota}
        >
          Upload .note file for Notability
        </FileUpload>
      </Flex>
      <HStack>
        <Divider variant="dashed" />
        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
          or
        </Text>
        <Divider variant="dashed" />
      </HStack>
      <Flex py={4}>
        <FileUpload
          name="GoodNotes File"
          acceptedFileTypes=".goodnotes"
          placeholder="Choose .goodnotes file"
          control={gnControl}
          setValue={setFile.gnote}
        >
          Upload .goodnotes file for GoodNotes
        </FileUpload>
      </Flex>
    </>
  );
}
