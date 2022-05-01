import React from 'react';
import {
  Box, Heading, Container,
} from '@chakra-ui/react';
// import SideBar from '../../components/ui/sidebar/index';
import SimpleSideBar from '../../components/ui/sidebar/SimpleSideBar';

function Search() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Box pt="20">
        {/* <SideBar /> */}
        <SimpleSideBar>
          <Box>
            <Container maxW="5xl">

              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>People</Heading>
              </Box>
              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>Tags</Heading>
              </Box>
              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>Schools</Heading>
              </Box>
              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>Courses</Heading>
              </Box>
              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>Notes</Heading>
              </Box>
              <Box borderWidth="4px" border="3px black" borderStyle="solid" borderRadius="pendown" h="40" p="8" my="2">
                <Heading>Templates</Heading>
              </Box>
            </Container>
          </Box>

        </SimpleSideBar>
      </Box>
    </>
  );
}

export default Search;
