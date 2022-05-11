import React from 'react';
import { useSelector } from 'react-redux';
import {
  SimpleGrid,
} from '@chakra-ui/react';

import CourseCard from './cards/CourseCard';

function CourseSection({schoolId, courseIds}) {
  const courses = useSelector((state) => state.course.byId);

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
        {courseIds.map((id) => (<CourseCard key={id} schoolId={schoolId} courseId={id} title={courses[id].name} description={courses[id].no} />))}
      </SimpleGrid>
    </>
  );
}

export default CourseSection;
