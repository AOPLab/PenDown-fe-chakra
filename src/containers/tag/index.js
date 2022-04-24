import React from 'react';
import { useParams } from 'react-router-dom';

function Tag() {
  const { tagId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <h1>This is tag page</h1>
      <h2>
        Tag ID:
        {' '}
        {tagId}
      </h2>
    </>
  );
}

export default Tag;
