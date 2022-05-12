import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

// Components
import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CardSection from '../../components/ui/CardSection';
import NoMatch from '../../components/noMatch';

// Functions and APIs
import { statFormatting } from '../../components/util/Helper';
import { browseNotesByCourse } from '../../actions/note/note';
import { getCourse } from '../../actions/course/course';
import { getSchool } from '../../actions/school/school';

function Course() {
  const { schoolId, courseId } = useParams();
  const schools = useSelector((state) => state.school.byId);
  const courses = useSelector((state) => state.course.byId);
  const history = useHistory();
  const dispatch = useDispatch();
  const color = useColorModeValue('gray.100', 'gray.500');
  const [tabIndex, setTabIndex] = useState(0);
  const [viewType, setViewType] = useState('Popular');
  const [noteType, setNoteType] = useState('Choose Note Type');
  const courseNotes = useSelector((state) => state.courseNotes);
  const tabs = ['Popular', 'Recent'];
  const [popularNoteIds, setPopularNoteIds] = useState([]);
  const [recentNoteIds, setRecentNoteIds] = useState([]);
  const [noteCnt, setNoteCnt] = useState(statFormatting(0));

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleNoteTypeChange = (event) => {
    setNoteType(event.target.value);
  };

  const handleViewTypeChange = (event) => {
    setViewType(event.target.value);
  };

  useEffect(() => {
    switch (noteType) {
      case 'Choose Note Type':
      case 'All': {
        if (viewType === 'Popular') {
          dispatch(browseNotesByCourse(courseId, 'all', 'popular', 0));
        } else {
          dispatch(browseNotesByCourse(courseId, 'all', 'recent', 0));
        }
        break;
      }
      case 'Notability': {
        if (viewType === 'Popular') {
          dispatch(browseNotesByCourse(courseId, 'notability', 'popular', 0));
        } else {
          dispatch(browseNotesByCourse(courseId, 'notability', 'recent', 0));
        }
        break;
      }
      case 'Goodnotes': {
        if (viewType === 'Popular') {
          dispatch(browseNotesByCourse(courseId, 'goodnotes', 'popular', 0));
        } else {
          dispatch(browseNotesByCourse(courseId, 'goodnotes', 'recent', 0));
        }
        break;
      }
      default: {
        break;
      }
    }
  }, [dispatch, courseId, noteType, viewType]);

  useEffect(() => {
    setPopularNoteIds(Object.keys(courseNotes.noteIds).map((key) => courseNotes.noteIds[key]).flat());
  }, [courseNotes]);

  useEffect(() => {
    setRecentNoteIds(Object.keys(courseNotes.noteIds).map((key) => courseNotes.noteIds[key]).flat());
  }, [courseNotes]);

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [courseId, dispatch]);

  useEffect(() => {
    dispatch(getSchool(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (courses[courseId] && courseId === courseNotes.course_id) {
      setNoteCnt(statFormatting(parseInt(courseNotes.total_cnt, 10)));
    }
  }, [courseNotes, courses, courseId]);

  if (!courses[courseId] || !schools[schoolId]) {
    return <NoMatch />;
  }

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">
            school/
            { schools[schoolId].name }
          </Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge>{ courses[courseId].name }</BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Notes" stat={noteCnt} />
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
                    onClick={handleViewTypeChange}
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
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={popularNoteIds} />
              </Flex>
            </TabPanel>
            <TabPanel key="Recent">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={recentNoteIds} />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Course;
