import React from 'react';
import {
  Container, Box, Heading, SimpleGrid, Flex, Center, Button,
} from '@chakra-ui/react';
import NoteCard from '../../components/ui/cards/NoteCard';

export default function Templates() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const pageProperties = {
    title: 'Templates',
  };

  return (
    <>
      <Box pt="20">
        <Container maxW="5xl">
          <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
            <Heading>{pageProperties.title}</Heading>

            <Flex
              w="full"
              justifyContent="center"
              alignItems="center"
            >
              <SimpleGrid
                columns={{
                  base: 1, md: 2, lg: 2, xl: 3,
                }}
                // minChildWidth="135px"
                spacing={10}
                mt={8}
                px={0}
                py={0}
                mx="auto"
              >
                <NoteCard imageUrl="https://p.calameoassets.com/180515111509-087734d3ab9181b3dbabd2c3eab490b6/p1.jpg" />
                <NoteCard imageUrl="https://img.freepik.com/free-psd/landscape-cover-mock-up-template-a4-size_165833-912.jpg" />
                <NoteCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/I-20-sample.pdf/page1-463px-I-20-sample.pdf.jpg" />
                <NoteCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUp_6A6lTrhauVsYhgjXQl0hrbr2nkjveomha7GkGPksnRdWCKJwbAbToS_3ku3giebw&usqp=CAU" />
                <NoteCard imageUrl="https://imgv2-2-f.scribdassets.com/img/document/262443256/original/acb42c6feb/1613379183?v\u003d1" />
                <NoteCard imageUrl="https://img.yumpu.com/21400799/1/500x640/download-pdf-file-of-sample-newsletter-articles-get-involved.jpg" />
              </SimpleGrid>
            </Flex>
            <Center mt={8}>
              <Button
                variant="pendown-primary"
                size="lg"
                    // onClick={() => history.push('/login')}
                    // onKeyDown={() => history.push('/login')}
                tabIndex="-1"
                role="button"
              >
                View More
              </Button>
            </Center>
          </Box>
        </Container>
      </Box>
    </>
  );
}
