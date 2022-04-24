import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';
import { browseTasksUnderChallenge } from '../../../actions/myClass/challenge';
import { fetchClass, fetchCourse, fetchChallenge } from '../../../actions/common/common';

export default function ProblemSetChallenge({
  classNames, history, location, mode, open, onClose,
}) {
  const {
    courseId, classId, challengeId, problemId, submissionId,
  } = useParams();
  const baseURL = '/problem-set';
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const challenges = useSelector((state) => state.challenges.byId);
  const problems = useSelector((state) => state.problem);

  useEffect(() => {
    dispatch(fetchCourse(authToken, courseId));
    dispatch(fetchClass(authToken, classId));
    dispatch(fetchChallenge(authToken, challengeId));
    dispatch(browseTasksUnderChallenge(authToken, challengeId));
  }, [dispatch, authToken, classId, courseId, challengeId]);

  const [display, setDisplay] = useState(true);
  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

  useEffect(() => {
    const goBackToProblemSet = () => {
      history.push(`${baseURL}/${courseId}/${classId}`);
    };
    const goBackToProblem = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}`);
    };
    const goBackToSubmission = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}/my-submission`);
    };
    if (mode === 'challenge') {
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToProblemSet}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      if (challenges[challengeId]) {
        setTitle(challenges[challengeId].title);
        if (problems.allIds.length !== 0) {
          setItemList(
            [
              {
                text: 'Info',
                icon: <Icon.Info />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}`,
              },
            ].concat(
              challenges[challengeId].problemIds
                .map((id) => problems.byId[id])
                .map(({ id, challenge_label }) => ({
                  text: challenge_label,
                  icon: <Icon.Code />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${id}`,
                })),
            ),
          );
        } else {
          setItemList([
            {
              text: 'Info',
              icon: <Icon.Info />,
              path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}`,
            },
          ]);
        }
      }
    } else if (mode === 'submission' && challenges[challengeId] && problems.byId[problemId]) {
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToProblem}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(`${challenges[challengeId].title} / ${problems.byId[problemId].challenge_label}`);
      setItemList([
        {
          text: 'Code Submission',
          icon: <Icon.Code />,
          path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}/code-submission`,
        },
        {
          text: 'My Submission',
          icon: <Icon.Statistic />,
          path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}/my-submission`,
        },
      ]);
    } else if (mode === 'submission_detail') {
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToSubmission}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(submissionId);
      setItemList([
        {
          text: 'Submission Detail',
          icon: <Icon.Code />,
          path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}/my-submission/${submissionId}`,
        },
      ]);
    }
  }, [
    challengeId,
    challenges,
    classId,
    classNames.arrow,
    courseId,
    history,
    mode,
    problemId,
    problems.allIds.length,
    problems.byId,
    submissionId,
  ]);

  const foldChallenge = () => {
    setDisplay(false);
  };

  const unfoldChallenge = () => {
    setDisplay(true);
  };

  return (
    <div>
      <Drawer
        variant="persistent"
        open={open}
        onClose={onClose}
        className={classNames.drawer}
        anchor="left"
        PaperProps={{ elevation: 5 }}
        classes={{ paper: classNames.drawerPaper }}
      >
        {arrow}
        <div>
          <div className={classNames.title}>
            {display ? (
              <Icon.TriangleDown className={classNames.titleIcon} onClick={foldChallenge} />
            ) : (
              <Icon.TriangleRight className={classNames.titleIcon} onClick={unfoldChallenge} />
            )}
            <Typography variant="h4" className={classNames.titleText}>
              {title}
            </Typography>
          </div>
          <Divider variant="middle" className={classNames.divider} />
          {display && (
            <List>
              {itemList.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => history.push(item.path)}
                  className={
                    location.pathname === item.path ? `${classNames.active} ${classNames.item}` : classNames.item
                  }
                >
                  <ListItemIcon className={classNames.itemIcon}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} className={classNames.itemText} />
                </ListItem>
              ))}
            </List>
          )}
        </div>
        <div className={classNames.bottomSpace} />
      </Drawer>
    </div>
  );
}
