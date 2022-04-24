import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';
import Icon from '../icon/index';

import { fetchCourses, fetchClasses } from '../../../actions/admin/course';

export default function ProblemSet({
  classNames, history, location, open, onClose,
}) {
  const { courseId: currentCourseId, classId: currentClassId } = useParams();
  const baseURL = '/problem-set';
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const classes = useSelector((state) => state.classes);
  const courses = useSelector((state) => state.courses);
  const [display, setDisplay] = useState([]); // 0: fold, 1: unfold

  useEffect(() => {
    if (courses.allIds.length > 0) {
      courses.allIds.map((id) => dispatch(fetchClasses(authToken, id)));
    }
  }, [authToken, courses.allIds, dispatch]);

  useEffect(() => {
    dispatch(fetchCourses(authToken));
  }, [authToken, dispatch]);

  useEffect(() => {
    if (currentCourseId !== undefined && currentClassId !== undefined) return;
    const defaultCourseId = courses.allIds.map((courseId) => courses.byId[courseId]).sort((a, b) => a.name.localeCompare(b.name))[0].id;
    if (courses.byId[defaultCourseId]) {
      const relatedClassIds = courses.byId[defaultCourseId].classIds;
      if (relatedClassIds && relatedClassIds.length > 0) {
        const defaultClassId = relatedClassIds.map((classId) => classes.byId[classId]).sort((a, b) => a.name.localeCompare(b.name))[0].id;
        history.push(`${baseURL}/${defaultCourseId}/${defaultClassId}`);
      }
    }
  }, [classes.byId, courses, currentClassId, currentCourseId, history]);

  // has course and class id in url
  useEffect(() => {
    const foldIndex = courses.allIds.map((courseId) => courses.byId[courseId]).sort((a, b) => a.name.localeCompare(b.name)).map((item) => item.id).indexOf(Number(currentCourseId));
    if (foldIndex !== -1) {
      const newList = display.length > 0 ? [...display] : courses.allIds.map(() => 0);
      if (newList[foldIndex] !== 1) {
        newList[foldIndex] = 1;
        setDisplay(newList);
      }
    }
  }, [courses.allIds, courses.byId, currentCourseId, display]);

  const changeFoldCourse = (id) => {
    const newList = [...display];
    newList[id] = !newList[id];
    setDisplay(newList);
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
        <div className={classNames.topSpace} />
        <div>
          {courses.allIds.map((courseId) => courses.byId[courseId])
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name }, orderId) => (
              <div key={id}>
                <div className={classNames.title}>
                  {display[orderId] ? (
                    <Icon.TriangleDown className={classNames.titleIcon} onClick={() => changeFoldCourse(orderId)} />
                  ) : (
                    <Icon.TriangleRight className={classNames.titleIcon} onClick={() => changeFoldCourse(orderId)} />
                  )}
                  <Typography noWrap variant="h4" className={classNames.titleText}>
                    {name}
                  </Typography>
                </div>
                <Divider variant="middle" className={classNames.divider} />
                {Boolean(display[orderId]) && (
                <List>
                  {courses.byId[id].classIds
                    .map((classId) => classes.byId[classId])
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((classItem) => (
                      <ListItem
                        button
                        key={classItem.id}
                        className={
                        location.pathname === `${baseURL}/${id}/${classItem.id}`
                          ? `${classNames.active} ${classNames.item}`
                          : classNames.item
                      }
                        onClick={() => history.push(`${baseURL}/${id}/${classItem.id}`)}
                      >
                        <ListItemIcon className={classNames.itemIcon}>
                          <Icon.Challenge />
                        </ListItemIcon>
                        <ListItemText primary={classItem.name} className={classNames.itemText} />
                      </ListItem>
                    ))}
                </List>
                )}
              </div>
            ))}
        </div>
      </Drawer>
    </div>
  );
}
