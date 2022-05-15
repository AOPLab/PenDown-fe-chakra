import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Flex, Center, Button,
} from '@chakra-ui/react';
import MiscCard from '../../components/ui/cards/MiscCard';
import SearchLoading from '../../components/SearchLoading';

import { searchCourses } from '../../actions/common/common';
import NoData from '../../components/util/NoData';

export default function Courses() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const courses = useSelector((state) => state.course.byId);
  const loading = useSelector((state) => state.loading.common.common);

  const onViewMore = () => {
    if (location.pathname !== '/search/courses') {
      history.push('/search/courses');
    }
    dispatch(searchCourses(search.q, search.courses.cur_offset + 12));
  };

  // useEffect(() => {
  //   if (search.q !== null && search.q !== '' && !search.courses.ids[0]) {
  //     dispatch(searchCourses(search.q, 0));
  //   }
  // }, [dispatch, search.courses.ids, search.q]);

  // if (loading.searchCourses) {
  //   return (
  //     <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
  //       <Heading>Courses</Heading>
  //       <SearchLoading />
  //     </Box>
  //   );
  // }

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Courses</Heading>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {search.courses.ids[0] && search.courses.ids[0].length !== 0
            && (
              <SimpleGrid
                columns={{
                  base: 1, md: 2, lg: 2, xl: 3,
                }}
                spacing={{ base: 10, md: 12 }}
                mt={8}
                px={0}
                py={0}
                mx="auto"
              >
                {Object.keys(search.courses.ids).map((key) => search.courses.ids[key].map((id) => (<MiscCard key={id} onClick={() => history.push(`/school/${courses[id].school_id}/course/${id}`)} property={{ title: `${courses[id].no}: ${courses[id].name}`, description: `${courses[id].school_name}`, noteCount: `${courses[id].note_cnt}` }} />)))}
              </SimpleGrid>
            )}
        </Flex>
        { loading.searchCourses && (
          <SearchLoading />
        ) }
        { !loading.searchCourses && (search.courses.totalCnt === 0 || search.courses.totalCnt === null) && <NoData /> }
        {search.courses.totalCnt && search.courses.totalCnt !== 0 && (search.courses.cur_offset + 12) < search.courses.totalCnt
          ? (
            <Center mt={8}>
              <Button
                variant="pendown-primary"
                size="lg"
                onClick={() => onViewMore()}
                tabIndex="-1"
                role="button"
              >
                View More
              </Button>
            </Center>
          ) : (<></>
          )}
      </Box>
    </>
  );
}
