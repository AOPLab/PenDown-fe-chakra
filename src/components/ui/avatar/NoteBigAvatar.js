import React, { useState } from 'react';
import {
  Avatar,
  Flex,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { avatarSrc } from '../../util/Helper';
// FiEye, FiHeart, FiBookmark

export default function NoteBigAvatar({
  username, fullName,
}) {
  // const [pdfFile, setPdfFile] = useState(null);
  // const [noteFile, setNoteFile] = useState(null);
  // const [gnoteFile, setGNoteFile] = useState(null);
  // console.log(pdfFile);

  const [hover, setHover] = useState(false);
  return (
    <>

      <Flex direction="row" align="center" justify="center" cursor="pointer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <Avatar
          border="3px solid black"
          variant="pendown-navbar"
          size="md"
          // src={`https://source.boringavatars.com/beam/40/${username}?colors=00C6AE,FFBD12,FF89BB,F95A2C,1947E5`}
          src={avatarSrc(username)}
          style={(hover ? { transition: '.2s ease-in-out', boxShadow: '0px 4px 0px #18191F', transform: 'translateY(-5px) scale(1.02)' } : {})}
        />
        <Spacer p={1} />
        <Flex direction="column" align="flex-start" justify="center">
          <Text fontSize="md" fontWeight={700} maxW="full" isTruncated mt="1">
            {fullName}
          </Text>
          <Text fontSize="sm" fontWeight={500} maxW="full" isTruncated mt="1">
            @
            {username}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
