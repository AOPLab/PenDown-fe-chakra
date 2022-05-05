import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { makeStyles } from '@material-ui/core';
import {
  Box, Flex, Spacer,
} from '@chakra-ui/react';

// import SideBar from '../../components/ui/sidebar/index';
import SimpleSideBar from '../../components/ui/sidebar/SimpleSideBar';
import People from './people';
import Tags from './tags';
import Schools from './schools';
import Courses from './courses';
import Notes from './notes';
import Templates from './templates';

export default function All() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Box pt="0">
        {/* <SideBar /> */}
        <SimpleSideBar>
          <Flex direction="column" mt={{ base: '-24', md: '-5' }}>
            {/* <Container maxW="5xl"> */}

            <People />
            <Spacer mt="-4" />
            <Tags />
            <Spacer mt="-4" />
            <Schools />
            <Spacer mt="-4" />
            <Courses />
            <Spacer mt="-4" />
            <Notes />
            <Spacer mt="-4" />
            <Templates />
            {/* </Container> */}
          </Flex>

        </SimpleSideBar>
      </Box>
    </>
  );
}
