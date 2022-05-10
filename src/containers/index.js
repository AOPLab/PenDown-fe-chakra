import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch, Route, useHistory, useLocation,
} from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import Home from './home';
import Account from './account/index';
import Search from './search/index';
import Campus from './campus';
import Tag from './tag/index';
import Note from './note';
import Header from '../components/ui/Header';
import { readSelfAccount } from '../actions/user/user';
import NoMatch from '../components/noMatch';
import Footer from '../components/landing/Footer';

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
          dispatch(readSelfAccount(localStorage.getItem('token')));
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
        <Box pt="20">
          <div>
            <Container maxW={location.pathname === '/search' ? '5xl' : '6xl'}>
              <div className="layout-content">
                <Switch>
                  <Route path="/account" component={Account} />
                  <Route path="/school" component={Campus} />
                  <Route path="/search" component={Search} />
                  <Route path="/tag/:tagId" component={Tag} />
                  <Route path="/note/:noteId" component={Note} />
                  <Route path="/home" component={Home} />
                  <Route path="/" component={NoMatch} />
                </Switch>
              </div>
            </Container>
          </div>
        </Box>
        {location.pathname === '/home' ? <Footer /> : <></>}
      </div>
    </>
  );
}

export default Index;
