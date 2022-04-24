import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  Switch, Route, // useHistory, useLocation,
} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
import School from './school';
import Course from './course';
import NoMatch from '../../components/noMatch';

function Campus() {
//   const history = useHistory();
//   const location = useLocation();
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

  return (
    <Switch>
      <Route exact path="/school/:schoolId/course/:courseId" component={Course} />
      <Route exact path="/school/:schoolId" component={School} />
      <Route path="/" component={NoMatch} />
    </Switch>
  );
}

export default Campus;
