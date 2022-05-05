import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton,
} from '@material-ui/core';
import Icon from '../icon/index';

export default function Course({
  classes, history, location, mode, open, onClose,
}) {
  const { courseId, classId } = useParams();
  const courseList = useSelector((state) => state.courses);
  const classList = useSelector((state) => state.classes);
  const baseURL = '/admin/course';
  const [display, setDisplay] = useState('unfold');
  const [display1, setDisplay1] = useState('unfold');

  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [itemList, setItemList] = useState([]);
  const [arrow, setArrow] = useState(null);

  // const dispatch = useDispatch();

  // const authToken = useSelector((state) => state.auth.token);
  // const loading = useSelector((state) => state.loading.admin.course);

  useEffect(() => {
    // console.log(mode, courseId, classId);
    const goBack = (courseid) => {
      history.push(`/admin/course/course/${courseid}/class-list`);
    };

    if (mode === 'class-list') {
      setTitle1('Lesson');
      setTitle2('Contest');
      setItemList(
        courseList.allIds
          .map((id) => courseList.byId[id])
          .map(({ id, type, name }) => {
            switch (type) {
              case 'LESSON':
                return {
                  type,
                  text: name,
                  icon: <Icon.Class />,
                  path: `${baseURL}/course/${id}/class-list`,
                };
              case 'CONTEST':
                return {
                  type,
                  text: name,
                  icon: <Icon.Star />,
                  path: `${baseURL}/course/${id}/class-list`,
                };
              default:
                return {
                  type,
                  text: name,
                  icon: <Icon.Class />,
                  path: `${baseURL}/course/${id}/class-list`,
                };
            }
          })
          .concat([
            {
              type: 'LESSON',
              text: 'Lesson',
              icon: <Icon.Newadd className={classes.addIconItem} />,
              path: `${baseURL}/course/${courseId}/class-list/lesson`,
            },
            {
              type: 'CONTEST',
              text: 'Contest',
              icon: <Icon.Newadd className={classes.addIconItem} />,
              path: `${baseURL}/course/${courseId}/class-list/contest`,
            },
          ]),
      );
    } else if (mode === 'course-setting' && courseList.byId[courseId]) {
      setArrow(
        <IconButton className={classes.arrow} onClick={() => goBack(courseId)}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle1(courseList.byId[courseId].name);
      setItemList([
        {
          text: 'Setting',
          path: `${baseURL}/course/${courseId}/setting`,
          icon: <Icon.Setting />,
        },
      ]);
    } else if (mode === 'class' && courseList.byId[courseId] && classList.byId[classId]) {
      setArrow(
        <IconButton className={classes.arrow} onClick={() => goBack(courseId)}>
          <Icon.ArrowBackRoundedIcon />
        </IconButton>,
      );
      setTitle1(`${courseList.byId[courseId].name} / ${classList.byId[classId].name}`);
      setItemList([
        {
          text: 'Member',
          path: `${baseURL}/class/${courseId}/${classId}/member`,
          icon: <Icon.Member />,
        },
        {
          text: 'Setting',
          path: `${baseURL}/class/${courseId}/${classId}/setting`,
          icon: <Icon.Setting />,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, history, courseList, courseId, classList, classId, mode]);

  const foldLesson = () => {
    setDisplay('fold');
  };

  const unfoldLesson = () => {
    setDisplay('unfold');
  };

  const foldContest = () => {
    setDisplay1('fold');
  };

  const unfoldContest = () => {
    setDisplay1('unfold');
  };

  if (courseList.byId[courseId] === undefined || (classId && classList.byId[classId] === undefined)) {
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
        {mode === 'class-list' ? <div className={classes.topSpace} /> : arrow}
        <div>
          <div className={classes.title}>
            {display === 'unfold' ? (
              <Icon.TriangleDown className={classes.titleIcon} onClick={foldLesson} />
            ) : (
              <Icon.TriangleRight className={classes.titleIcon} onClick={unfoldLesson} />
            )}

            <Typography variant="h4" className={classes.titleText}>
              {title1}
            </Typography>
          </div>
          <Divider variant="middle" className={classes.divider} />
          {display === 'unfold' && (
            <List>
              {itemList.map(
                (item) => (item.type === 'LESSON' || mode !== 'class-list') && (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => history.push(item.path)}
                  className={item.text !== 'Lesson' ? classes.item : classes.addItem}
                >
                  <ListItemIcon
                    className={
                          location.pathname === item.path ? `${classes.active} ${classes.itemIcon}` : classes.itemIcon
                        }
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className={
                          location.pathname === item.path ? `${classes.active} ${classes.itemText}` : classes.itemText
                        }
                  />
                </ListItem>
                ),
              )}
            </List>
          )}

          {mode === 'class-list' && (
            <>
              <div className={classes.title}>
                {display1 === 'unfold' ? (
                  <Icon.TriangleDown className={classes.titleIcon} onClick={foldContest} />
                ) : (
                  <Icon.TriangleRight className={classes.titleIcon} onClick={unfoldContest} />
                )}
                <Typography variant="h4" className={classes.titleText}>
                  {title2}
                </Typography>
              </div>
              <Divider variant="middle" className={classes.divider} />
              {display1 === 'unfold' && (
                <List>
                  {itemList.map(
                    (item) => item.type === 'CONTEST' && (
                    <ListItem
                      button
                      key={item.id}
                      onClick={() => history.push(item.path)}
                      className={item.text !== 'Contest' ? classes.item : classes.addItem}
                    >
                      <ListItemIcon
                        className={
                              location.pathname === item.path
                                ? `${classes.active} ${classes.itemIcon}`
                                : classes.itemIcon
                            }
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        className={
                              location.pathname === item.path
                                ? `${classes.active} ${classes.itemText}`
                                : classes.itemText
                            }
                      />
                    </ListItem>
                    ),
                  )}
                </List>
              )}
            </>
          )}
        </div>
        <div className={classes.bottomSpace} />
      </Drawer>
    </div>
  );
}
