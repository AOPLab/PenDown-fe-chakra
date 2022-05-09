import React, {
  useState,
} from 'react';
import { useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router-dom';
import {
  HStack, Flex, VStack, Button, Text, Avatar, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import { avatarSrc } from '../../components/util/Helper';
import CardSection from '../../components/ui/CardSection';
import StatsCard from '../../components/ui/cards/StatsCard';

function SocialProfile() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const account = useSelector((state) => state.user);
  // 註：要把這個 account 改成接對應的非登入使用者
  // const dispatch = useDispatch();
  const tabs = ['Recent', 'Popular'];
  const noteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  // 註：這裡要接要用的 notes

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const [tabIndex, setTabIndex] = useState(0);
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
                src={avatarSrc(account.username)}
              />
              <Text align="center" width="15vw">
                <Text color="black.900" fontWeight={900} fontSize="2xl">
                  {account.fullName}
                </Text>
                <Text color="gray.600" fontWeight={400} fontSize="lg">
                  @
                  {account.username}
                </Text>
              </Text>
              <Button
                variant="pendown-primary"
                size="sm"
              >
                Follow
              </Button>
            </VStack>
            <VStack>
              <HStack spacing={4}>
                <StatsCard title="Followers" stat={account.followersNum} />
                <StatsCard title="Following" stat={account.followingNum} />
                <StatsCard title="Notes" stat={account.noteNum} />
              </HStack>
              <Text width="100%" textAlign="left">{account.description}</Text>
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
            {tabs.map((tab) => (
              <TabPanel key={tab}>
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={noteIds} />
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default SocialProfile;
