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
} from '@chakra-ui/react';
// import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { userSignIn } from '../../actions/user/auth';
import GoogleLoginButton from '../../components/auth/GoogleLogin';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [errorTexts, setErrorTexts] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const loginError = useSelector((state) => state.error.user.auth);
  const loginLoading = useSelector((state) => state.loading.user.auth);

  useEffect(() => {
    if (!loginLoading.fetchAccount) {
      if (loginError.fetchAccount != null) {
        setErrors({ username: true, password: true });
        setErrorTexts((ori) => ({ ...ori, password: 'Incorrect username or password' }));
      }
    }
  }, [loginError, loginError.fetchAccount, loginLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '') {
      setErrors((ori) => ({ ...ori, username: true }));
      setErrorTexts((ori) => ({ ...ori, username: "Can't be empty" }));
    }
    if (password === '') {
      setErrors((ori) => ({ ...ori, password: true }));
      setErrorTexts((ori) => ({ ...ori, password: "Can't be empty" }));
    }

    if (errors.username === false && errors.password === false && username !== '' && password !== '') {
      dispatch(userSignIn(username, password));
    }
  };
  const handleUsernameChange = (e) => {
    if (e.target.value !== '') {
      if (errors.password && errorTexts.password === 'Incorrect username or password') {
        setErrors({
          username: false,
          password: false,
        });
        setErrorTexts({
          username: '',
          password: '',
        });
      } else {
        setErrors((ori) => ({ ...ori, username: false }));
        setErrorTexts((ori) => ({ ...ori, username: '' }));
      }
    }
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (e.target.value !== '') {
      if (errors.password && errorTexts.password === 'Incorrect username or password') {
        setErrors({
          username: false,
          password: false,
        });
        setErrorTexts({
          username: '',
          password: '',
        });
      } else {
        setErrors((ori) => ({ ...ori, password: false }));
        setErrorTexts((ori) => ({ ...ori, password: '' }));
      }
    }
    setPassword(e.target.value);
  };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <Stack spacing="8">
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <Stack spacing="8">
          <Stack direction="row" align="center" justify="center">
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
          <Stack spacing={4}>
            <Stack spacing={4}>
              <FormControl id="email">
                <Input
                  type="text"
                  id="login-username"
                  label="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => handleUsernameChange(e)}
                  error={errors.username}
                  size="lg"
                  helperText={errorTexts.username}
                />
              </FormControl>
              <FormControl id="password">
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={onClickReveal}
                      icon={isOpen ? <HiEye /> : <HiEyeOff />}
                      aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                      variant="link"
                    // size="lg"
                      borderRadius={50}
                    // marginY="auto"
                      marginTop="10px"
                      marginRight="10px"
                      paddingY="5px"
                      fontSize="24px"
                      isRound
                    />
                  </InputRightElement>
                  <Input
                    id="login-password"
                    type={isOpen ? 'text' : 'password'}
                    label="Password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    error={errors.password}
                    placeholder="Password"
                    size="lg"
                    required
                    helperText={errorTexts.password}
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack spacing={8}>
              <Button
                bg="primary.300"
                color="black"
                _hover={{
                  bg: 'primary.500',
                  color: 'black',
                }}
              >
                Sign in
              </Button>
              <Stack direction="row" align="center" justify="center">
                <Link color="red.400" fontSize="sm" fontWeight={800} to="/">Forgot your password?</Link>

              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
        <Stack spacing="8">
          <Text align="center" fontSize="sm" fontWeight={800}>
            Don&apos;t have an account?
            {' '}
            <Link color="red.400" to="/">Join now</Link>
          </Text>

        </Stack>

      </Box>
    </Stack>
  );
}
