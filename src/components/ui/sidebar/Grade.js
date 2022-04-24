import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function Grade({
  classNames, history, location, mode, open, onClose,
}) {
  const { courseId, classId } = useParams();
  const baseURL = '/my-class';

  const [display, setDisplay] = useState('unfold');

  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

  useEffect(() => {
    const goBackToGrade = () => {
      history.push(`${baseURL}/${courseId}/${classId}/grade`);
    };

    if (mode === 'detail') {
      setArrow(
        <IconButton className={classNames.arrow} onClick={goBackToGrade}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle('Grade');
      setItemList([
        {
          text: 'Detail',
          icon: <Icon.Grade />,
          path: `${baseURL}/${courseId}/${classId}/grade`,
        },
      ]);
    }
  }, [classId, classNames.arrow, courseId, history, mode]);

  const foldGrade = () => {
    setDisplay('fold');
  };

  const unfoldGrade = () => {
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
            <Icon.TriangleDown className={classNames.titleIcon} onClick={foldGrade} />
          ) : (
            <Icon.TriangleRight className={classNames.titleIcon} onClick={unfoldGrade} />
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
