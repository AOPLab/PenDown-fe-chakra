import React from 'react';
import {
  Flex, SimpleGrid, Select, Tab, Tabs, TabList, TabPanels, TabPanel,
  Stack, useColorModeValue,
} from '@chakra-ui/react';

import MiscCard from './cards/MiscCard';

function CourseSection({ noteType, handleNoteTypeChange }) {
  // const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const tabData = [
    {
      label: 'Popular',
      content: (
        <>
          <SimpleGrid
            columns={{
              base: 1, md: 2, lg: 3,
            }}
            spacing={10}
            py={4}
            pb={10}
            mx="auto"
          >
            <MiscCard />
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
            <MiscCard />
          </SimpleGrid>
        </>
      ),
    },
  ];

  function DataTabs({ data }) {
    return (
      <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled">
        <Flex justify="center" mx={['auto', 0]} mb={-2}>
          <Stack
            direction="row"
            justify="space-between"
              // p="2"
            textAlign="center"
            rounded="pendown"
            bg={useColorModeValue('gray.100', 'gray.500')}
            border="2px solid black"
          >

            <TabList borderBottom="hidden">
              {data.map((tab) => (
                <Tab
                  key={tab.label}
                  _selected={{ bg: 'primary.400', borderRadius: 'pendown' }}
                  fontSize="md"
                  fontWeight="bold"
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </Stack>
        </Flex>
        <TabPanels>
          {data.map((tab) => (
            <TabPanel key={tab.label}>
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                // px={{ base: 4, lg: 8, xl: 12 }}
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

export default CourseSection;
