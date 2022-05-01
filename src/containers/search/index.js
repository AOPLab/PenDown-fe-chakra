import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  Switch, Route, // useHistory, useLocation,
} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';

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
    </>
  );
}

export default Search;
