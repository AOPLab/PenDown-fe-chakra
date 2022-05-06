import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
import {
  Box, Flex,
} from '@chakra-ui/react';

import SimpleSideBar from '../../components/ui/sidebar/SimpleSideBar';
import People from './people';
import Tags from './tags';
import Schools from './schools';
import Courses from './courses';
import Notes from './notes';
import Templates from './templates';
import All from './all';
import NoMatch from '../../components/noMatch';

function Search() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Box pt="0">
        <SimpleSideBar>
          <Flex direction="column" mt={{ base: '-24', md: '-5' }}>
            <Switch>
              <Route exact path="/search/all" component={All} />
              <Route path="/search/people" component={People} />
              <Route path="/search/tags" component={Tags} />
              <Route path="/search/schools" component={Schools} />
              <Route path="/search/courses" component={Courses} />
              <Route path="/search/notes" component={Notes} />
              <Route path="/search/templates" component={Templates} />
              <Route path="/" component={NoMatch} />
            </Switch>
          </Flex>
        </SimpleSideBar>
      </Box>
    </>
  );
}

export default Search;
