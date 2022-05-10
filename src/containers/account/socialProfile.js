import React, {
  useState, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router-dom';
import {
  HStack, Flex, VStack, Button, Text, Avatar, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels, useToast,
} from '@chakra-ui/react';

import { avatarSrc } from '../../components/util/Helper';
import CardSection from '../../components/ui/CardSection';
import StatsCard from '../../components/ui/cards/StatsCard';
import { browsePublicUserNotes } from '../../actions/note/note';
import {
  readAccount, addAccountFollowing, deleteAccountFollowing, fetchAccountFollowings,
} from '../../actions/user/user';

function SocialProfile() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  // const location = useLocation();
  const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const accounts = useSelector((state) => state.accounts.byId);
  const [viewType, setViewType] = useState('Recent');
  const tabs = ['Recent', 'Popular'];
  const [recentNoteIds, setRecentNoteIds] = useState([]);
  const [popularNoteIds, setPopularNoteIds] = useState([]);
  const color = useColorModeValue('gray.100', 'gray.500');
  const errorToast = useToast();

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const handleViewTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setViewType(value);
  };

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleFollowOnClick = () => {
    if (config.token === null || config.token === '') {
      errorToast({
        title: 'Please login first',
        // description: 'Password Not Match',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    dispatch(addAccountFollowing(config.token, user.id, Number(accountId)));
  };

  const handleUnfollowOnClick = () => {
    if (config.token === null || config.token === '') {
      return;
    }
    dispatch(deleteAccountFollowing(config.token, user.id, Number(accountId)));
  };

  useEffect(() => {
    dispatch(readAccount(accountId));
  }, [accountId, dispatch]);

  useEffect(() => {
    if (config.token === null || config.token === '') {
      return;
    }
    dispatch(fetchAccountFollowings(user.id));
  }, [accountId, config.token, dispatch, user.id]);

  useEffect(() => {
    switch (noteType) {
      case 'Choose Note Type':
      case 'All': {
        if (viewType === 'Recent') {
          dispatch(browsePublicUserNotes(accountId, 'all', 'recent', 0));
        } else if (viewType === 'Popular') {
          dispatch(browsePublicUserNotes(accountId, 'all', 'popular', 0));
        }
        break;
      }
      case 'Notability': {
        if (viewType === 'Recent') {
          dispatch(browsePublicUserNotes(accountId, 'notability', 'recent', 0));
        } else if (viewType === 'Popular') {
          dispatch(browsePublicUserNotes(accountId, 'notability', 'popular', 0));
        }
        break;
      }
      case 'Goodnotes': {
        if (viewType === 'Recent') {
          dispatch(browsePublicUserNotes(accountId, 'goodnotes', 'recent', 0));
        } else if (viewType === 'Popular') {
          dispatch(browsePublicUserNotes(accountId, 'goodnotes', 'popular', 0));
        }
        break;
      }
      default: {
        break;
      }
    }
  }, [accountId, dispatch, noteType, viewType]);

  useEffect(() => {
    if (accounts[accountId]) {
      if (noteType === 'All' || noteType === 'Choose Note Type') {
        setRecentNoteIds(Object.keys(accounts[accountId].recentNoteIds.all).map((key) => accounts[accountId].recentNoteIds.all[key]).flat());
      } else if (noteType === 'Notability') {
        setRecentNoteIds(Object.keys(accounts[accountId].recentNoteIds.notability).map((key) => accounts[accountId].recentNoteIds.notability[key]).flat());
      } else if (noteType === 'Goodnotes') {
        setRecentNoteIds(Object.keys(accounts[accountId].recentNoteIds.goodnotes).map((key) => accounts[accountId].recentNoteIds.goodnotes[key]).flat());
      }
    }
  }, [accountId, accounts, noteType]);

  useEffect(() => {
    if (accounts[accountId]) {
      if (noteType === 'All' || noteType === 'Choose Note Type') {
        setPopularNoteIds(Object.keys(accounts[accountId].popularNoteIds.all).map((key) => accounts[accountId].popularNoteIds.all[key]).flat());
      } else if (noteType === 'Notability') {
        setPopularNoteIds(Object.keys(accounts[accountId].popularNoteIds.notability).map((key) => accounts[accountId].popularNoteIds.notability[key]).flat());
      } else if (noteType === 'Goodnotes') {
        setPopularNoteIds(Object.keys(accounts[accountId].popularNoteIds.goodnotes).map((key) => accounts[accountId].popularNoteIds.goodnotes[key]).flat());
      }
    }
  }, [accountId, accounts, noteType]);

  if (!accounts[accountId]) {
    return (<h1>Loading</h1>);
  }
  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <Avatar
                border="2px solid black"
                width="5vw"
                height="auto"
                src={avatarSrc(accounts[accountId].username)}
              />
              <Text align="center" width="15vw">
                <Text color="black.900" fontWeight={900} fontSize="2xl">
                  {accounts[accountId].fullName}
                </Text>
                <Text color="gray.600" fontWeight={400} fontSize="lg">
                  @
                  {accounts[accountId].username}
                </Text>
              </Text>
              {
              (user.followingIds.includes(Number(accountId))) ? (
                <Button
                  variant="pendown-primary"
                  size="sm"
                  onClick={handleUnfollowOnClick}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  variant="pendown-primary"
                  size="sm"
                  onClick={handleFollowOnClick}
                >
                  Follow
                </Button>
              )
              }
            </VStack>
            <VStack>
              <HStack spacing={4}>
                <StatsCard title="Followers" stat={accounts[accountId].followersNum} />
                <StatsCard title="Following" stat={accounts[accountId].followingNum} />
                <StatsCard title="Notes" stat={accounts[accountId].noteNum} />
              </HStack>
              <Text width="100%" textAlign="left">{accounts[accountId].description}</Text>
            </VStack>
          </Flex>
          {/* <HStack spacing={8} mx="auto" maxW="3xl" width="80%" py={12} px={6} align="flex-start" /> */}
        </Flex>
        <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
          <Flex justify="center" mx={['auto', 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              textAlign="center"
              rounded="pendown"
              bg={color}
              border="2px solid black"
            >
              <TabList
                borderBottom="hidden"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    value={tab}
                    _selected={{ bg: 'primary.400', borderRadius: 'pendown' }}
                    fontSize="md"
                    fontWeight="bold"
                    onClick={handleViewTypeChange}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Stack>
          </Flex>
          <TabPanels>
            <TabPanel key="Recent">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={recentNoteIds} />
              </Flex>
            </TabPanel>
            <TabPanel key="Popular">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={popularNoteIds} />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default SocialProfile;
