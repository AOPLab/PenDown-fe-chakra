import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  HStack, Flex, Spacer, VStack, Button, Text, Avatar,
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

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
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
              {12 in user.followingIds // 註：這裡要改成確認有沒有追蹤
                ? (
                  <Button
                    variant="pendown-primary"
                    size="sm"
                  >
                    Following
                  </Button>
                )
                : (
                  <Button
                    variant="pendown-primary"
                    size="sm"
                  >
                    Follow
                  </Button>
                )
              }
            </VStack>
            <VStack>
              <HStack spacing={4}>
                <StatsCard title="Followers" stat={user.followersNum} />
                <StatsCard title="Following" stat={user.followingNum} />
                <StatsCard title="Notes" stat={user.noteNum} />
              </HStack>
              <Text width="100%" textAlign="left">{user.description}</Text>
            </VStack>
          </Flex>
          {/* <HStack spacing={8} mx="auto" maxW="3xl" width="80%" py={12} px={6} align="flex-start" /> */}
        </Flex>
        <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} />
      </Flex>
    </>
  );
}

export default SocialProfile;
