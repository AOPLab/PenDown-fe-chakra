import React from 'react';
import { useParams } from 'react-router-dom';

function School() {
  const { schoolId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>This is school page</h1>
      <h2>
        School ID:
        {' '}
        {schoolId}
      </h2>
    </>
  );
}

export default School;
