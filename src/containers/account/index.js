import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  Switch, Route, // useHistory, useLocation,
} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
import SocialProfile from './socialProfile';
import PersonalProfile from './profile';
import AccountSetting from './setting';
import Payment from './payment';
import NoMatch from '../../components/noMatch';

function Account() {
//   const history = useHistory();
//   const location = useLocation();
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

  return (
    <Switch>
      <Route exact path="/account/my-profile" component={PersonalProfile} />
      <Route path="/account/my-profile/setting" component={AccountSetting} />
      <Route path="/account/payment" component={Payment} />
      <Route path="/account/:accountId" component={SocialProfile} />
      <Route path="/" component={NoMatch} />
    </Switch>
  );
}

export default Account;
