import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch, Route, useHistory, useLocation,
} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
// import { makeStyles, Fab } from '@material-ui/core';
// import { Feedback } from '@material-ui/icons';
import Home from './home';
import Account from './account/index';
import Search from './search/index';
import Campus from './campus';
import Tag from './tag/index';
import Note from './note';
import Header from '../components/ui/Header';
import { getUserInfo } from '../actions/user/auth';
import NoMatch from '../components/noMatch';

// const useStyles = makeStyles(() => ({
//   bugReport: {
//     position: 'fixed',
//     right: '3.5vw',
//     top: 'calc(95vh - 55px)',
//   },
// }));

function Index() {
  // const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      if (localStorage.getItem('id') && localStorage.getItem('token')) {
        if (auth.tokenExpired) {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
        } else {
          dispatch(getUserInfo(localStorage.getItem('id'), localStorage.getItem('token')));
        }
      }
    }
  }, [auth.isAuthenticated, auth.tokenExpired, dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home');
    }
  }, [history, location.pathname]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div>
          <div
            className="layout-content-container layout-content-container-no-sidebar"
          >
            <div className="layout-content">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/account" component={Account} />
                <Route path="/school" component={Campus} />
                <Route path="/search" component={Search} />
                <Route path="/tag/:tagId" component={Tag} />
                <Route path="/note/:noteId" component={Note} />
                <Route path="/" component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
