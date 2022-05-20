import React from 'react';
import { useSelector } from 'react-redux';
import {
  SimpleGrid,
} from '@chakra-ui/react';
import SearchLoading from '../SearchLoading';

import CourseCard from './cards/CourseCard';

function CourseSection({ schoolId, courseIds }) {
  const courses = useSelector((state) => state.course.byId);
  const loading = useSelector((state) => state.loading.common.common);

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1, md: 1, lg: 2, xl: 2,
        }}
        spacing={{ base: 10, md: 12 }}
        py={4}
        pb={10}
        mx="auto"
      >
        {courseIds.map((id) => (
          <CourseCard
            key={id}
            schoolId={schoolId}
            courseId={id}
            title={courses[id].name}
            description={courses[id].no}
            noteCount={`${courses[id].note_cnt}`}
          />
        ))}
      </SimpleGrid>
      { loading.searchCourses && (
      <SearchLoading />
      ) }
    </>
  );
}

export default CourseSection;
