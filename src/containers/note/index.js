import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

function Note() {
  const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Container maxW="5xl">

        <h1>This is note page</h1>
        <h2>
          Note ID:
          {' '}
          {noteId}
        </h2>
      </Container>
    </>
  );
}

export default Note;
