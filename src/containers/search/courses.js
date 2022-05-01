import React from 'react';
import {
  Container, Box, Heading,
} from '@chakra-ui/react';

export default function Courses() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Box pt="20">
        <Container maxW="5xl">
          <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
            <Heading>Courses</Heading>
          </Box>
        </Container>
      </Box>
    </>
  );
}
