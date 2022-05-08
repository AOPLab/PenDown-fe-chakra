import {
  Box, useColorModeValue, Icon, HStack, VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FiEye, FiBookmark, FiFile, FiList,
} from 'react-icons/fi';
import Marquee from 'react-fast-marquee';
// FiEye, FiHeart, FiBookmark
import Card from '../Card';

export default function CourseCard({ property, props }) {
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
      <Card variant="pendown" maxW="full" onClick={() => { history.push(`/school/${property.schoolId ? property.schoolId : 50}/course/${property.courseId ? property.courseId : 50}`); }}>
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
                {property.title}
              </Marquee>
            </Box>

            {property.description ? (
              <Box display="flex" alignItems="center">
                <HStack>
                  <Icon as={FiList} w="18px" h="18px" css={{ strokeWidth: '3' }} />
                  <Box as="span" color="black" fontSize="sm">
                    {property.description}
                  </Box>
                </HStack>
              </Box>
            ) : <></>}

            <Box d="flex" alignItems="center" w="100%">
              <HStack
                color="gray.500"
                fontWeight="semibold"
                fontSize="xs"
                textTransform="uppercase"
              >
                <Icon as={FiFile} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                  {property.noteCount}
                </Box>
                <Icon as={FiEye} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                  {property.viewCount}
                </Box>
                <Icon as={FiBookmark} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                  {property.savedCount}
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Card>
    </Box>
  );
}