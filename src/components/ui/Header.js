import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  useDisclosure,
  Center,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Stack,
  Text,
  Input,
  MenuDivider,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell, FiPlus } from 'react-icons/fi';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useGoogleLogout } from 'react-google-login';
import Icon from './icon/index';
import { userLogout } from '../../actions/user/auth';

const clientId = process.env.REACT_APP_OAUTH_ID;
export default function Header() {
  // chakra
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signOut } = useGoogleLogout({ clientId });

  const dispatch = useDispatch();
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
      signOut();
      dispatch(userLogout(history));
    } else {
      history.push(link);
    }
  };

  return (
    <>
      <Box as="header" position="fixed" w="100%" zIndex={200} bg={useColorModeValue('gray.100', 'gray.900')} px={4} borderBottom="2px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box as="button" onClick={() => history.push('/home')}><Icon.SmallLogo /></Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input
                  type="tel"
                  focusBorderColor="primary.400"
                  bg="white"
                  borderColor="black"
                  borderRadius="pendown"
                  placeholder="IM 3007"
                  borderWidth="2px"
                />
              </InputGroup>
              <Select
                defaultValue="Choose Note Type"
                value={noteType}
                focusBorderColor="primary.400"
                bg="white"
                borderColor="black"
                borderWidth="2px"
                borderRadius="pendown"
                onChange={handleNoteTypeChange}
              >
                <option key="Choose Note Type" value="Choose Note Type">Choose Note Type</option>
                <option key="All" value="All">All</option>
                <option key="Notability" value="Notability">Notability</option>
                <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
              </Select>
            </Stack>
          </Flex>

          <Flex alignItems="center">
            {auth.isAuthenticated
              ? (
                <Stack direction="row" spacing={4}>
                  <Button size="lg" fontSize="24px" variant="pendown-round">
                    <FiPlus />
                  </Button>
                  <Button size="lg" fontSize="24px" variant="pendown-round">
                    <FiBell />
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded="full"
                      variant="link"
                      cursor="pointer"
                      border="none"
                      minW={0}
                    >
                      <Avatar
                        border="2px solid black"
                        size="md"
                        src={`https://source.boringavatars.com/beam/40/${user.username}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
                      />
                    </MenuButton>
                    <MenuList alignItems="center">
                      <br />
                      <Center>
                        <Avatar
                          border="2px solid black"
                          size="xl"
                          src={`https://source.boringavatars.com/beam/40/${user.username}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
                        />
                      </Center>
                      <br />
                      <Center>
                        <Text fontWeight="bold">{user.username}</Text>
                      </Center>
                      <br />
                      <MenuDivider />
                      {menuList.map((item, index) => (
                        <>
                          {index === 2 ? <MenuDivider /> : <></>}
                          <MenuItem
                            key={item.link}
                            tabIndex={item.link}
                            role="button"
                            onClick={() => goto(item.link)}
                            onKeyDown={() => goto(item.link)}
                          >
                            {item.title}
                          </MenuItem>
                        </>
                      ))}
                    </MenuList>
                  </Menu>
                </Stack>
              )
              : (
                <Button
                  variant="pendown-primary"
                  size="md"
                  onClick={() => history.push('/login')}
                  onKeyDown={() => history.push('/login')}
                  tabIndex="-1"
                  role="button"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Sign in
                </Button>
              )}

          </Flex>
        </Flex>
      </Box>
    </>
  );
}

// <AppBar className={classes.appbar} elevation={0}>
// {/* <Toolbar className={classes.toolbar}>
// <div className={classes.logo}>
//   <Icon.SmallLogo className={classes.logoContent} onClick={() => history.push('/home')} />
//   {/* {auth.isAuthenticated ? <Icon.SmallLogo className={classes.logoContent} onClick={() => history.push('/home')} />
//     : <Icon.BigLogo className={classes.logoContent} onClick={() => history.push('/home')} />} */}
// </div>
// {theme.headerStyle.hasIndicator && <div className={classes.itemActiveIndicator} style={indicatorStyles} />}

// <div className={classes.center}>
//   <Paper
//     component="form"
//     sx={{
//       p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,
//     }}
//   >
//     <Icon.SearchIcon className={classes.searchIcon} />
//     <InputBase
//       sx={{ ml: 1, flex: 1 }}
//       className={classes.searchCol}
//       placeholder="Search"
//       inputProps={{ 'aria-label': 'search' }}
//     />
//   </Paper>
//   <Select
//     defaultValue="Choose Note Type"
//     value={noteType}
//     onChange={handleNoteTypeChange}
//     input={<OutlinedInput />}
//     className={classes.selectCol}
//   >
//     <MenuItem key="Choose Note Type" value="Choose Note Type">Choose Note Type</MenuItem>
//     <MenuItem key="All" value="All">All</MenuItem>
//     <MenuItem key="Notability" value="Notability">Notability</MenuItem>
//     <MenuItem key="Goodnotes" value="Goodnotes">Goodnotes</MenuItem>
//   </Select>
//   <Icon.Search className={classes.searchButton} onClick={handleSubmit} />
// </div>

// <div className={classes.right}>
//   {auth.isAuthenticated
//     ? (
//       <>
//         <div
//           className={classes.notificationContainer}
//           role="button"
//           tabIndex="0"
//         >
//           <Icon.AddButton onClick={clickAddNote} className={classes.notificationIcon} />
//           <Icon.Notification className={classes.notificationIcon} />
//         </div>
//         <div
//           className={classes.userContainer}
//           onClick={toggleUser}
//           onKeyDown={toggleUser}
//           role="button"
//           tabIndex="-1"
//         >
//           <button type="button" className={classes.userButton} ref={userButtonRef}>
//             <Typography
//               variant="h6"
//               className={userButtonActive && !theme.headerStyle.hasIndicator ? classes.active : null}
//             >
//               <ResizeObserver onReflow={(rect) => setUserButtonRect(rect)} />
//               {user.username}
//             </Typography>
//           </button>
//           {userDropdown && (
//           <div className={classes.userDropdownContent} ref={userRef}>
//             {menuList.map((item) => (
//               <span
//                 key={item.link}
//                 tabIndex={item.link}
//                 role="button"
//                 onClick={() => goto(item.link)}
//                 onKeyDown={() => goto(item.link)}
//               >
//                 {item.title}
//               </span>
//             ))}
//           </div>
//           )}
//         </div>
//       </>
//     )
//     : (
//       <div
//         className={classes.userContainer2}
//         onClick={() => history.push('/login')}
//         onKeyDown={() => history.push('/login')}
//         role="button"
//         tabIndex="-1"
//       >
//         <button type="button" className={classes.userButton} ref={userButtonRef}>
//           <Typography
//             variant="h6"
//             className={userButtonActive && !theme.headerStyle.hasIndicator ? classes.active : null}
//           >
//             <ResizeObserver onReflow={(rect) => setUserButtonRect(rect)} />
//             Sign in
//           </Typography>
//         </button>
//       </div>
//     )}
// </div>
// </Toolbar>
// </AppBar> */}
