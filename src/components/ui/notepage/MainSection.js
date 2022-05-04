import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {
  // Container,
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import {
  FiCalendar,
  FiEye,
  FiBookmark,
  FiInfo,
} from 'react-icons/fi';

import CardBadge from '../cards/CardBadge';
import NoteBigAvatar from '../avatar/NoteBigAvatar';
import CustomIcon from '../icon/index';

const hoverStyle = {
  '&:hover': { opacity: '0.5', cursor: 'pointer' },
};

function MainSection({ property }) {
  // const { noteId } = useParams();
  const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <VStack py={2} textAlign="center" alignItems="center" spacing={4} p={6}>
        <Heading
          fontSize="3xl"
          fontWeight="extrabold"
          width="80%"
        >
          {property.title}
          {property.template ? (<Box as="sup" ml={1} fontSize="sm"><Tooltip hasArrow placement="auto" shouldWrapChildren label="this is a template note" fontSize="xs"><Icon as={FiInfo} /></Tooltip></Box>) : <></>}
        </Heading>
        <CardBadge
          content={property.noteType}
        />
        <Box display="flex" alignItems="center">
          <HStack>
            <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
            <Box as="span" color="black" fontSize="sm">
              {moment(property.dateCreated).format('YYYY-MM-DD HH:mm:ss')}
            </Box>
          </HStack>
        </Box>
        <Box>
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            height="376px"
            width="275px"
            borderRadius="pendown"
            border="2px solid black"
          />
        </Box>
        <Flex justifyContent="space-between" width="100%">
          <Flex direction="column" align="flex-start" justify="center">
            <HStack
              color="gray.500"
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
            >
              <Icon as={FiEye} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {property.viewCount}
              </Box>
              <Icon as={FiBookmark} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {property.savedCount}
              </Box>
            </HStack>
            <Box py={1} />
            {property.username && property.fullName
              ? <NoteBigAvatar username={property.username} fullName={property.fullName} />
              : <></>}
          </Flex>
          <VStack
            color="gray.500"
            fontWeight="semibold"
          >
            {property.is_saved
              ? (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  justifyContent="flex-start"
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={FiBookmark} color="black" css={{ strokeWidth: '3' }} />}
                  disabled
                >
                  <Text align="left">Saved</Text>
                </Button>
              )
              : (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                    // onClick={() => history.push('/login')}
                    // onKeyDown={() => history.push('/login')}
                  justifyContent="flex-start"
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={FiBookmark} color="black" css={{ strokeWidth: '3' }} />}
                >
                  <Text align="left">Save</Text>
                </Button>
              )}

            {property.pdf_filename && property.pdf_filename !== ''
              ? (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  justifyContent="flex-start"
                                // onClick={() => history.push('/login')}
                                // onKeyDown={() => history.push('/login')}
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={CustomIcon.NoteBean} color="black" css={{ strokeWidth: '3' }} />}
                >
                  Download
                </Button>
              )
              : (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  justifyContent="flex-start"
                    // onClick={() => history.push('/login')}
                    // onKeyDown={() => history.push('/login')}
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={CustomIcon.NoteBean} color="black" css={{ strokeWidth: '3' }} />}
                >
                  {`It will trade for ${property.formattedPrice} beans`}
                </Button>
              )}
            <Box width="100%">
              <Text align="right" color="gray.600" fontWeight={500} fontSize="xs">
                Not enough beans?
                {' '}
                <Text
                  as="span"
                  color="red.500"
                  style={{
                    '&:hover': { opacity: '0.5', cursor: 'pointer' },
                  }}
                  onClick={() => history.push('/account/payment')}
                >
                  Learn more

                </Text>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </VStack>
    </>
  );
}

export default MainSection;
