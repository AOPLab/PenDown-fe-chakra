import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Container,
} from '@chakra-ui/react';
import NoteCardContainer from '../../components/ui/NoteCardContainer';

function PersonalProfile() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Container
        width="10xl"
        pt="10px"
      >
        <HStack>
          <Container
            // mx="auto"
            // px={{ base: 4, lg: 8, xl: 12 }}
            py={20}
            // textAlign="center"
            alignContent="center"
          >
            <Avatar
              border="2px solid black"
              height="auto"
              width="8vw"
              src={`https://source.boringavatars.com/beam/40/${user.username}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
            />
            <Text py="5px" fontSize={{ base: 'm', sm: 's', md: 'm' }} fontWeight={900} lineHeight="150%">
              {user.username}
            </Text>
          </Container>
          <VStack>
            <HStack>
              <Box borderRadius="pendown" border="2px black">
                kd
              </Box>
            </HStack>
          </VStack>
        </HStack>
      </Container>
      <Box pt="20">
        <NoteCardContainer />
      </Box>
    </>
  );
}

export default PersonalProfile;
