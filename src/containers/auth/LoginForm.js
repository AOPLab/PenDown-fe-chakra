import React, { useEffect, useState } from 'react';
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Link,
//   InputAdornment,
//   IconButton,
//   Typography,
//   makeStyles,
// } from '@material-ui/core';
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

// const useStyles = makeStyles((theme) => ({
//   authForm: {
//     width: '80%',
//   },
//   authTextFields: {
//     width: '100%',
//     marginTop: '40px',
//   },
//   authButtons: {
//     marginTop: '15px',
//     marginBottom: '30px',
//   },
//   authLink: {
//     color: theme.palette.grey.A400,
//     marginTop: '30px',
//   },
//   caption: {
//     width: '80%',
//     textAlign: 'center',
//   },
//   caption2: {
//     width: '80%',
//     color: '#969bab',
//     textAlign: 'center',
//   },
//   img: {
//     width: '80%',
//     height: 'auto',
//     marginBottom: '20px',
//   },
//   loginButton: {
//     color: 'yellow',
//   },
// }));

export default function LoginForm() {
  const dispatch = useDispatch();
  // const classNames = useStyles();
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

  // <Card className="auth-form login-form" variant="outlined">
  //   <CardContent className="auth-form-content">
  //     <img alt="Logo" src="../logo/big-logo.png" className={classNames.img} />
  //     <Typography variant="body2" className={classNames.caption2}>
  //       Sign up to see notes from other note-takes from all over the world.
  //     </Typography>
  //     <div className={classNames.authButtons}>
  //       <GoogleLoginButton />
  //     </div>
  //     <Typography variant="caption" className={classNames.caption}>
  //       OR
  //     </Typography>
  //     <form className={`auth-form-content ${classNames.authForm}`} onSubmit={(e) => handleSubmit(e)}>
  //       <TextField
  //         className={`auth-form-input ${classNames.authTextFields}`}
  //         id="login-username"
  //         label="Username"
  //         value={username}
  //         onChange={(e) => handleUsernameChange(e)}
  //         error={errors.username}
  //         helperText={errorTexts.username}
  //       />
  //       <TextField
  //         id="login-password"
  //         type={showPassword ? 'text' : 'password'}
  //         className={`auth-form-input ${classNames.authTextFields}`}
  //         label="Password"
  //         value={password}
  //         onChange={(e) => handlePasswordChange(e)}
  //         error={errors.password}
  //         helperText={errorTexts.password}
  //         InputProps={{
  //           endAdornment: (
  //             <InputAdornment position="end">
  //               <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
  //                 {showPassword ? <Visibility /> : <VisibilityOff />}
  //               </IconButton>
  //             </InputAdornment>
  //           ),
  //         }}
  //       />
  //       <div className={classNames.authButtons}>
  //         <Button color="primary" type="submit">
  //           Login
  //         </Button>
  //         {/* <ContraButton appearance="teritary" type="submit" className={classNames.loginButton}>Login</ContraButton> */}
  //       </div>
  //     </form>

  //     <Typography variant="caption" className={classNames.caption}>
  //       By signing up, you agree to our Terms, Data Policy and Cookies Policy.
  //     </Typography>

  //     <Typography variant="body2" className={classNames.authLink}>
  //       {"Don't have an account?"}
  //       {' '}
  //       <Link component={RouterLink} to="/register">
  //         Join
  //       </Link>
  //       {' '}
  //     </Typography>
  //   </CardContent>
  // </Card>
  );
}
