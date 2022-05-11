import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CourseSection from '../../components/ui/CourseSection';

function School() {
  const { schoolId } = useParams();
  const courseIds = [1, 2]; // 讓這個變成皆該學校有的課程
  const schools = useSelector((state) => state.school.byId);
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const tabs = ['Popular', 'Recent'];
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">school/</Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge textTransform="lowercase">{ schools[schoolId].name }</BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Courses" stat="123" />
              {/* 註 stat=schools[schoolId].courseCnt */}
              <StatsCard title="Notes" stat="1" />
              {/* 註 stat=schools[schoolId].notes */}
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
                  <CourseSection courseIds={courseIds} schoolId={schoolId} />
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default School;
