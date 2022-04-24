import React from 'react';
import { useParams } from 'react-router-dom';

function Course() {
  const { schoolId, courseId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>This is course page</h1>
      <h2>
        School ID:
        {' '}
        {schoolId}
      </h2>
      <h2>
        Course ID:
        {' '}
        {courseId}
      </h2>
    </>
  );
}

export default Course;
