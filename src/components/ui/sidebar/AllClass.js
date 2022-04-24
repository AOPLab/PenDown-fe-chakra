import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function AllClass({
  classNames, history, location, mode, open, onClose,
}) {
  const { courseId } = useParams();
  const baseURL = '/all-class';
  const classes = useSelector((state) => state.classes);
  const courses = useSelector((state) => state.courses);

  const [display, setDisplay] = useState('unfold'); // 0: fold, 1: unfold
  const [arrow, setArrow] = useState(null);
  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    // console.log(courses, classes);
    const goBackToMain = () => {
      history.push('/all-class');
    };
    if (mode === 'main') {
      setTitle('All Courses');
      setItemList(
        courses.allIds
          .map((id) => courses.byId[id])
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, type, name }) => ({
            type,
            text: name,
            icon: <Icon.Class />,
            path: `${baseURL}/${id}`,
          })),
      );
    } else if (
      mode === 'course'
      && courses.byId[courseId] !== undefined
      && courses.byId[courseId].classIds !== undefined
    ) {
      // console.log(courses, classes);
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToMain}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle(courses.byId[courseId].name);
      setItemList(
        courses.byId[courseId].classIds
          .map((id) => classes.byId[id])
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name }) => ({
            type: 'Class',
            text: name,
            icon: <Icon.Challenge />,
            path: `${baseURL}/${courseId}/${id}/challenge`,
          })),
      );
    }
  }, [classNames.arrow, classes.byId, courseId, courses, history, mode]);

  const fold = () => {
    setDisplay('fold');
  };

  const unfold = () => {
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
        {mode === 'main' ? <div className={classNames.topSpace} /> : arrow}
        <div>
          <div className={classNames.title}>
            {display === 'unfold' ? (
              <Icon.TriangleDown className={classNames.titleIcon} onClick={fold} />
            ) : (
              <Icon.TriangleRight className={classNames.titleIcon} onClick={unfold} />
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
