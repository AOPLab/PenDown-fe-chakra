import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  makeStyles, Typography, AppBar, Toolbar, useTheme, Paper, InputBase, MenuItem, Select, OutlinedInput,
} from '@material-ui/core';
import ResizeObserver from 'react-resize-observer';
import Icon from './icon/index';
import { userLogout } from '../../actions/user/auth';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '40px',
    height: '40px',
    display: 'block',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: '1',
    zIndex: '-1',
  },
  logo: {
    '&:hover': {
      cursor: 'pointer',
    },
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[0],
    margin: '0 40px 0 30px',
  },
  noLogo: {
    marginLeft: '50px',
  },
  appbar: {
    left: 0,
    right: 'auto',
    minHeight: '65px',
    height: '65px',
    background: theme.headerStyle.background,
    minWidth: 'max-content',
    borderBottom: '3px black solid',
  },
  toolbar: {
    minHeight: '65px',
    height: '65px',
    paddingLeft: '0px',
    justifyContent: 'space-between',
  },

  // header left
  item: {
    marginRight: '50px',
    '&:hover': {
      cursor: 'pointer',
    },
    '@media (max-width: 760px)': {
      marginRight: '20px',
    },
    color: theme.headerStyle.color,
  },

  itemActiveIndicator: {
    position: 'absolute',
    top: 52,
    height: 3,
    borderRadius: '3px 3px 0px 0px',
    backgroundColor: theme.headerStyle.color,
    transition: '0.3s',
    '-webkit-transform': 'translateZ(0)',
  },

  // header center
  center: {
    display: 'flex',
  },
  searchCol: {
    borderRadius: '10px',
    width: '20vw',
  },
  searchIcon: {
    marginLeft: '10px',
    marginRight: '10px',
    verticalAlign: 'middle',
  },
  selectCol: {
    marginLeft: '10px',
    width: '16vw',
    minWidth: '100px',
  },
  searchButton: {
    marginLeft: '5px',
    height: '45px',
    minHeight: '45px',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  // header right
  right: {
    marginRight: 0,
    paddingTop: 5,
    paddingLeft: 15,
  },
  notificationContainer: {
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  notificationIcon: {
    width: '35px',
    margin: '5px 5px 5px 5px',
  },
  userContainer: {
    position: 'relative',
    display: 'inline-block',
    marginRight: '15px',
    bottom: '22px',
  },
  userContainer2: {
    position: 'relative',
    display: 'inline-block',
    marginRight: '20px',
  },
  userButton: {
    backgroundColor: 'transparent',
    color: theme.headerStyle.color,
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  active: {
    textDecoration: 'none',
    color: theme.headerStyle.activeColor, // temporary
  },
  userDropdownContent: {
    position: 'fixed',
    backgroundColor: theme.palette.grey.white,
    top: '48px',
    right: '30px',
    minWidth: '140px',
    zIndex: '1',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    '& span': {
      color: theme.palette.black.dark, // theme.palette.black.main,
      padding: '12px',
      textDecoration: 'none',
      textAlign: 'center',
      display: 'block',
      '&:nth-child(1)': {
        borderRadius: '10px 10px 0 0',
      },
      '&:last-child': {
        borderRadius: '0 0 10px 10px',
      },
    },
    '& span:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.grey.A100,
    },
  },
  hide: {
    display: 'none',
  },
  logoContent: {
    width: 'auto',
    height: '40px',
  },
}));

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  // const systemLoading = useSelector((state) => state.loading.admin.system);
  const [menuList] = useState([
    { title: 'View Profile', link: '/account/my-profile' },
    { title: 'Settings', link: '/account/my-profile/setting' },
    { title: 'Logout', link: '/logout' },
  ]);
  const [userDropdown, setUserDropdown] = useState(false);
  const [userAlreadyClose, setUserAlreadyClose] = useState(false);

  const [activeHeaderItemIndex] = useState(0);
  const [userButtonActive, setUserButtonActive] = useState(false);

  const headerItemRef = useRef([]);
  const userRef = useRef(null);
  const userButtonRef = useRef(null);
  const [userButtonRect, setUserButtonRect] = useState({ left: 0, width: 0 });

  const [noteType, setNoteType] = useState('Choose Note Type');

  const indicatorStyles = useMemo(
    () => ({
      left:
        activeHeaderItemIndex !== undefined && activeHeaderItemIndex !== -1
          ? headerItemRef.current[activeHeaderItemIndex]?.offsetLeft
          : userButtonRect.left,
      width:
        activeHeaderItemIndex !== undefined && activeHeaderItemIndex !== -1
          ? headerItemRef.current[activeHeaderItemIndex]?.offsetWidth
          : userButtonRect.width,
    }),
    [activeHeaderItemIndex, userButtonRect.left, userButtonRect.width],
  );

  useEffect(() => {
    setUserButtonActive(location.pathname === '/account/my-profile' || location.pathname === '/account/my-profile/setting');
  }, [location.pathname]);

  const handleUserClickOutside = (event) => {
    if (userRef.current && !userRef.current.contains(event.target)) {
      setUserAlreadyClose(true);
      setUserDropdown(false);
      setTimeout(() => setUserAlreadyClose(false), 300);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleUserClickOutside, true);
    return () => {
      document.removeEventListener('click', handleUserClickOutside, true);
    };
  });

  const toggleUser = () => {
    if (!userAlreadyClose) {
      setUserDropdown(true);
    }
    setUserAlreadyClose(false);
  };

  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const handleSubmit = () => {
    console.log('start search');
  };

  const clickAddNote = () => {
    console.log('add note');
  };

  const goto = (link) => {
    if (link === '/logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      dispatch(userLogout(history));
    } else {
      history.push(link);
    }
  };

  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <Icon.SmallLogo className={classes.logoContent} onClick={() => history.push('/home')} />
            {/* {auth.isAuthenticated ? <Icon.SmallLogo className={classes.logoContent} onClick={() => history.push('/home')} />
              : <Icon.BigLogo className={classes.logoContent} onClick={() => history.push('/home')} />} */}
          </div>
          {theme.headerStyle.hasIndicator && <div className={classes.itemActiveIndicator} style={indicatorStyles} />}

          <div className={classes.center}>
            <Paper
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,
              }}
            >
              <Icon.SearchIcon className={classes.searchIcon} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                className={classes.searchCol}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Paper>
            <Select
              defaultValue="Choose Note Type"
              value={noteType}
              onChange={handleNoteTypeChange}
              input={<OutlinedInput />}
              className={classes.selectCol}
            >
              <MenuItem key="Choose Note Type" value="Choose Note Type">Choose Note Type</MenuItem>
              <MenuItem key="All" value="All">All</MenuItem>
              <MenuItem key="Notability" value="Notability">Notability</MenuItem>
              <MenuItem key="Goodnotes" value="Goodnotes">Goodnotes</MenuItem>
            </Select>
            <Icon.Search className={classes.searchButton} onClick={handleSubmit} />
          </div>

          <div className={classes.right}>
            {auth.isAuthenticated
              ? (
                <>
                  <div
                    className={classes.notificationContainer}
                    role="button"
                    tabIndex="0"
                  >
                    <Icon.AddButton onClick={clickAddNote} className={classes.notificationIcon} />
                    <Icon.Notification className={classes.notificationIcon} />
                  </div>
                  <div
                    className={classes.userContainer}
                    onClick={toggleUser}
                    onKeyDown={toggleUser}
                    role="button"
                    tabIndex="-1"
                  >
                    <button type="button" className={classes.userButton} ref={userButtonRef}>
                      <Typography
                        variant="h6"
                        className={userButtonActive && !theme.headerStyle.hasIndicator ? classes.active : null}
                      >
                        <ResizeObserver onReflow={(rect) => setUserButtonRect(rect)} />
                        {user.username}
                      </Typography>
                    </button>
                    {userDropdown && (
                    <div className={classes.userDropdownContent} ref={userRef}>
                      {menuList.map((item) => (
                        <span
                          key={item.link}
                          tabIndex={item.link}
                          role="button"
                          onClick={() => goto(item.link)}
                          onKeyDown={() => goto(item.link)}
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                    )}
                  </div>
                </>
              )
              : (
                <div
                  className={classes.userContainer2}
                  onClick={() => history.push('/login')}
                  onKeyDown={() => history.push('/login')}
                  role="button"
                  tabIndex="-1"
                >
                  <button type="button" className={classes.userButton} ref={userButtonRef}>
                    <Typography
                      variant="h6"
                      className={userButtonActive && !theme.headerStyle.hasIndicator ? classes.active : null}
                    >
                      <ResizeObserver onReflow={(rect) => setUserButtonRect(rect)} />
                      Sign in
                    </Typography>
                  </button>
                </div>
              )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
