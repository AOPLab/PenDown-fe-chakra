import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useToast, Button, Box, Flex,
  FormControl, FormLabel, Input, Stack, Icon,
  Text, Textarea,
} from '@chakra-ui/react';
import {
  FiUser, FiAtSign, FiMail, FiEdit2,
} from 'react-icons/fi';

import { editAccount } from '../../actions/user/user';

function ProfileSetting() {
  const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error.user.user);
  // const history = useHistory();
  const dispatch = useDispatch();

  const [editError, setEditError] = useState(null);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const errorToast = useToast();

  const onSubmit = () => {
    const onSuccess = () => {
      errorToast({
        title: 'Edit Success',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    };
    dispatch(editAccount(config.token, username, fullName, email, bio, onSuccess));
    // history.push('/account/my-profile');
  };

  const onCancel = () => {
    setUsername(user.username ? user.username : '');
    setFullName(user.fullName ? user.fullName : '');
    setEmail(user.email ? user.email : '');
    setBio(user.description ? user.description : '');
    // history.push('/account/my-profile');
  };

  useEffect(() => {
    setUsername(user.username ? user.username : '');
    setFullName(user.fullName ? user.fullName : '');
    setEmail(user.email ? user.email : '');
    setBio(user.description ? user.description : '');
  }, [user.description, user.email, user.fullName, user.username]);

  useEffect(() => {
    if (error.editAccount) {
      setEditError('Username Exists');
    }
  }, [error.editAccount, errorToast]);

  useEffect(() => {
    if (editError) {
      errorToast({
        title: 'Edit Account',
        description: editError,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      setEditError(null);
    }
  }, [editError, errorToast]);

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
                    onChange={(e) => setFullName(e.target.value)}
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
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setBio(e.target.value)}
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
              onClick={onSubmit}
            >
              Save
            </Button>
            <Button
              variant="pendown"
              size="lg"
              onClick={onCancel}
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
