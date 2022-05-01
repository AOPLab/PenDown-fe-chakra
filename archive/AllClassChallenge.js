import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function AllClassChallenge({
  classNames, history, location, mode, open, onClose,
}) {
  const {
    courseId, classId, challengeId, problemId, submissionId,
  } = useParams();
  const baseURL = '/all-class';
  const challenges = useSelector((state) => state.challenges.byId);
  const classes = useSelector((state) => state.classes.byId);
  const courses = useSelector((state) => state.courses.byId);

  const problems = useSelector((state) => state.problem);
  const essays = useSelector((state) => state.essays);

  const [display, setDisplay] = useState('unfold');

  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

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
    if (mode === 'challenge') {
      if (challenges[challengeId] !== undefined && challenges[challengeId].problemIds !== undefined) {
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToChallenge}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle(challenges[challengeId].title);
        if (Object.keys(problems).length !== 0 && Object.keys(essays).length !== 0) {
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
      && challenges[challengeId] !== undefined
      && problems.byId[problemId] !== undefined
    ) {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeId, challenges, classId, courseId, problems, essays, history, location.pathname, mode]);

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
          </div>
          <Divider variant="middle" className={classNames.divider} />
          {display === 'unfold' && (
            <List>
              {itemList.map((item) => (
                <ListItem
                  button
                  key={item.id}
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
