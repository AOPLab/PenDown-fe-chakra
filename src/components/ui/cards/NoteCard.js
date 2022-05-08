import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
  Box, useColorModeValue, Image, Icon, HStack, VStack, Avatar, Spacer,
} from '@chakra-ui/react';
import {
  FiCalendar, FiEye, FiBookmark,
} from 'react-icons/fi';
import { avatarSrc } from '../../util/Helper';
import Card from '../Card';
import CardBadge from './CardBadge';

export default function NoteCard(props) {
  const history = useHistory();

  const ref = useRef();
  const [imageHeight, setImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    setImageHeight(event.target.clientHeight);
  };
  useEffect(() => {
    setImageHeight(ref.current.clientHeight);
  }, []);

  return (
    <Card variant="pendown" maxW="full" onClick={() => { history.push(`/note/${props.noteId ? props.noteId : 50}`); }}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="full"
        borderRadius="pendown"
        position="relative"
        width="290px"
      >
        <Box
          css={{ display: 'block', position: 'relative' }}
          align="center"
          alignItems="center"
          borderBottom="2px solid black"
        >
          <Box>
            {props.noteType && (
            <>
              <CardBadge
                content={props.noteType}
                style={{ bottom: '1rem', right: '0.75rem', position: 'absolute' }}
              />
            </>
            )}
            <Box display="flex" alignItems="center" justifyContent="center" roundedTop="pendown" height="376px">
              <Image
                ref={ref}
                src={props.imageUrl}
                alt="No Preview Image"
                width="290px"
                maxWidth="full"
                maxHeight="376px"
                roundedTop={(imageHeight >= 350) ? 'pendown' : 'md'}
                rounded={(imageHeight < 350) ? 'md' : ''}
                objectFit="cover"
                onLoad={handleImageLoad}
              />
            </Box>
          </Box>
        </Box>
        {/* <Box borderBottom="2px solid black" position="absolute" left="0" right="0" /> */}

        <VStack p="4" align="left">
          <Box
            // mt="0px"
            fontWeight="bold"
            fontSize="2xl"
            as="h1"
            lineHeight="tight"
            width="full"
            position="relative"
            isTruncated
          >
            {props.title ? props.title : 'No Title'}
          </Box>

          <Box display="flex" alignItems="center">
            <HStack>
              <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm">
                {props.dateCreated ? moment(props.dateCreated).format('YYYY-MM-DD HH:mm:ss') : '2022-05-06 22:00:00'}
              </Box>
            </HStack>
          </Box>

          <Box d="flex" alignItems="center" w="100%">
            <HStack>
              <Avatar
                border="2px solid black"
                size="sm"
                src={props.username ? avatarSrc(props.username) : 'admin'}
              />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>{props.username}</Box>
            </HStack>
            <Spacer />
            <HStack
              color="gray.500"
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
            >
              <Icon as={FiEye} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {props.viewCount ? props.viewCount : 0}
              </Box>
              <Icon as={FiBookmark} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {props.savedCount ? props.savedCount : 0}
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Card>
  );
}
