import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function Challenge({
  classNames, history, location, mode, open, onClose,
}) {
  const {
    courseId, classId, challengeId, problemId, submissionId,
  } = useParams();
  const baseURL = '/my-class';
  const challenges = useSelector((state) => state.challenges.byId);
  const classes = useSelector((state) => state.classes.byId);
  const courses = useSelector((state) => state.courses.byId);
  const userClasses = useSelector((state) => state.user.classes);

  const problems = useSelector((state) => state.problem);
  const essays = useSelector((state) => state.essays);
  const peerReviews = useSelector((state) => state.peerReviews);
  const scoreboards = useSelector((state) => state.scoreboards);

  const [display, setDisplay] = useState('unfold');

  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);
  const [TAicon, setTAicon] = useState();

  const [addTaskPopUp, setAddTaskPopUp] = useState(false);

  useEffect(() => {
    const goBackToChallenge = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge`);
    };
    const goBackToProblem = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}`);
    };
    const goBackToSubmission = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${problemId}/my-submission`);
    };
    const goBackToMySubmission = () => {
      history.push('/my-submission');
    };
    if (mode === 'challenge' && userClasses.length !== 0 && userClasses.find((x) => x.class_id === Number(classId))) {
      // console.log(userClasses);
      if (
        userClasses.find((x) => x.class_id === Number(classId)).role === 'MANAGER'
        && challenges[challengeId] !== undefined
        && challenges[challengeId].problemIds !== undefined
      ) {
        // console.log(problems, essays, userClasses);
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToChallenge}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle(challenges[challengeId].title);

        setItemList(
          [].concat(
            [
              {
                text: 'Setting',
                icon: <Icon.Setting />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/setting`,
              },
              {
                text: 'Statistics',
                icon: <Icon.Statistic />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/statistics`,
              },
              {
                text: 'Info',
                icon: <Icon.Info />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}`,
              },
            ],
            challenges[challengeId].problemIds
              .map((id) => problems.byId[id])
              .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
              .map(({ id, challenge_label }) => ({
                text: challenge_label,
                icon: <Icon.Code />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${id}`,
              })),
            challenges[challengeId].essayIds
              .map((id) => essays.byId[id])
              .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
              .map(({ id, challenge_label }) => ({
                text: challenge_label,
                icon: <Icon.Paper />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/essay/${id}`,
              })),
            challenges[challengeId].peerReviewIds
              .map((id) => peerReviews.byId[id])
              .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
              .map(({ id, challenge_label }) => ({
                text: challenge_label,
                icon: <Icon.Peerreview />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${id}`,
              })),
            challenges[challengeId].scoreboardIds
              .map((id) => scoreboards.byId[id])
              .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
              .map(({ id, challenge_label }) => ({
                text: challenge_label,
                icon: <Icon.Scoreboard />,
                path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/scoreboard/${id}`,
              })),
          ),
        );
      } else if (
        userClasses.find((x) => x.class_id === Number(classId)).role === 'NORMAL'
        && challenges[challengeId] !== undefined
      ) {
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToChallenge}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle(challenges[challengeId].title);
        if (Object.keys(problems).length !== 0 && Object.keys(essays).length !== 0) {
          setItemList(
            [].concat(
              [
                {
                  text: 'Info',
                  icon: <Icon.Info />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}`,
                },
              ],
              challenges[challengeId].problemIds
                .map((id) => problems.byId[id])
                .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
                .map(({ id, challenge_label }) => ({
                  text: challenge_label,
                  icon: <Icon.Code />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/${id}`,
                })),
              challenges[challengeId].essayIds
                .map((id) => essays.byId[id])
                .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
                .map(({ id, challenge_label }) => ({
                  text: challenge_label,
                  icon: <Icon.Paper />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/essay/${id}`,
                })),
              challenges[challengeId].peerReviewIds
                .map((id) => peerReviews.byId[id])
                .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
                .map(({ id, challenge_label }) => ({
                  text: challenge_label,
                  icon: <Icon.Peerreview />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${id}`,
                })),
              challenges[challengeId].scoreboardIds
                .map((id) => scoreboards.byId[id])
                .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
                .map(({ id, challenge_label }) => ({
                  text: challenge_label,
                  icon: <Icon.Scoreboard />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/scoreboard/${id}`,
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
      } else if (
        userClasses.find((x) => x.class_id === Number(classId)).role === 'GUEST'
        && challenges[challengeId] !== undefined
      ) {
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToChallenge}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle(challenges[challengeId].title);
        if (Object.keys(problems).length !== 0 && Object.keys(essays).length !== 0) {
          setItemList(
            [].concat(
              [
                {
                  text: 'Info',
                  icon: <Icon.Info />,
                  path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}`,
                },
              ],
              challenges[challengeId].problemIds
                .map((id) => problems.byId[id])
                .sort((a, b) => a.challenge_label.localeCompare(b.challenge_label))
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
    } else if (
      mode === 'submission'
      && userClasses.length !== 0
      && userClasses.find((x) => x.class_id === Number(classId))
      && challenges[challengeId] !== undefined
      && problems.byId[problemId] !== undefined
    ) {
      if (userClasses.find((x) => x.class_id === Number(classId)).role === 'MANAGER') {
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
      }
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
    } else if (
      mode === 'submission_detail'
      && userClasses.length !== 0
      && userClasses.find((x) => x.class_id === Number(classId))
    ) {
      if (userClasses.find((x) => x.class_id === Number(classId)).role === 'MANAGER') {
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
      }
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
    } else if (mode === 'my_submission_detail') {
      if (userClasses.find((x) => x.class_id === Number(classId))?.role === 'MANAGER') {
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
      }
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToMySubmission}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(submissionId);
      setItemList([
        {
          text: 'Submission Detail',
          icon: <Icon.Code />,
          path: `/my-submission/${courseId}/${classId}/${challengeId}/${problemId}/${submissionId}`,
        },
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    challengeId,
    challenges,
    classId,
    courseId,
    problems,
    essays,
    peerReviews,
    scoreboards,
    history,
    location.pathname,
    mode,
  ]);

  const addTaskItemColor = (popup) => {
    if (popup) {
      return classNames.addIconItemClicked;
    }
    return classNames.addIconItem;
  };

  const foldChallenge = () => {
    setDisplay('fold');
  };

  const unfoldChallenge = () => {
    setDisplay('unfold');
  };

  if (
    (courseId !== undefined && courses[courseId] === undefined)
    || (classId !== undefined && classes[classId] === undefined)
  ) {
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
        />
      </div>
    );
  }

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
            {display === 'unfold' ? (
              <Icon.TriangleDown className={classNames.titleIcon} onClick={foldChallenge} />
            ) : (
              <Icon.TriangleRight className={classNames.titleIcon} onClick={unfoldChallenge} />
            )}
            <Typography variant="h4" className={classNames.titleText}>
              {title}
            </Typography>
            {TAicon}
          </div>
          <Divider variant="middle" className={classNames.divider} />
          {display === 'unfold' && (
            <List>
              {itemList.map((item) => (
                <ListItem
                  button
                  key={item.path}
                  onClick={() => history.push(item.path)}
                  className={
                    location.pathname === item.path ? `${classNames.active} ${classNames.item}` : classNames.item
                  }
                >
                  <ListItemIcon className={classNames.itemIcon}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} className={classNames.itemText} />
                </ListItem>
              ))}
              {mode === 'challenge'
                && userClasses.length !== 0
                && userClasses.find((x) => x.class_id === Number(classId)).role === 'MANAGER'
                && challenges[challengeId] !== undefined && (
                  <ListItem button key="Task" onClick={() => setAddTaskPopUp(true)} className={classNames.item}>
                    <ListItemIcon className={`${classNames.itemIcon} ${addTaskItemColor(addTaskPopUp)}`}>
                      <Icon.AddBox />
                    </ListItemIcon>
                    <ListItemText
                      primary="Task"
                      className={`${classNames.itemText} ${addTaskItemColor(addTaskPopUp)}`}
                    />
                  </ListItem>
              )}
            </List>
          )}
        </div>
        <div className={classNames.bottomSpace} />
      </Drawer>

    </div>
  );
}
