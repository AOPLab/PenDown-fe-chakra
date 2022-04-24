import { useState, useEffect } from 'react';
import React, { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Link,
  makeStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Link as RouterLink, useHistory } from 'react-router-dom';
import { userRegister } from '../../actions/user/auth';

const useStyles = makeStyles((theme) => ({
  authForm: {
    width: '70%',
  },
  authTextFields: {
    width: '100%',
    marginTop: '50px',
  },
  authTextFieldsComplex: {
    width: '100%',
    marginTop: '40px',
  },
  authButtons: {
    marginTop: '44px',
    marginBottom: '30px',
  },
  authLink: {
    color: theme.palette.grey.A400,
  },
  snackbar: {
    width: '400px',
  },
}));

function checkPassword(password1, password2) {
  if (password1 === password2) {
    return 'Same';
  }
  return "Passwords don't match";
}

export default function RegisterForm() {
  const classNames = useStyles();
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
      <Card className="auth-form register-form" variant="outlined">
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
      </Card>
    </>
  );
}
