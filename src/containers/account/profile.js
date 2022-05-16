import React, {
  useState, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  HStack, Flex, VStack, Button, Text, Avatar, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';
import Icon from '../../components/ui/icon/index';
import { avatarSrc } from '../../components/util/Helper';
import StatsCard from '../../components/ui/cards/StatsCard';
import CardSection from '../../components/ui/CardSection';
import { browseUserOwnNotes } from '../../actions/note/note';
import { readSelfAccount } from '../../actions/user/user';

function PersonalProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const [viewType, setViewType] = useState('Notes');
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const tabs = ['Notes', 'Saved', 'Library'];
  const [uploadedNoteIds, setUploadedNoteIds] = useState([]);
  const [savededNoteIds, setSavedNoteIds] = useState([]);
  const [libraryNoteIds, setLibraryNoteIds] = useState([]);

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const handleTabsChange = (index) => {
    if (index === 0) {
      setViewType('Notes');
    } else if (index === 1) {
      setViewType('Saved');
    } else if (index === 2) {
      setViewType('Library');
    }
    setTabIndex(index);
  };

  useEffect(() => {
    if (auth.token) {
      dispatch(readSelfAccount(auth.token));
    }
  }, [auth.token, dispatch]);

  useEffect(() => {
    if (auth.token === null || auth.token === '') {
      return;
    }
    switch (noteType) {
      case 'Choose Note Type':
      case 'All': {
        if (viewType === 'Notes') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'all', 'uploaded', 0));
        } else if (viewType === 'Saved') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'all', 'saved', 0));
        } else {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'all', 'library', 0));
        }
        break;
      }
      case 'Notability': {
        if (viewType === 'Notes') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'notability', 'uploaded', 0));
        } else if (viewType === 'Saved') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'notability', 'saved', 0));
        } else {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'notability', 'library', 0));
        }
        break;
      }
      case 'Goodnotes': {
        if (viewType === 'Notes') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'goodnotes', 'uploaded', 0));
        } else if (viewType === 'Saved') {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'goodnotes', 'saved', 0));
        } else {
          dispatch(browseUserOwnNotes(auth.token, user.id, 'goodnotes', 'library', 0));
        }
        break;
      }
      default: {
        break;
      }
    }
  }, [auth.token, dispatch, noteType, user.id, viewType]);

  useEffect(() => {
    if (noteType === 'All' || noteType === 'Choose Note Type') {
      setUploadedNoteIds(Object.keys(user.uploadedNotes.all).map((key) => user.uploadedNotes.all[key]).flat());
    } else if (noteType === 'Notability') {
      setUploadedNoteIds(Object.keys(user.uploadedNotes.notability).map((key) => user.uploadedNotes.notability[key]).flat());
    } else if (noteType === 'Goodnotes') {
      setUploadedNoteIds(Object.keys(user.uploadedNotes.goodnotes).map((key) => user.uploadedNotes.goodnotes[key]).flat());
    }
  }, [noteType, user.uploadedNotes]);

  useEffect(() => {
    if (noteType === 'All' || noteType === 'Choose Note Type') {
      setSavedNoteIds(Object.keys(user.savedNotes.all).map((key) => user.savedNotes.all[key]).flat());
    } else if (noteType === 'Notability') {
      setSavedNoteIds(Object.keys(user.savedNotes.notability).map((key) => user.savedNotes.notability[key]).flat());
    } else if (noteType === 'Goodnotes') {
      setSavedNoteIds(Object.keys(user.savedNotes.goodnotes).map((key) => user.savedNotes.goodnotes[key]).flat());
    }
  }, [noteType, user.savedNotes]);

  useEffect(() => {
    if (noteType === 'All' || noteType === 'Choose Note Type') {
      setLibraryNoteIds(Object.keys(user.libraryNotes.all).map((key) => user.libraryNotes.all[key]).flat());
    } else if (noteType === 'Notability') {
      setLibraryNoteIds(Object.keys(user.libraryNotes.notability).map((key) => user.libraryNotes.notability[key]).flat());
    } else if (noteType === 'Goodnotes') {
      setLibraryNoteIds(Object.keys(user.libraryNotes.goodnotes).map((key) => user.libraryNotes.goodnotes[key]).flat());
    }
  }, [noteType, user.libraryNotes]);

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
                src={avatarSrc(user.username)}
              />
              <Text align="center" width="15vw">
                <Text color="black.900" fontWeight={900} fontSize="2xl">
                  {user.fullName}
                </Text>
                <Text color="gray.600" fontWeight={400} fontSize="lg">
                  @
                  {user.username}
                </Text>
              </Text>
              <HStack textAlign="center" alignContent="center" onClick={() => history.push('/account/payment')}>
                <Icon.NoteBeanGreen />
                <Text color="black.900" fontWeight={900} fontSize="2xl">
                  {user.bean}
                </Text>
              </HStack>
              <Button
                variant="pendown-primary"
                size="sm"
                bg="yellow.500"
                color="black.900"
                onClick={() => history.push('/account/my-profile/setting')}
              >
                Setting
              </Button>
            </VStack>
            <VStack>
              <HStack spacing={4}>
                <StatsCard title="Followers" stat={user.followersNum} />
                <StatsCard title="Following" stat={user.followingNum} />
                <StatsCard title="Notes" stat={user.noteNum} />
              </HStack>
              <Text width="420px" textAlign="left" size="md">{user.description}</Text>
            </VStack>
          </Flex>
        </Flex>
        <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled" index={tabIndex} onChange={handleTabsChange} defaultIndex={0}>
          <Flex justify="center" mx={['auto', 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              textAlign="center"
              rounded="pendown"
              bg={useColorModeValue('gray.100', 'gray.500')}
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
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Stack>
          </Flex>
          <TabPanels>
            <TabPanel key="Notes">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={uploadedNoteIds} />
              </Flex>
            </TabPanel>
            <TabPanel key="Saved">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={savededNoteIds} />
              </Flex>
            </TabPanel>
            <TabPanel key="Library">
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={libraryNoteIds} />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default PersonalProfile;
