import { useParams } from 'react-router-dom';
import React from 'react';
import {
  // Container,
  Box,
  Flex,
  Divider,
  Text,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import MainSection from '../../components/ui/notepage/MainSection';
import DescriptionSection from '../../components/ui/notepage/DescriptionSection';
import CourseSection from '../../components/ui/notepage/CourseSection';
import TagsSection from '../../components/ui/notepage/TagsSection';

const property = {
  pdfUrl: 'http://www.africau.edu/images/default/sample.pdf',
  imageUrl: 'https://p.calameoassets.com/180515111509-087734d3ab9181b3dbabd2c3eab490b6/p1.jpg',
  imageAlt: 'Alt',
  dateCreated: 'Mar. 12, 2022',
  title: 'IM 3007 Midterm Note',
  formattedPrice: '$1,900.00',
  description: 'The description of the note. Users can explain as much as he/she wants in this section.',
  school: 'National Taiwan University',
  course: 'IM 3007: System Analysis and Design',
  reviewCount: 34,
  viewCount: '3.2k',
  savedCount: '32',
  notability: true,
  noteType: 'Notability',
  username: 'cutey',
  fullName: 'Cindy L. Jhou',
  template: true,
};

function Note() {
  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <Container maxW="5xl"> */}
      <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx="auto" maxW="3xl" py={12} px={6}>
          <Box width={{ base: 'md', md: '2xl' }} maxW="2xl" borderRadius="md" border="2px solid black" bg={useColorModeValue('white', 'gray.700')} boxShadow="md" p={0}>
            <MainSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <DescriptionSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <CourseSection property={property} />
            <Divider style={{ borderBottom: '2px black solid', opacity: 1, width: '100%' }} />
            <TagsSection property={property} />
          </Box>
          <Box width="100%">
            <Text align="center" color="gray.900" fontWeight={500} fontSize="xs">
              Do you find something wrong?
              {' '}
              <Text as="span" color="red.500" fontWeight={700}>Report</Text>
            </Text>
          </Box>
        </Stack>
      </Flex>
      {/* </Container> */}
    </>
  );
}

export default Note;
