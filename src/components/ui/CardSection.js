import React from 'react';
import {
  Flex, SimpleGrid, Select, Tab, Tabs, TabList, TabPanels, TabPanel,
} from '@chakra-ui/react';

import NoteCard from './cards/NoteCard';

function CardSection({ noteType, handleNoteTypeChange }) {
  // const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const filters = [
    {
      title: 'Types',
      items: ['Notability', 'Goodnotes'],
    },
  ];

  const tabData = [
    {
      label: 'Popular',
      content: (
        <>
          <Flex w="full" direction="column" align="flex-end">
            <Select
              defaultValue="Choose Note Type"
              display="flex"
              value={noteType}
              focusBorderColor="primary.400"
              _hover={{ borderColor: 'primary.400' }}
              size="sm"
              bg="white"
              width="120px"
              borderColor="black"
              borderWidth="2px"
              borderRadius="pendown"
              onChange={handleNoteTypeChange}
              alignItems="center"
              justifyContent="center"
              my={2}
            >
              <option key="Choose Note Type" value="Choose Note Type">Note Type</option>
              <option key="All" value="All">All</option>
              <option key="Notability" value="Notability">Notability</option>
              <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
            </Select>
          </Flex>
          <SimpleGrid
            columns={{
              base: 1, md: 2, lg: 3,
            }}
            spacing={10}
            py={4}
            pb={10}
            mx="auto"
          >
            <NoteCard imageUrl="https://p.calameoassets.com/180515111509-087734d3ab9181b3dbabd2c3eab490b6/p1.jpg" />
            <NoteCard imageUrl="https://img.freepik.com/free-psd/landscape-cover-mock-up-template-a4-size_165833-912.jpg" />
            <NoteCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/I-20-sample.pdf/page1-463px-I-20-sample.pdf.jpg" />
            <NoteCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUp_6A6lTrhauVsYhgjXQl0hrbr2nkjveomha7GkGPksnRdWCKJwbAbToS_3ku3giebw&usqp=CAU" />
            <NoteCard imageUrl="https://imgv2-2-f.scribdassets.com/img/document/262443256/original/acb42c6feb/1613379183?v\u003d1" />
            <NoteCard imageUrl="https://img.yumpu.com/21400799/1/500x640/download-pdf-file-of-sample-newsletter-articles-get-involved.jpg" />
          </SimpleGrid>
        </>
      ),
    },
    {
      label: 'Recent',
      content: (
        <>
          <Flex w="full" direction="column" align="flex-end">
            <Select
              defaultValue="Choose Note Type"
              display="flex"
              value={noteType}
              focusBorderColor="primary.400"
              _hover={{ borderColor: 'primary.400' }}
              size="sm"
              bg="white"
              width="120px"
              borderColor="black"
              borderWidth="2px"
              borderRadius="pendown"
              onChange={handleNoteTypeChange}
              alignItems="center"
              justifyContent="center"
              my={2}
            >
              <option key="Choose Note Type" value="Choose Note Type">Note Type</option>
              <option key="All" value="All">All</option>
              <option key="Notability" value="Notability">Notability</option>
              <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
            </Select>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            py={4}
            pb={10}
            mx="auto"
          >
            <NoteCard imageUrl="https://p.calameoassets.com/180515111509-087734d3ab9181b3dbabd2c3eab490b6/p1.jpg" />
            <NoteCard imageUrl="https://img.freepik.com/free-psd/landscape-cover-mock-up-template-a4-size_165833-912.jpg" />
            <NoteCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/I-20-sample.pdf/page1-463px-I-20-sample.pdf.jpg" />
            <NoteCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUp_6A6lTrhauVsYhgjXQl0hrbr2nkjveomha7GkGPksnRdWCKJwbAbToS_3ku3giebw&usqp=CAU" />
            <NoteCard imageUrl="https://imgv2-2-f.scribdassets.com/img/document/262443256/original/acb42c6feb/1613379183?v\u003d1" />
            <NoteCard imageUrl="https://img.yumpu.com/21400799/1/500x640/download-pdf-file-of-sample-newsletter-articles-get-involved.jpg" />
          </SimpleGrid>
        </>
      ),
    },
  ];

  function DataTabs({ data }) {
    return (
      <Tabs isLazy size="lg" width="100%" colorScheme="primary">
        <TabList borderBottomWidth="2px" borderBottomColor="black">
          {data.map((tab, index) => (
            <Tab key={tab.label}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={tab.label}>
              <Flex
                w="full"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                px={{ base: 4, lg: 8, xl: 12 }}
              >
                {tab.content}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  return (
    <>
      <DataTabs data={tabData} />
    </>
  );
}

export default CardSection;
