import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SimpleGrid,
} from '@chakra-ui/react';

import CourseCard from './cards/CourseCard';

function CourseSection(courseIds) {
  // 可能要把底下 [1, 2] 的地方改成接 courseIds
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
  console.log(courseIds);
  return (
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
        {[1, 2].map((id) => (<CourseCard key={id} courseId={id} title={courses[id].name} description={courses[id].no} />))}
      </SimpleGrid>
    </>
  );
}

export default CourseSection;
