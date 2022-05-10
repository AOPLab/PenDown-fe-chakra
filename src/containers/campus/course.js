import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CardSection from '../../components/ui/CardSection';
import { statFormatting } from '../../components/util/Helper';

function Course() {
  const { schoolId, courseId } = useParams();
  const schools = useSelector((state) => state.school.byId);
  const courses = useSelector((state) => state.course.byId);

  const [tabIndex, setTabIndex] = useState(0);
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const noteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  // 註 要改成接對應的 notes
  const tabs = ['Popular', 'Recent'];
  const [uploadedNoteIds, setUploadedNoteIds] = useState([]);

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">
            school/
            <Text>
              {schools[schoolId].name}
            </Text>
          </Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge textTransform="lowercase">{ courses[courseId].name }</BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Followers" stat={statFormatting(100312)} />
              {/* 註 stat=courses[courseId].followers */}
              <StatsCard title="Notes" stat={statFormatting(100000303)} />
              {/* 註 stat=courses[courseId].notes */}
            </HStack>
          </Flex>
        </Flex>
        <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
          <Flex justify="center" mx={['auto', 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              textAlign="center"
              rounded="pendown"
              bg={useColorModeValue('gray.100', 'gray.500')}
              border="2px solid black"
            >
              <TabList
                borderBottom="hidden"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    value={tab}
                    _selected={{ bg: 'primary.400', borderRadius: 'pendown' }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Stack>
          </Flex>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab}>
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={noteIds} />
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Course;
