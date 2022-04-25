import { Container, Box } from '@chakra-ui/react';
import React from 'react';

function SocialProfile() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <Box borderBottom="2px solid black" pt="20">
      <Container maxW="3xl">
        <h1>This is container about social profile.</h1>
      </Container>
    </Box>
  );
}

export default SocialProfile;
