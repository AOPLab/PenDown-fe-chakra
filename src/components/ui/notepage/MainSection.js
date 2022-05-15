import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
  Text,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Link,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Magnifier from 'react-magnifier';
import {
  FiCalendar,
  FiEye,
  FiBookmark,
  FiInfo,
  FiDownloadCloud,
} from 'react-icons/fi';

import { FaBookmark } from 'react-icons/fa';

import CardBadge from '../cards/CardBadge';
import NoteBigAvatar from '../avatar/NoteBigAvatar';
import CustomIcon from '../icon/index';

import { buyNote, addNoteSaved, removeNoteSaved } from '../../../actions/note/note';
import { fetchDownloadFileUrl } from '../../../actions/common/common';
import '../../../theme/css/note.css';

function MainSection({ property }) {
  // const { noteId } = useParams();
  const history = useHistory();
  // const location = useLocation();
  const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const errorToast = useToast();

  // const ref = useRef();
  // const [imageHeight, setImageHeight] = useState(0);
  // const handleImageLoad = (event) => {
  //   setImageHeight(event.target.clientHeight);
  // };
  // useEffect(() => {
  //   setImageHeight(ref.current.clientHeight);
  // }, []);

  const downloadAllFile = () => {
    if (config.isAuthenticated) {
      dispatch(fetchDownloadFileUrl(config.token, property.noteId, property.pdf_filename, property.notability_filename, property.goodnotes_filename));
      onOpen();
    } else {
      errorToast({
        title: 'Not login',
        description: 'Please login first!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  // buy note purchase confirmation (pc)
  const { isOpen: pcIsOpen, onOpen: pcOnOpen, onClose: pcOnClose } = useDisclosure();
  const cancelRef = React.useRef();

  const onConfirmBuyNote = () => {
    if (!config.isAuthenticated) {
      errorToast({
        title: 'Not login',
        description: 'Please login first!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    pcOnOpen();
  };

  const onBuyNote = () => {
    if (config.isAuthenticated) {
      dispatch(buyNote(config.token, property.noteId));
    } else {
      errorToast({
        title: 'Not login',
        description: 'Please login first!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    pcOnClose();
  };

  const saveNote = () => {
    if (config.isAuthenticated) {
      dispatch(addNoteSaved(config.token, property.noteId));
    } else {
      errorToast({
        title: 'Not login',
        description: 'Please login first!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const unsaveNote = () => {
    if (config.isAuthenticated) {
      dispatch(removeNoteSaved(config.token, property.noteId));
    } else {
      errorToast({
        title: 'Not login',
        description: 'Please login first!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

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
              {moment(property.dateCreated).format('MMM DD, YYYY')}
            </Box>
          </HStack>
        </Box>
        <Box
          maxWidth="full"
        >
          <Magnifier
            src={property.imageUrl}
            alt={property.imageAlt}
            className="inner-image-zoom"
            width="290px"
            mgShowOverflow={false}
          />
        </Box>
        {/* <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">school/</Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge>{ schools[schoolId].name }</BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Courses" stat="123" />
              <StatsCard title="Notes" stat="1" />
            </HStack>
          </Flex>
        </Flex> */}
        <Flex justifyContent="space-between" width="100%" flexWrap="wrap" gap={4}>
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
              ? <NoteBigAvatar username={property.username} fullName={property.fullName} userId={property.userId} onClick={() => history.push(`/account/${property.userId}`)} />
              : <NoteBigAvatar username="Alice" fullName="Bob" />}
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
                  onClick={() => unsaveNote()}
                  leftIcon={<Icon as={FaBookmark} color="black" css={{ strokeWidth: '3' }} />}
                >
                  <Text align="left" fontSize={{ base: 'md', md: 'lg' }}>Saved</Text>
                </Button>
              )
              : (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  onClick={() => saveNote()}
                  justifyContent="flex-start"
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={FiBookmark} color="black" css={{ strokeWidth: '3' }} />}
                >
                  <Text align="left" fontSize={{ base: 'md', md: 'lg' }}>Save</Text>
                </Button>
              )}

            {property.pdf_filename && property.pdf_filename !== ''
              ? (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  justifyContent="flex-start"
                  onClick={() => downloadAllFile()}
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={CustomIcon.NoteBean} color="black" css={{ strokeWidth: '3' }} />}
                >
                  <Text fontSize={{ base: 'md', md: 'lg' }}>Download</Text>
                </Button>
              )
              : (
                <Button
                  variant="pendown-primary"
                  size="lg"
                  isFullWidth
                  justifyContent="flex-start"
                  onClick={onConfirmBuyNote} // () => onBuyNote()
                  tabIndex="-1"
                  role="button"
                  leftIcon={<Icon as={CustomIcon.NoteBean} color="black" css={{ strokeWidth: '3' }} />}
                >
                  <Text fontSize={{ base: 'md', md: 'lg' }}>{`Buy now for ${property.formattedPrice} beans`}</Text>
                </Button>
              )}
            <Box width="100%">
              <Text align={{ base: 'left', md: 'right' }} color="gray.600" fontWeight={500} fontSize="xs">
                Not enough beans?
                {' '}
                <Text
                  as="span"
                  color="red.500"
                  className="textHover"
                  onClick={() => history.push('/account/payment')}
                >
                  Learn more
                </Text>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </VStack>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={pcOnClose}
        isOpen={pcIsOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent bg="yellow.50" borderRadius="pendown" border="2px black solid">
          <AlertDialogHeader>
            Buy this note for
            {' '}
            {property.formattedPrice}
            {' '}
            beans?
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {`Once you confirm purchase, we will deduct ${property.formattedPrice} beans from your account.`}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="pendown" ref={cancelRef} onClick={pcOnClose}>
              Cancel
            </Button>
            <Button variant="pendown-primary" ml={3} onClick={() => onBuyNote()}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent borderRadius="pendown" border="2px black solid">
          <ModalHeader><Text fontSize="2xl">Click File to Download</Text></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {property.pdf_url
              ? (
                <>
                  <Text fontSize="xl">
                    <Link href={property.pdf_url} isExternal>
                      <HStack>
                        <Text>PDF</Text>
                        <Icon as={FiDownloadCloud} />
                        {/* <ExternalLinkIcon /> */}
                      </HStack>
                    </Link>
                  </Text>
                  <br />
                </>
              )
              : <></>}
            {property.nota_url
              ? (
                <>
                  <Text fontSize="xl">
                    <Link href={property.nota_url} isExternal>
                      <HStack>
                        <Text>Notability</Text>
                        <Icon as={FiDownloadCloud} />
                      </HStack>
                      {/* <ExternalLinkIcon mx="2px" /> */}
                    </Link>
                  </Text>
                  <br />
                </>
              )
              : <></>}
            {property.gnote_url
              ? (
                <>
                  <Text fontSize="xl">
                    <Link href={property.gnote_url} isExternal>
                      GoodNotes
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                  <br />
                </>
              )
              : <></>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MainSection;
