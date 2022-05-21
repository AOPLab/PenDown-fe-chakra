import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, useColorModeValue, Icon, HStack, VStack, Tooltip,
} from '@chakra-ui/react';
import {
  FiList, FiFile,
} from 'react-icons/fi';
import Card from '../Card';

export default function CourseCard(props) {
  return (
    <Link to={`/school/${props.schoolId ? props.schoolId : 50}/course/${props.courseId ? props.courseId : 0}`}>
      <Box minWidth="fit-content">
        <Card variant="pendown" maxW="full">
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW={{ base: '300px', md: '300px', lg: '330px' }}
            width="400px"
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
                noOfLines={2}
                height="3em"
              >
                <Tooltip label={props.title} placement="right">
                  {props.title}
                </Tooltip>
                {/* <Marquee play={false} gradient={false} speed={50}>
              </Marquee> */}
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

              {props.noteCount && (
              <Box d="flex" alignItems="center" w="100%">
                <HStack
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  <>
                    <Icon as={FiFile} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                    <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                      {props.noteCount}
                    </Box>
                  </>
                  {/* {property.viewCount && (
                  <>
                  <Icon as={FiEye} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                  <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                  {property.viewCount}
                  </Box>
                  </>
                )} */}
                  {/* <Icon as={FiBookmark} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
                <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                  {property.savedCount}
                </Box> */}
                </HStack>
              </Box>
              )}
            </VStack>
          </Box>
        </Card>
      </Box>
    </Link>
  );
}
