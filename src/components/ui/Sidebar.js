import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Switch, Route, useHistory, useLocation,
} from 'react-router-dom';

import Account from './sidebar/Account';
import Course from './sidebar/Course';
import System from './sidebar/System';
import MyProfile from './sidebar/MyProfile';
import UserProfile from './sidebar/UserProfile';
import MyClass from './sidebar/MyClass';
import Challenge from './sidebar/Challenge';
import PeerReview from './sidebar/PeerReview';
import Submission from './sidebar/Submission';
import Grade from './sidebar/Grade';
import Team from './sidebar/Team';
import AllClass from './sidebar/AllClass';
import AllClassChallenge from './sidebar/AllClassChallenge';
import ProblemSet from './sidebar/ProblemSet';
import ProblemSetChallenge from './sidebar/ProblemSetChallenge';
import Empty from './sidebar/Empty';

const useStyles = makeStyles((theme) => ({
  drawer: {
    top: '55px',
    height: 'calc(100% - 55px)',
    width: '300px',
  },
  drawerPaper: {
    top: '55px',
    height: 'calc(100% - 55px)',
    width: '300px',
    border: 'none',
  },

  topSpace: {
    marginTop: '110px',
  },
  bottomSpace: {
    marginBottom: '40px',
  },
  title: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '6px',
  },

  titleIcon: {
    margin: 'auto 11px auto 24px',
    flexShrink: 0,
    color: theme.palette.black.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  titleText: {
    flex: '5',
    marginRight: '15px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  titleRightIcon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    flex: '1',
    marginLeft: '10px',
    marginRight: '7px',
    width: '18px',
  },
  itemIcon: {
    flex: '1',
    width: '18px',
    color: 'inherit',
    marginLeft: '35px',
    marginRight: '-15px',
  },
  itemText: {
    flex: '8',
    width: '30px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  addIconItem: {
    color: theme.palette.grey.A400,
  },
  addIconItemClicked: {
    color: theme.palette.primary.main,
  },
  active: {
    color: theme.palette.primary.main,
  },

  greyIcon: {
    color: theme.palette.grey.A400,
    marginLeft: '35px',
    marginRight: '21px',
  },
  divider: {
    marginBottom: '16px',
    transition: ['transform', '300ms'],
  },
  arrow: {
    marginTop: '60px',
    marginLeft: '10px',
    marginRight: 'auto',
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    paddingTop: '7.5px',
    paddingBottom: '7.5px',
  },
  addItem: {
    color: theme.palette.grey.A400,
    paddingTop: '7.5px',
    paddingBottom: '7.5px',
  },
  rotate90: {
    transform: 'rotate(90deg)',
  },
  wrapping: {
    width: '30px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default function Sidebar({ open, onClose }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Switch>
      {/* {My Profile} */}
      <Route exact path="/my-profile">
        <MyProfile classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>

      {/* {Other's Profile} */}
      <Route exact path="/user-profile/:accountId">
        <UserProfile
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="main"
        />
      </Route>

      {/* {Admin} */}
      {/* {Course} */}
      <Route exact path="/admin/course/course/">
        {/* for fetchCourse and redirection */}
        <Course
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="class-list"
        />
      </Route>
      <Route path="/admin/course/course/:courseId/class-list">
        <Course
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="class-list"
        />
      </Route>
      <Route path="/admin/course/course/:courseId/setting">
        <Course
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="course-setting"
        />
      </Route>
      <Route path="/admin/course/class/:courseId/:classId/">
        <Course classes={classes} history={history} location={location} open={open} onClose={onClose} mode="class" />
      </Route>
      {/* {Account} */}
      <Route exact path="/admin/account/institute">
        <Account classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/admin/account/institute/:instituteId/setting">
        <Account
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="institute"
        />
      </Route>
      <Route exact path="/admin/account/account">
        <Account classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/admin/account/account/:accountId/setting">
        <Account classes={classes} history={history} location={location} open={open} onClose={onClose} mode="account" />
      </Route>
      <Route exact path="/admin/system/accesslog">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route exact path="/admin/system/announcement">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route exact path="/admin/system/announcement/add">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="create" />
      </Route>
      <Route path="/admin/system/announcement/:announcementId/setting">
        <System
          classes={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="announcement"
        />
      </Route>
      <Route exact path="/admin/system/submitlang">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/admin/system/submitlang/:languageId/setting">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="language" />
      </Route>

      {/* {My Class} */}
      {/* {Challenge} */}
      <Route exact path="/my-class">
        {/* for fetchClass and redirection */}
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge">
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/:problemId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/:problemId/my-submission">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/:problemId/code-submission">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/:problemId/my-submission/:submissionId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission_detail"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/essay/:essayId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/peer-review/:peerReviewId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route path="/my-class/:courseId/:classId/challenge/:challengeId/peer-review/:peerReviewId/receiver-summary">
        <PeerReview
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="peer-review-summary"
        />
      </Route>
      <Route path="/my-class/:courseId/:classId/challenge/:challengeId/peer-review/:peerReviewId/grader-summary">
        <PeerReview
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="peer-review-summary"
        />
      </Route>
      <Route
        exact
        path="/my-class/:courseId/:classId/challenge/:challengeId/peer-review/:peerReviewId/receive/:accountId/:recordId"
      >
        <PeerReview
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="receive"
        />
      </Route>
      <Route
        exact
        path="/my-class/:courseId/:classId/challenge/:challengeId/peer-review/:peerReviewId/review/:accountId/:recordId"
      >
        <PeerReview
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="review"
        />
      </Route>
      <Route exact path="/my-class/:courseId/:classId/challenge/:challengeId/scoreboard/:scoreboardId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      {/* {Submission} */}
      <Route exact path="/my-class/:courseId/:classId/submission">
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/my-class/:courseId/:classId/submission/:submissionId">
        <Submission
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="detail"
        />
      </Route>
      {/* {Grade} */}
      <Route exact path="/my-class/:courseId/:classId/grade">
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/my-class/:courseId/:classId/grade/:studentId">
        <Grade classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="detail" />
      </Route>
      {/* {Team} */}
      <Route exact path="/my-class/:courseId/:classId/team">
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>
      <Route path="/my-class/:courseId/:classId/team/:teamId">
        <Team classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="detail" />
      </Route>
      {/* {Member} */}
      <Route path="/my-class/:courseId/:classId/member">
        <MyClass classNames={classes} history={history} location={location} open={open} onClose={onClose} mode="main" />
      </Route>

      {/* {ALL Class} */}
      {/* {Challenge} */}
      <Route exact path="/all-class">
        {/* for fetchCourse and redirection */}
        <AllClass
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="main"
        />
      </Route>
      <Route exact path="/all-class/:courseId">
        {/* for fetchClass and redirection */}
        <AllClass
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="course"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge">
        <AllClass
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="course"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge/:challengeId">
        <AllClassChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge/:challengeId/:problemId">
        <AllClassChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge/:challengeId/:problemId/my-submission">
        <AllClassChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge/:challengeId/:problemId/code-submission">
        <AllClassChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/all-class/:courseId/:classId/challenge/:challengeId/:problemId/my-submission/:submissionId">
        <AllClassChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission_detail"
        />
      </Route>

      {/* {Problem Set} */}
      <Route exact path="/problem-set">
        <ProblemSet
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId">
        <ProblemSet
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId/challenge/:challengeId">
        <ProblemSetChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId/challenge/:challengeId/:problemId">
        <ProblemSetChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="challenge"
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId/challenge/:challengeId/:problemId/my-submission">
        <ProblemSetChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId/challenge/:challengeId/:problemId/code-submission">
        <ProblemSetChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission"
        />
      </Route>
      <Route exact path="/problem-set/:courseId/:classId/challenge/:challengeId/:problemId/my-submission/:submissionId">
        <ProblemSetChallenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="submission_detail"
        />
      </Route>

      {/* {System} */}
      <Route exact path="/system">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="system" />
      </Route>
      <Route exact path="/system/team">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="system" />
      </Route>
      <Route exact path="/system/accesslog">
        <System classes={classes} history={history} location={location} open={open} onClose={onClose} mode="system" />
      </Route>

      {/* {My Submission} */}
      <Route exact path="/my-submission/:courseId/:classId/:challengeId/:problemId/:submissionId">
        <Challenge
          classNames={classes}
          history={history}
          location={location}
          open={open}
          onClose={onClose}
          mode="my_submission_detail"
        />
      </Route>
      <Route>
        <Empty classNames={classes} open={open} onClose={onClose} />
      </Route>
    </Switch>
  );
}
