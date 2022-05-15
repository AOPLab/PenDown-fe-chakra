import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CourseSection from '../../components/ui/CourseSection';
import { statFormatting } from '../../components/util/Helper';
import { getSchool } from '../../actions/school/school';
import { fetchSchoolCourses } from '../../actions/course/course';

function School() {
  const { schoolId } = useParams();
  // const courseIds = [212, 213]; // 讓這個變成皆該學校有的課程
  const schools = useSelector((state) => state.school.byId);
  const courses = useSelector((state) => state.course);
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const tabs = ['Popular', 'Recent'];
  const [tabIndex, setTabIndex] = useState(0);
  const [courseIds, setcourseIds] = useState([]); // courseIds 最後要呈現的 要排序與篩選
  const [courseFiltered, filterCourse] = useState({});
  const [courseCnt, setCourseCnt] = useState(statFormatting(0));
  const [noteCnt, setNoteCnt] = useState(statFormatting(0));
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
      const filtered = courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10)).sort((a, b) => courses.byId[a].note_cnt - courses.byId[b].note_cnt);
      // console.log('filtered', filtered);
      setcourseIds(filtered);
    } else { // tabIndex == 1
      // setcourseIds(Object.keys(courses).map((key) => courses[key].id).flat());
      const filtered = courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10)).sort((a, b) => courses.byId[a].last_updated_time - courses.byId[b].last_updated_time);
      // console.log('filtered', filtered);
      setcourseIds(filtered);
    }
    setCourseCnt(statFormatting(parseInt(courseIds.length, 10)));
    // setNoteCnt(statFormatting(parseInt(Object.keys(courses.byIds).reduce((previous, key) => previous + courses.byId[key].note_cnt, 0), 10)));
    setNoteCnt(statFormatting(parseInt(courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10)).reduce((previous, key) => previous + courses.byId[key].note_cnt, 0), 10)));
  }, [schoolId, courses, tabIndex, courseIds.length]);

  // const objectArraySort = function (keyName) { // const???
  //   return function (objectN, objectM) {
  //     const valueN = objectN[keyName];
  //     const valueM = objectM[keyName];
  //     if (valueN < valueM) return 1;
  //     if (valueN < valueM) return -1;
  //     return 0;
  //   };
  // };

  useEffect(() => {
    // const filterBySchool = Object.keys(courses).filter((item) => item.school_id === schoolId);
    // console.log('filterByschool', Object.keys(courses).filter((key) => courses[key].school_id === schoolId));
    // console.log('courses', courses);
    // console.log(Object.values(courses).filter((key) => courses[key].school_id === parseInt(schoolId, 10))); // Object.values(courses) == array of object
    // console.log('schoolId type', typeof (schoolId));
    // console.log('school_id type', typeof (courses[209].school_id));
    // if (courses[209].school_id === parseInt(schoolId, 10)) {
    //   console.log('SAVE');
    // }

    // filterCourse(Object.values(courses).filter((el) => el.school_id === schoolId));
    // const newArray = courses.filter((el) => el.school_id === schoolId);
    // console.log(Object.values(courses).flat());
    // Object.keys(courses).sort(objectArraySort('note_cnt'));
    // const obj = [];
    // filterCourse(Object.keys(courses).filter((value, index, arr) => value.school_id === parseInt(schoolId, 10)));
    // .reduce((obj, key) => {
    //   obj[key] = courses[key];
    //   return obj;
    // }, {});
    // console.log('filtered', courseFiltered);

    // const results = Object.keys(courses).reduce((acc, val) => {
    //   if (courses[val].school_id === parseInt(schoolId, 10)) acc[val] = courses[val];
    //   return acc;
    // }, {});
    // console.log('result', results);
    // const results2 = Object.keys(results).sort((a, b) => results[a].note_cnt - results[b].note_cnt);
    // console.log('results2', results2);
    // const filtered = courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10)).sort((a, b) => courses.byId[a].note_cnt - courses.byId[b].note_cnt);
    // console.log('filtered', filtered);
  }, [schoolId, courses, courseFiltered]);

  // useEffect(() => {
  //   if (courses) {
  // const sum = courses.reduce((prev, cur) => cur.note_cnt + prev, 0);
  // setNoteCnt(statFormatting(parseInt(sum, 10)));
  //   }
  // }, [courses, school, schoolId]);

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
