import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useToast, Button, Box, Flex,
  FormControl, FormLabel, Input, Stack, Icon,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FiLock, FiCheck } from 'react-icons/fi';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { editPassword } from '../../actions/user/user';

function PasswordSetting() {
  const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error.user.user);
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchError, setMatchError] = useState(false);
  const [editError, setEditError] = useState(null);
  const errorToast = useToast();

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const onCancel = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const onSubmit = () => {
    if (newPassword !== confirmPassword) {
      setMatchError(true);
      return;
    }
    dispatch(editPassword(config.token, user.id, oldPassword, newPassword));
  };

  useEffect(() => {
    if (newPassword === confirmPassword) {
      setMatchError(false);
    }
  }, [confirmPassword, newPassword]);

  useEffect(() => {
    if (matchError) {
      errorToast({
        title: 'Edit Password',
        description: 'Password Not Match',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [errorToast, matchError]);

  useEffect(() => {
    if (error.editPassword) {
      setEditError(true);
    }
  }, [error.editPassword]);

  useEffect(() => {
    if (editError) {
      errorToast({
        title: 'Edit Password',
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
                      <Icon as={FiLock} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Old Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password1"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      placeholder="Password"
                      size="lg"
                      required
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
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
                      <Icon as={FiLock} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">New Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password2"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      placeholder="Password"
                      size="lg"
                      required
                      isInvalid={matchError}
                      errorBorderColor="primary.400"
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
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
                      <Icon as={FiCheck} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Confirm New Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password3"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      placeholder="Password"
                      size="lg"
                      required
                      isInvalid={matchError}
                      errorBorderColor="primary.400"
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
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

export default PasswordSetting;
