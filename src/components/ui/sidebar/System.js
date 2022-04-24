import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function System({
  classes, history, location, mode, open, onClose,
}) {
  const { announcementId, languageId } = useParams();
  const announcementList = useSelector((state) => state.announcements);
  const languageList = useSelector((state) => state.submitLangs);
  const baseURL = '/admin/system';
  const [display, setDisplay] = useState('unfold');
  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

  useEffect(() => {
    // console.log(instituteId, accountId);

    const goBackToAnnouncement = () => {
      history.push('/admin/system/announcement');
    };

    const goBackToLanguage = () => {
      history.push('/admin/system/submitlang');
    };

    if (mode === 'main') {
      setTitle('System');
      setItemList([
        {
          text: 'Access Log',
          icon: <Icon.Paper />,
          path: `${baseURL}/accesslog`,
        },
        {
          text: 'Announcement',
          icon: <Icon.Bell />,
          path: `${baseURL}/announcement`,
        },
        {
          text: 'Submission Language',
          icon: <Icon.Code />,
          path: `${baseURL}/submitlang`,
        },
      ]);
    } else if (mode === 'create') {
      setArrow(
        <IconButton className={classes.arrow} onClick={goBackToAnnouncement}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle('(Draft)');
      setItemList([
        {
          text: 'Setting',
          path: `${baseURL}/announcement/add`,
          icon: <Icon.Setting />,
        },
      ]);
    } else if (mode === 'announcement' && announcementList.byId[announcementId]) {
      setArrow(
        <IconButton className={classes.arrow} onClick={goBackToAnnouncement}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(announcementList.byId[announcementId].title);
      setItemList([
        {
          text: 'Setting',
          path: `${baseURL}/announcement/${announcementId}/setting`,
          icon: <Icon.Setting />,
        },
      ]);
    } else if (mode === 'language' && languageList.byId[languageId]) {
      setArrow(
        <IconButton className={classes.arrow} onClick={goBackToLanguage}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(`${languageList.byId[languageId].name} ${languageList.byId[languageId].version}`);
      setItemList([
        {
          text: 'Setting',
          path: `${baseURL}/submitlang/${languageId}/setting`,
          icon: <Icon.Setting />,
        },
      ]);
    } else if (mode === 'system') {
      if (location.pathname === '/system') {
        history.push('/system/team');
      }
      setTitle('System');
      setItemList([
        {
          text: 'Develop Team',
          path: '/system/team',
          icon: <Icon.DevTeam />,
        },
        // {
        //   text: 'Access Log',
        //   path: '/system/accesslog',
        //   icon: <Icon.Paper />,
        // },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, history, mode, announcementList, languageList, announcementId, languageId]);

  const foldSystem = () => {
    setDisplay('fold');
  };

  const unfoldSystem = () => {
    setDisplay('unfold');
  };

  if (
    (announcementId !== undefined && announcementList.byId[announcementId] === undefined)
    || (languageId !== undefined && languageList.byId[languageId] === undefined)
  ) {
    return (
      <div>
        <Drawer
          variant="persistent"
          open={open}
          onClose={onClose}
          className={classes.drawer}
          anchor="left"
          PaperProps={{ elevation: 5 }}
          classes={{ paper: classes.drawerPaper }}
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
        className={classes.drawer}
        anchor="left"
        PaperProps={{ elevation: 5 }}
        classes={{ paper: classes.drawerPaper }}
      >
        {mode === 'main' ? <div className={classes.topSpace} /> : arrow}
        {mode === 'system' && <div className={classes.topSpace} />}
        <div className={classes.title}>
          {display === 'unfold' ? (
            <Icon.TriangleDown className={classes.titleIcon} onClick={foldSystem} />
          ) : (
            <Icon.TriangleRight className={classes.titleIcon} onClick={unfoldSystem} />
          )}
          <Typography variant="h4" className={classes.titleText}>
            {title}
          </Typography>
        </div>
        <Divider variant="middle" className={classes.divider} />
        {display === 'unfold' && (
          <List>
            {itemList.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => history.push(item.path)}
                className={location.pathname === item.path ? `${classes.active} ${classes.item}` : classes.item}
              >
                <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} className={classes.itemText} />
              </ListItem>
            ))}
          </List>
        )}
        <div className={classes.bottomSpace} />
      </Drawer>
    </div>
  );
}
