import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function Team({
  classNames, history, location, mode, open, onClose,
}) {
  const { courseId, classId, teamId } = useParams();
  const baseURL = '/my-class';
  const teams = useSelector((state) => state.teams);

  // useEffect(() => {
  //   dispatch(fetchTeams(authToken, classId));
  // }, [dispatch, authToken, classId, courseId]);

  const [display, setDisplay] = useState('unfold');

  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

  useEffect(() => {
    // console.log(teams);
    const goBackToTeam = () => {
      history.push(`${baseURL}/${courseId}/${classId}/team`);
    };

    if (mode === 'detail' && teams.byId[teamId] !== undefined) {
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToTeam}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(teams.byId[teamId].name);
      setItemList([
        {
          text: 'Detail',
          icon: <Icon.Team />,
          path: `${baseURL}/${courseId}/${classId}/team`,
        },
      ]);
    }
  }, [classId, classNames.arrow, courseId, history, mode, teamId, teams]);

  const foldTeam = () => {
    setDisplay('fold');
  };

  const unfoldTeam = () => {
    setDisplay('unfold');
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
        <div className={classNames.title}>
          {display === 'unfold' ? (
            <Icon.TriangleDown className={classNames.titleIcon} onClick={foldTeam} />
          ) : (
            <Icon.TriangleRight className={classNames.titleIcon} onClick={unfoldTeam} />
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
                className={
                  location.pathname.includes(item.path) ? `${classNames.active} ${classNames.item}` : classNames.item
                }
              >
                <ListItemIcon className={classNames.itemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} className={classNames.itemText} />
              </ListItem>
            ))}
          </List>
        )}
        <div className={classNames.bottomSpace} />
      </Drawer>
    </div>
  );
}
