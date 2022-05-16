import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CourseSection from '../../components/ui/CourseSection';
import GeneralLoading from '../../components/GeneralLoading';
import NoMatch from '../../components/noMatch';
import { statFormatting } from '../../components/util/Helper';
import { getSchool } from '../../actions/school/school';
import { fetchSchoolCourses } from '../../actions/course/course';

function School() {
  const { schoolId } = useParams();
  const schools = useSelector((state) => state.school.byId);
  const courses = useSelector((state) => state.course);
  const loading = useSelector((state) => state.loading);
  // const history = useHistory();
  const dispatch = useDispatch();
  const tabs = ['Popular', 'Recent'];
  const [tabIndex, setTabIndex] = useState(0);
  const [courseIds, setcourseIds] = useState([]);
  const [courseCnt, setCourseCnt] = useState(statFormatting(0));
  const [noteCnt, setNoteCnt] = useState(statFormatting(0));

  const color = useColorModeValue('gray.100', 'gray.500');

  const handleTabsChange = (index) => {
    setTabIndex(index);
    // tabIndex == 0 ; popular
    // tabIndex == 1 ; recent
  };

  useEffect(() => {
    dispatch(getSchool(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    dispatch(fetchSchoolCourses(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (tabIndex === 0) {
      const filtered = courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10));
      const filteredIds = filtered.sort((a, b) => courses.byId[b].note_cnt - courses.byId[a].note_cnt).flat();
      setcourseIds(filteredIds);
      setNoteCnt(statFormatting(parseInt(filtered.reduce((previous, key) => previous + courses.byId[key].note_cnt, 0), 10)));
    } else { // tabIndex == 1
      const filtered = courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10));
      const filteredIds = filtered.sort((a, b) => (courses.byId[a].last_updated_time < courses.byId[b].last_updated_time ? 1 : -1)).flat();
      setcourseIds(filteredIds);
      setNoteCnt(statFormatting(parseInt(filtered.reduce((previous, key) => previous + courses.byId[key].note_cnt, 0), 10)));
    }
    setCourseCnt(statFormatting(parseInt(courseIds.length, 10)));
  }, [schoolId, courses, tabIndex, courseIds.length]);

  if (!schools[schoolId]) {
    if (loading.school.getSchool || loading.course.getSchoolCourses) {
      return <GeneralLoading />;
    }
    return <NoMatch />;
  }

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">school/</Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge>{ schools[schoolId].name }</BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Courses" stat={courseCnt} />
              {/* 註 stat=schools[schoolId].courseCnt */}
              <StatsCard title="Notes" stat={noteCnt} />
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
              bg={color}
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
            <TabPanel key="Popular">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CourseSection courseIds={courseIds} schoolId={schoolId} />
              </Flex>
            </TabPanel>
            <TabPanel key="Recent">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CourseSection courseIds={courseIds} schoolId={schoolId} />
              </Flex>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default School;
