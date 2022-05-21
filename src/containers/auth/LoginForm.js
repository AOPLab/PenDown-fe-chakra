import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Image,
  IconButton,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useDisclosure,
  HStack,
  Divider,
  Text,
  useToast,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link as ReactRouterLink } from 'react-router-dom';
import { userSignIn } from '../../actions/user/auth';
import GoogleLoginButton from '../../components/auth/GoogleLogin';

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState(false);
  const errorToast = useToast();

  const auth = useSelector((state) => state.auth);
  const loginError = useSelector((state) => state.error.user.auth);
  const loginLoading = useSelector((state) => state.loading.user.auth);

  const color = useColorModeValue('white', 'gray.700');

  useEffect(() => {
    if (!loginLoading.login) {
      if (loginError.login != null) {
        setInputError(true);
        errorToast({
          title: 'Login Fail',
          description: 'Incorrect username or password',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    }
  }, [errorToast, loginError, loginError.fetchAccount, loginLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignIn(username, password));
  };
  const handleUsernameChange = (e) => {
    if (e.target.value !== '') {
      setInputError(false);
    }
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (e.target.value !== '') {
      setInputError(false);
    }
    setPassword(e.target.value);
  };

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  if (auth.isAuthenticated) {
    history.push('/home');
  }

  return (
    <Stack spacing="8">
      <Box borderRadius="card" border="2px solid black" bg={color} boxShadow="lg" p={8}>
        <Stack spacing="8">
          <Stack direction="row" align="center" justify="center" onClick={() => history.push('/home')} cursor="pointer">
            <Image boxSize="70%" alt="Logo" src="../logo/big-logo.png" />
          </Stack>
          <Stack spacing="8">
            <GoogleLoginButton />
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or
              </Text>
              <Divider />
            </HStack>
          </Stack>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={4}>
              <Stack spacing={4}>
                <FormControl id="username">
                  <Input
                    type="text"
                    id="login-username"
                    _hover={{ borderColor: 'primary.400' }}
                    label="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => handleUsernameChange(e)}
                    focusBorderColor="primary.400"
                    borderWidth="2px"
                    borderRadius="pendown"
                    isInvalid={inputError}
                    size="lg"
                    borderColor="black"
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <InputGroup>
                    <Input
                      id="login-password"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      placeholder="Password"
                      isInvalid={inputError}
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
                </FormControl>
              </Stack>
              <Stack spacing={8}>
                <Button
                  variant="pendown-primary"
                  size="lg"
                  type="submit"
                >
                  Sign in
                </Button>
                <Stack direction="row" align="center" justify="center">
                  <Link fontSize="sm" fontWeight={800} to="/">Forgot your password?</Link>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Box>
      <Box borderRadius="card" border="2px solid black" bg={color} boxShadow="lg" p={8}>
        <Stack spacing="8">
          <Text align="center" fontSize="sm" fontWeight={800}>
            Don&apos;t have an account?
            {' '}
            <Link as={ReactRouterLink} to="/register">Join now</Link>
          </Text>

        </Stack>
      </Box>
    </Stack>
  );
}
