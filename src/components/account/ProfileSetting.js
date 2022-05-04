import React, { useState } from 'react';
import {
  useToast, Button, Box, Flex,
  FormControl, FormLabel, Input, Stack, Icon,
  Text, Textarea,
} from '@chakra-ui/react';
import {
  FiUser, FiAtSign, FiMail, FiEdit2,
} from 'react-icons/fi';

function ProfileSetting() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [username, setUsername] = useState('icheft');
  const [fullName, setFullName] = useState('Brian L. Chen');
  const [email, setEmail] = useState('pendown@example.com');
  const [bio, setBio] = useState('');
  const errorToast = useToast();

  return (
    <>
      <Box py={4} px={8}>
        <Flex direction="column" gap={10} pt={4}>
          {/* <AccountSetting /> */}
          <Box>
            <Stack display="flex" direction="column" gap={5}>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiUser} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Full name</Text>
                    </Box>
                  </FormLabel>
                  <Input
                    type="text"
                    id="full-name"
                    _hover={{ borderColor: 'primary.400' }}
                    label="full-name"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.value)}
                    size="lg"
                    borderColor="black"
                    focusBorderColor="primary.400"
                    borderWidth="2px"
                    borderRadius="pendown"
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiAtSign} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Username</Text>
                    </Box>
                  </FormLabel>
                  <Input
                    type="text"
                    id="username"
                    _hover={{ borderColor: 'primary.400' }}
                    label="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.value)}
                    size="lg"
                    borderColor="black"
                    focusBorderColor="primary.400"
                    borderWidth="2px"
                    borderRadius="pendown"
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiMail} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Email</Text>
                    </Box>
                  </FormLabel>
                  <Input
                    type="email"
                    id="email"
                    _hover={{ borderColor: 'primary.400' }}
                    label="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.value)}
                    size="lg"
                    borderColor="black"
                    focusBorderColor="primary.400"
                    borderWidth="2px"
                    borderRadius="pendown"
                  />
                </Stack>
              </FormControl>
              <FormControl>
                <Stack
                  display="flex"
                  alignItems={{ base: 'start' }}
                  justifyContent="space-between"
                  direction={{ base: 'column', md: 'row' }}
                >
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                    mt={{ base: 0, md: 3 }}
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiEdit2} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Bio</Text>
                    </Box>
                  </FormLabel>
                  <Textarea
                    type="text"
                    id="bio"
                    _hover={{ borderColor: 'primary.400' }}
                    label="bio"
                    placeholder="Describe yourself"
                    value={bio}
                    onChange={(e) => setBio(e.value)}
                    size="lg"
                    borderColor="black"
                    focusBorderColor="primary.400"
                    borderWidth="2px"
                    borderRadius="pendown"
                  />
                </Stack>
              </FormControl>
            </Stack>
          </Box>
          <Flex direction="row-reverse" gap={4}>
            <Button
              variant="pendown-primary"
              size="lg"
            >
              Save
            </Button>
            <Button
              variant="pendown"
              size="lg"
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>

  );
}

export default ProfileSetting;
