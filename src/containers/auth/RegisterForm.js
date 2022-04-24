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
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useHistory, Link as RouterLink } from 'react-router-dom';
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
  const registerLoading = useSelector((state) => state.loading.user.auth.signup);
  const registerError = useSelector((state) => state.error.user.auth.signup);

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
  const [errorTexts, setErrorTexts] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    setErrorTexts(
      labelName.reduce((acc, item) => {
        if (item !== 'password' && item !== 'confirmPassword') {
          return { ...acc, [item]: newInputs[item].trim() === '' ? "Can't be empty" : '' };
        }
        return { ...acc, [item]: newInputs[item] === '' ? "Can't be empty" : '' };
      }, {}),
    );

    // check password
    const statusP = checkPassword(newInputs.password, newInputs.confirmPassword);
    if (statusP === "Passwords don't match") {
      setErrors((input) => ({ ...input, confirmPassword: true }));
      setErrorTexts((input) => ({ ...input, confirmPassword: statusP }));
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
      history.push('/login');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((input) => ({ ...input, [name]: value }));
    if (value !== '' && errorTexts[name] === "Can't be empty") {
      setErrors((input) => ({ ...input, [name]: false }));
      setErrorTexts((input) => ({ ...input, [name]: '' }));
    }

    if (name === 'confirmPassword' || name === 'password') {
      if (
        checkPassword(inputs.password, value) === "Passwords don't match"
        && checkPassword(inputs.confirmPassword, value) === "Passwords don't match"
      ) {
        setErrors((input) => ({ ...input, confirmPassword: true }));
        setErrorTexts((input) => ({ ...input, confirmPassword: "Passwords don't match" }));
      } else {
        setErrors((input) => ({ ...input, confirmPassword: false }));
        setErrorTexts((input) => ({ ...input, confirmPassword: '' }));
      }
    }

    if (name === 'username' && errorTexts[name] === 'Username Exists') {
      setErrors((input) => ({ ...input, username: false }));
      setErrorTexts((input) => ({ ...input, username: '' }));
    }

    if (name === 'email' && errorTexts[name] === 'Email Exists') {
      setErrors((input) => ({ ...input, email: false }));
      setErrorTexts((input) => ({ ...input, email: '' }));
    }

    setHasRequest(false);
  };

  useEffect(() => {
    if (!registerLoading && hasRequest) {
      // StudentCardExists, UsernameExists, StudentIdNotMatchEmail
      if (registerError !== null) {
        switch (registerError) {
          case 'UsernameExists': {
            setErrors((input) => ({ ...input, username: true }));
            setErrorTexts((input) => ({ ...input, username: 'Username Exists' }));
            break;
          }
          case 'EmailExists': {
            setErrors((input) => ({ ...input, email: true }));
            setErrorTexts((input) => ({
              ...input,
              email: 'Email Exists',
            }));
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  }, [hasRequest, registerError, registerLoading]);

  return (
    <>
      <Stack spacing="8">
        <Box borderRadius="card" border="2px solid black" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
          <Stack spacing="8">
            <Stack align="center" justify="center" spacing="8">
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
                      error={errors.fullName}
                      helperText={errorTexts.fullName}
                      placeholder="Full name"
                      focusBorderColor="primary.400"
                      borderColor="black"
                      borderWidth="2px"
                      borderRadius="pendown"
                      size="lg"
                    />
                  </FormControl>
                  <FormControl id="username">
                    <Input
                      type="text"
                      label="Username"
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
                      error={errors.username}
                      helperText={errorTexts.username}
                    />
                  </FormControl>
                  <FormControl id="email">
                    <Input
                      name="email"
                      label="Email"
                      value={inputs.email}
                      onChange={(e) => handleChange(e)}
                      error={errors.email}
                      helperText={errorTexts.email}
                      placeholder="Email"
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      size="lg"
                      id="username"
                    />
                  </FormControl>
                  <FormControl id="password">
                    <InputGroup>
                      <InputRightElement>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          icon={showPassword ? <HiEye /> : <HiEyeOff />}
                          aria-label={showPassword ? 'Mask password' : 'Reveal password'}
                          variant="link"
                          border="none"
                    // size="lg"
                    // marginY="auto"
                          marginTop="10px"
                          _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                          marginRight="10px"
                          paddingY="5px"
                          fontSize="24px"
                          isRound
                        />
                      </InputRightElement>
                      <Input
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                // placeholder="New Password"
                        value={inputs.password}
                        onChange={(e) => handleChange(e)}
                        error={errors.password}
                        helperText={errorTexts.password}
                        id="password"
                        focusBorderColor="primary.400"
                        borderColor="black"
                        borderWidth="2px"
                        borderRadius="pendown"
                        placeholder="Password"
                        size="lg"
                        required
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="password">
                    <InputGroup>
                      <InputRightElement>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          icon={showPassword ? <HiEye /> : <HiEyeOff />}
                          aria-label={showPassword ? 'Mask password' : 'Reveal password'}
                          variant="link"
                          border="none"
                    // size="lg"
                    // marginY="auto"
                          marginTop="10px"
                          _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                          marginRight="10px"
                          paddingY="5px"
                          fontSize="24px"
                          isRound
                        />
                      </InputRightElement>
                      <Input
                        id="confirm-password"
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        error={errors.confirmPassword}
                        label="Confirm Password"
                        value={inputs.confirmPassword}
                        borderWidth="2px"
                        helperText={errorTexts.confirmPassword}
                        onChange={(e) => handleChange(e)}
                        focusBorderColor="primary.400"
                        borderColor="black"
                        borderRadius="pendown"
                        placeholder="Confirm Password"
                        size="lg"
                        required
                      />
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
              <Link component={RouterLink} to="/login">Login</Link>
            </Text>

          </Stack>

        </Box>
      </Stack>
      {/* <Card className="auth-form register-form" variant="outlined">
        <CardContent className="auth-form-content">
          <form className={`auth-form-content ${classNames.authForm}`}>
            <TextField
              className={`auth-form-input ${classNames.authTextFields}`}
              id="username"
              name="username"
              label="Username"
              value={inputs.username}
              onChange={(e) => handleChange(e)}
              error={errors.username}
              helperText={errorTexts.username}
            />
            <TextField
              className={`auth-form-input ${classNames.authTextFields}`}
              id="fullName"
              name="fullName"
              label="Full Name"
              value={inputs.fullName}
              onChange={(e) => handleChange(e)}
              error={errors.fullName}
              helperText={errorTexts.fullName}
            />
            <TextField
              id="email"
              name="email"
              className={`auth-form-input ${classNames.authTextFields}`}
              label="Email"
              value={inputs.email}
              onChange={(e) => handleChange(e)}
              error={errors.email}
              helperText={errorTexts.email}
            />
            <TextField
                // required
              className={`auth-form-input ${classNames.authTextFields}`}
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
                // placeholder="New Password"
              value={inputs.password}
              onChange={(e) => handleChange(e)}
              error={errors.password}
              helperText={errorTexts.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
                // required
              className={`auth-form-input ${classNames.authTextFields}`}
              name="confirmPassword"
              error={errors.confirmPassword}
              type={showConfirmPassword ? 'text' : 'password'}
              label="Confirm Password"
              value={inputs.confirmPassword}
              helperText={errorTexts.confirmPassword}
              onChange={(e) => handleChange(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className={classNames.authButtons}>
              <Button onClick={() => onSubmit()} color="primary">
                Register
              </Button>
            </div>
          </form>
          <Typography variant="body2" className={classNames.authLink}>
            Already have a puppy?
            {' '}
            <Link component={RouterLink} to="/login">
              Log in
            </Link>
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
}
