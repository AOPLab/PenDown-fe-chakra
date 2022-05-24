import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  HStack,
  Divider,
  Text,
  useToast,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useHistory, Link as ReactRouterLink } from 'react-router-dom';
import { userRegister } from '../../actions/user/auth';
import GoogleLoginButton from '../../components/auth/GoogleLogin';

function checkPassword(password1, password2) {
  if (password1 === password2) {
    return 'Same';
  }
  return "Passwords don't match";
}

export default function RegisterForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const registerLoading = useSelector((state) => state.loading.user.auth.signup);
  const registerError = useSelector((state) => state.error.user.auth.signup);
  const errorToast = useToast();

  const [inputs, setInputs] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: false,
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const [hasRequest, setHasRequest] = useState(false);

  const labelName = ['username', 'fullName', 'email', 'password', 'confirmPassword'];

  const onSubmit = () => {
    const newInputs = labelName.reduce((acc, item) => ({ ...acc, [item]: inputs[item].trim() }), {});
    let hasError = labelName.reduce((acc, item) => acc || newInputs[item] === '', false);

    setErrors(
      labelName.reduce((acc, item) => {
        if (item !== 'password' && item !== 'confirmPassword') {
          return { ...acc, [item]: newInputs[item].trim() === '' };
        }
        return { ...acc, [item]: newInputs[item] === '' };
      }, {}),
    );
    // check password
    const statusP = checkPassword(newInputs.password, newInputs.confirmPassword);
    if (statusP === "Passwords don't match") {
      setErrors((input) => ({ ...input, confirmPassword: true }));
      hasError = true;
    }

    if (!hasError) {
      dispatch(
        userRegister(
          inputs.username.trim(),
          inputs.fullName.trim(),
          inputs.email.trim(),
          inputs.password,
        ),
      );
      setHasRequest(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((input) => ({ ...input, [name]: value }));
    if (value !== '') {
      setErrors((input) => ({ ...input, [name]: false }));
    }

    if (name === 'confirmPassword' || name === 'password') {
      if (
        checkPassword(inputs.password, value) === "Passwords don't match"
        && checkPassword(inputs.confirmPassword, value) === "Passwords don't match"
      ) {
        setErrors((input) => ({ ...input, confirmPassword: true }));
      } else {
        setErrors((input) => ({ ...input, confirmPassword: false }));
      }
    }

    if (name === 'username') {
      setErrors((input) => ({ ...input, username: false }));
    }

    if (name === 'email') {
      setErrors((input) => ({ ...input, email: false }));
    }

    setHasRequest(false);
  };

  useEffect(() => {
    if (!registerLoading && hasRequest) {
      if (registerError !== null) {
        switch (registerError) {
          case 'UsernameExists': {
            setErrors((input) => ({ ...input, username: true }));
            break;
          }
          case 'EmailExists': {
            setErrors((input) => ({ ...input, email: true }));
            break;
          }
          default: {
            break;
          }
        }
        errorToast({
          title: 'Register Fail',
          description: 'Username Exists',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        history.push('/login');
      }
    }
  }, [errorToast, hasRequest, history, registerError, registerLoading]);

  if (auth.isAuthenticated) {
    history.push('/home');
  }

  return (
    <>
      <Stack spacing="8">
        <Box borderRadius="card" border="2px solid black" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <Stack spacing="8">
            <Stack align="center" justify="center" spacing="8" onClick={() => history.push('/home')} cursor="pointer">
              <Image boxSize="70%" alt="Logo" src="../logo/big-logo.png" />
              <Text align="center" fontWeight={800} color="gray.600">Sign up to see notes from other note-takers from all over the world.</Text>
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
            <form>
              <Stack spacing={4}>
                <Stack spacing={4}>
                  <FormControl id="fullname">
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      value={inputs.fullName}
                      onChange={(e) => handleChange(e)}
                      _hover={{ borderColor: 'primary.400' }}
                      placeholder="Full name"
                      focusBorderColor="primary.400"
                      borderColor="black"
                      borderWidth="2px"
                      borderRadius="pendown"
                      size="lg"
                      required
                      isInvalid={errors.fullName}
                    />
                  </FormControl>
                  <FormControl id="username">
                    <Input
                      type="text"
                      label="Username"
                      _hover={{ borderColor: 'primary.400' }}
                      placeholder="Username"
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      size="lg"
                      id="username"
                      name="username"
                      value={inputs.username}
                      onChange={(e) => handleChange(e)}
                      borderWidth="2px"
                      borderColor="black"
                      required
                      isInvalid={errors.username}
                    />
                  </FormControl>
                  <FormControl id="email">
                    <Input
                      name="email"
                      label="Email"
                      value={inputs.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Email"
                      _hover={{ borderColor: 'primary.400' }}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      size="lg"
                      id="email"
                      required
                      isInvalid={errors.email}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <InputGroup>
                      <Input
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                // placeholder="New Password"
                        value={inputs.password}
                        onChange={(e) => handleChange(e)}
                        id="password"
                        focusBorderColor="primary.400"
                        borderColor="black"
                        borderWidth="2px"
                        _hover={{ borderColor: 'primary.400' }}
                        borderRadius="pendown"
                        placeholder="Password"
                        size="lg"
                        required
                        isInvalid={errors.password}
                      />
                      <InputRightElement>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          icon={showPassword ? <HiEye /> : <HiEyeOff />}
                          aria-label={showPassword ? 'Mask password' : 'Reveal password'}
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
                  <FormControl id="password">
                    <InputGroup>
                      <Input
                        id="confirm-password"
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        label="Confirm Password"
                        value={inputs.confirmPassword}
                        borderWidth="2px"
                        onChange={(e) => handleChange(e)}
                        focusBorderColor="primary.400"
                        borderColor="black"
                        borderRadius="pendown"
                        placeholder="Confirm Password"
                        size="lg"
                        _hover={{ borderColor: 'primary.400' }}
                        required
                        isInvalid={errors.confirmPassword}
                      />
                      <InputRightElement>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          icon={showPassword ? <HiEye /> : <HiEyeOff />}
                          aria-label={showPassword ? 'Mask password' : 'Reveal password'}
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
                    onClick={() => onSubmit()}
                  >
                    Sign up
                  </Button>
                  <Stack direction="row" align="center" justify="center">
                    <Text fontSize="sm" align="center" fontWeight={800} color="gray.600">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</Text>
                  </Stack>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
        <Box borderRadius="card" border="2px solid black" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <Stack spacing="8">
            <Text align="center" fontSize="sm" fontWeight={800}>
              Already have an account?
              {' '}
              <Link as={ReactRouterLink} to="/login">Login</Link>
            </Text>

          </Stack>

        </Box>
      </Stack>
    </>
  );
}
