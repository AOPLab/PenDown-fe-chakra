import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Flex, SimpleGrid, Tab, Tabs, TabList, TabPanels, TabPanel,
  Stack, useColorModeValue,
} from '@chakra-ui/react';

import CourseCard from './cards/CourseCard';

function CourseSection() {
  const courseIds = [1, 2]; // useSelector((state) => state.course);
  const courses = useSelector((state) => state.course.byId);
  const schools = 1;
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const property = {
    dateCreated: 'Mar. 12, 2022',
    title: 'IM 3007: System Analysis and Design',
    description: 'National Taiwan University',
    noteCount: '116',
    viewCount: '3.2k',
    savedCount: '32',
  };

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
            <CourseCard property={property} />
            <CourseCard property={property} />
          </SimpleGrid>
        </>
      ),
    },
    {
      label: 'Recent',
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
            <CourseCard property={property} />
            <CourseCard property={property} />
            <CourseCard property={property} />
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
