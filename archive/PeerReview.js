import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function PeerReview({
  classNames, history, location, mode, open, onClose,
}) {
  const {
    courseId, classId, challengeId, peerReviewId, accountId,
  } = useParams();
  const baseURL = '/my-class';
  const challenges = useSelector((state) => state.challenges.byId);
  const classes = useSelector((state) => state.classes.byId);
  const courses = useSelector((state) => state.courses.byId);
  const userClasses = useSelector((state) => state.user.classes);

  const problems = useSelector((state) => state.problem);
  const essays = useSelector((state) => state.essays);
  const peerReviews = useSelector((state) => state.peerReviews.byId);

  const [display, setDisplay] = useState('unfold');

  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);
  const [TAicon, setTAicon] = useState();

  useEffect(() => {
    const goBackToPeerReviewInfo = () => {
      history.push(`${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}`);
    };

    const goBackToPeerReviewGraderSummary = () => {
      history.push(
        `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/grader-summary`,
      );
    };

    const goBackToPeerReviewReceiverSummary = () => {
      history.push(
        `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/receiver-summary`,
      );
    };

    if (mode === 'peer-review-summary') {
      setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToPeerReviewInfo}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(
        `${challenges[challengeId] === undefined ? 'error' : challenges[challengeId].title} / ${
          peerReviews[peerReviewId] === undefined ? 'error' : peerReviews[peerReviewId].challenge_label
        }`,
      );
      setItemList([
        {
          text: 'Receiver Mode',
          icon: <Icon.Peerreview />,
          path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/receiver-summary`,
        },
        {
          text: 'Grader Mode',
          icon: <Icon.Peerreview />,
          path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/grader-summary`,
        },
      ]);
    } else if (
      mode === 'review'
      && peerReviews[peerReviewId] !== undefined
      && peerReviews[peerReviewId].reviewRecordIds !== undefined
    ) {
      if (userClasses.find((x) => x.class_id === Number(classId))?.role === 'MANAGER') {
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToPeerReviewGraderSummary}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle('Peer Review Detail');
        setItemList(
          peerReviews[peerReviewId].reviewRecordIds
            .sort((a, b) => a - b)
            .map((record, id) => ({
              text: `Peer ${id + 1}`,
              icon: <Icon.Peerreview />,
              path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/review/${accountId}/${record}`,
            })),
        );
      } else {
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToPeerReviewInfo}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle(
          `${challenges[challengeId] === undefined ? 'error' : challenges[challengeId].title} / ${
            peerReviews[peerReviewId] === undefined ? 'error' : peerReviews[peerReviewId].challenge_label
          }`,
        );
        setItemList(
          peerReviews[peerReviewId].reviewRecordIds
            .sort((a, b) => a - b)
            .map((record, id) => ({
              text: `Peer ${id + 1}`,
              icon: <Icon.Peerreview />,
              path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/review/${accountId}/${record}`,
            })),
        );
      }
    } else if (
      mode === 'receive'
      && peerReviews[peerReviewId] !== undefined
      && peerReviews[peerReviewId].receiveRecordIds !== undefined
    ) {
      if (userClasses.find((x) => x.class_id === Number(classId))?.role === 'MANAGER') {
        setTAicon(<Icon.TA className={classNames.titleRightIcon} />);
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToPeerReviewReceiverSummary}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle('Peer Review Detail');
        setItemList(
          peerReviews[peerReviewId].receiveRecordIds
            .sort((a, b) => a - b)
            .map((record, id) => ({
              text: `Peer ${id + 1}`,
              icon: <Icon.Peerreview />,
              path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/receive/${accountId}/${record}`,
            })),
        );
      } else {
        setArrow(
          <IconButton className={classNames.arrow} onClick={goBackToPeerReviewInfo}>
            <Icon.ArrowBackRoundedIcon />
          </IconButton>,
        );
        setTitle('Received Peer Review');
        setItemList(
          peerReviews[peerReviewId].receiveRecordIds
            .sort((a, b) => a - b)
            .map((record, id) => ({
              text: `Peer ${id + 1}`,
              icon: <Icon.Peerreview />,
              path: `${baseURL}/${courseId}/${classId}/challenge/${challengeId}/peer-review/${peerReviewId}/receive/${accountId}/${record}`,
            })),
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeId, challenges, classId, courseId, problems, essays, peerReviews, history, location.pathname, mode]);

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
            </List>
          )}
        </div>
        <div className={classNames.bottomSpace} />
      </Drawer>
    </div>
  );
}
