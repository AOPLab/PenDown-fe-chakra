import {
  Box, useColorModeValue, Icon, HStack, VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FiList,
} from 'react-icons/fi';
import Marquee from 'react-fast-marquee';
// FiEye, FiHeart, FiBookmark
import Card from '../Card';

export default function CourseCard(props) {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const history = useHistory();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ p }) => {
    setNumPages(p);
    setPageNumber(1);
  };

  return (
    <Box minWidth="fit-content">
      <Card variant="pendown" maxW="full" onClick={() => { history.push(`/school/${props.schoolId ? props.schoolId : 50}/course/${props.courseId ? props.courseId : 50}`); }}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="300px"
          width="250px"
          borderRadius="pendown"
          position="relative"
        >
          <VStack p="4" align="left">
            <Box
            // mt="0px"
              fontWeight="bold"
              fontSize="2xl"
              as="h1"
              lineHeight="tight"
              isTruncated
            >
              <Marquee play={false} gradient={false} speed={50}>
                {props.title}
              </Marquee>
            </Box>

            {props.description ? (
              <Box display="flex" alignItems="center">
                <HStack>
                  <Icon as={FiList} w="18px" h="18px" css={{ strokeWidth: '3' }} />
                  <Box as="span" color="black" fontSize="sm">
                    {props.description}
                  </Box>
                </HStack>
              </Box>
            ) : <></>}
          </VStack>
        </Box>
      </Card>
    </Box>
  );
}
