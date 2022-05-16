import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  HStack,
  MenuDivider,
  MenuItem,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiPlus, FiBell } from 'react-icons/fi';
import Icon from './icon/index';
import { userLogout } from '../../actions/user/auth';
import SearchField from './SearchField';
import NoteUpload from './NoteUpload';
import { avatarSrc } from '../util/Helper';

export default function Header() {
  // chakra
  const { colorMode, toggleColorMode } = useColorMode();

  // modal trigger
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const btnRef = React.useRef();
  // modal trigger end

  const mobileNav = useDisclosure();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  // const systemLoading = useSelector((state) => state.loading.admin.system);
  const [menuList] = useState([
    { id: 1, title: 'View Profile', link: '/account/my-profile' },
    { id: 2, title: 'Settings', link: '/account/my-profile/setting' },
    { id: 3, title: 'Logout', link: '/logout' },
  ]);

  const [activeHeaderItemIndex] = useState(0);
  const [userButtonActive, setUserButtonActive] = useState(false);

  const headerItemRef = useRef([]);
  const [userButtonRect, setUserButtonRect] = useState({ left: 0, width: 0 });

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

  const goto = (link) => {
    if (link === '/logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      if (window.gapi) {
        const auth2 = window.gapi.auth2.getAuthInstance();

        if (auth2 != null) {
          auth2.signOut().then(
            auth2.disconnect(),
          );
        }
      }

      dispatch(userLogout(history));
    } else {
      history.push(link);
    }
  };

  return (
    <>
      <Box as="header" position="fixed" w="100%" zIndex={200} bg={useColorModeValue('grayAlpha.600', 'blackAlpha.800')} px={4} py={1} borderBottom="2px" css={{ backdropFilter: 'saturate(180%) blur(20px)' }}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box as="button" variant="pendown" onClick={() => history.push('/home')} borderRadius="pendown" _hover={{ shadow: 'pendown', transition: '.3s ease' }} transition=".3s ease"><Icon.SmallLogo /></Box>

          <Flex
            alignItems="center"
            // flexGrow={1}
            // mx={{
            //   base: 'none', sm: '10', md: '10', lg: '20', xl: '200',
            // }}
          >
            <SearchField />
          </Flex>

          <Flex alignItems="center">
            <HStack
              spacing={1}
              // ml={2}
              color="brand.500"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              {auth.isAuthenticated
                ? (
                  <Stack direction="row" spacing={2}>
                    <Button size="lg" fontSize="24px" variant="pendown-round" ref={btnRef} onClick={onOpen}>
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
                        _hover={{ boxShadow: '0px 4px 0px #18191F' }}
                        minW={0}
                      >
                        <Avatar
                          border="2px solid black"
                          size="md"
                          // src={`https://source.boringavatars.com/beam/40/${user.username}?colors=00C6AE,FFBD12,FF89BB,F95A2C,1947E5`}
                          src={avatarSrc(user.username)}
                        />
                      </MenuButton>
                      <MenuList alignItems="center">
                        {/* <br />
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
                        <MenuDivider /> */}
                        {menuList.map((item, index) => (
                          <>
                            {index === 2 ? <MenuDivider key="divider" /> : <></>}
                            <MenuItem
                              key={item.link}
                              tabIndex={item.id}
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
                    size="lg"
                    onClick={() => history.push('/login')}
                    onKeyDown={() => history.push('/login')}
                    tabIndex="-1"
                    role="button"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Sign in
                  </Button>
                )}
            </HStack>
            <Box display={{ base: 'inline-flex', md: 'none' }} ml={2}>

              {auth.isAuthenticated
                ? (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded="full"
                      variant="link"
                      cursor="pointer"
                      border="none"
                      _hover={{ boxShadow: '0px 4px 0px #18191F' }}
                      minW={0}
                    >
                      <Avatar
                        border="2px solid black"
                        variant="pendown-navbar"
                        size="md"
                        // src={`https://source.boringavatars.com/beam/40/${user.username}?colors=00C6AE,FFBD12,FF89BB,F95A2C,1947E5`}
                        src={avatarSrc(user.username)}
                      />
                    </MenuButton>
                    <MenuList alignItems="center">
                      {/* <br />
                      <Center>
                        <Avatar
                          border="2px solid black"
                          variant="pendown-navbar"
                          size="xl"
                          src={`https://source.boringavatars.com/beam/40/${user.username}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
                        />
                      </Center>
                      <br />
                      <Center>
                        <Text fontWeight="bold">{user.username}</Text>
                      </Center>
                      <br />
                      <MenuDivider /> */}
                      <MenuItem
                        key="/"
                        tabIndex="/"
                        role="button"
                        // onClick={() => goto('/')}
                        onClick={onOpen}
                        // onKeyDown={() => goto('/')}
                      >
                        Add note
                      </MenuItem>
                      <MenuItem
                        key="/"
                        tabIndex="/"
                        role="button"
                        onClick={() => goto('/')}
                        onKeyDown={() => goto('/')}
                      >
                        Notifications
                      </MenuItem>
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
                )
                : (
                  <Button
                    variant="pendown-primary"
                    size="lg"
                    onClick={() => history.push('/login')}
                    onKeyDown={() => history.push('/login')}
                    tabIndex="-1"
                    role="button"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Sign in
                  </Button>
                )}

            </Box>
          </Flex>

        </Flex>
      </Box>
      <NoteUpload
        isNoteOpen={isOpen}
        onNoteClose={onClose}
        finalFocusRef={btnRef}
        scrollBehavior={scrollBehavior}
      />

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
