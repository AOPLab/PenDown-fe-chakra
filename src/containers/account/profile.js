import React, {
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  HStack, Flex, VStack, Button, Text, Avatar, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';
import Icon from '../../components/ui/icon/index';
import { avatarSrc } from '../../components/util/Helper';
import StatsCard from '../../components/ui/cards/StatsCard';
import SelfCardSection from '../../components/ui/SelfCardSection';

function PersonalProfile() {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);
  const [viewType, setViewType] = useState('');
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const noteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  // 註 要改成接對應的 notes
  const tabs = ['Notes', 'Saved', 'Library'];
  const [uploadedNoteIds, setUploadedNoteIds] = useState([]);

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

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

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
        <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
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
                    onClick={handleViewTypeChange}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Stack>
          </Flex>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab}>
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <SelfCardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={noteIds} />
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default PersonalProfile;
