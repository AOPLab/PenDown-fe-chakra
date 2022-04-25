import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

function PersonalProfile() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <Box borderBottom="2px solid black" pt="20">
      <Container maxW="3xl">
        <Heading fontWeight={900}>This is container about personal profile.</Heading>
      </Container>
    </Box>
  );
}

export default PersonalProfile;
