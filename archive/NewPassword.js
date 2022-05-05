import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  Typography,
  makeStyles,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SimpleBar from '../ui/SimpleBar';
import AlignedText from '../ui/AlignedText';

import { editPassword } from '../../actions/user/user';

const useStyles = makeStyles(() => ({
  buttons: {
    marginTop: '6px',
    marginLeft: '-5px',
  },
}));

export default function NewPassword() {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const authToken = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.user.id);
  const serverError = useSelector((state) => state.error.user.user.editPassword);
  const dispatch = useDispatch();

  const initErrors = {
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  };

  const initHelperText = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const [errors, setErrors] = useState(initErrors);
  const [helperText, setHelperText] = useState(initHelperText);
  const [popUp, setPopUp] = useState(false);

  const handleResetPassword = () => {
    // change system password
    dispatch(
      editPassword(
        authToken,
        id,
        oldPassword,
        newPassword,
        () => {
          setEdit(false);
          setOldPassword('');
          setNewPassword('');
          setConfirmPassword('');
          setDisabled(true);
          setErrors(initErrors);
          setHelperText(initHelperText);
        },
        () => {
          setShowSnackbar(true);
        },
      ),
    );
  };

  const handleCancel = () => {
    setEdit(false);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrors(initErrors);
    setHelperText(initHelperText);
  };

  useEffect(() => {
    if (confirmPassword === '') return;
    setErrors((input) => ({
      ...input,
      oldPassword: oldPassword === '',
      newPassword: newPassword === '',
    }));
    setHelperText((input) => ({
      ...input,
      oldPassword: oldPassword === '' ? "Can't be empty!" : '',
      newPassword: newPassword === '' ? "Can't be empty!" : '',
    }));

    if (oldPassword !== '' && newPassword !== '') {
      setErrors((input) => ({
        ...input,
        confirmPassword: newPassword !== confirmPassword,
      }));
      setHelperText((input) => ({
        ...input,
        confirmPassword: newPassword !== confirmPassword ? "Passwords don't match" : '',
      }));
    }
  }, [oldPassword, newPassword, confirmPassword]);

  useEffect(() => {
    if (
      oldPassword !== ''
      && newPassword !== ''
      && confirmPassword !== ''
      && !errors.oldPassword
      && !errors.newPassword
      && !errors.confirmPassword
    ) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [oldPassword, newPassword, confirmPassword, errors.oldPassword, errors.newPassword, errors.confirmPassword]);

  return (
    <>
      {edit ? (
        <SimpleBar title="Password">
          <>
            <AlignedText text="Current Password" childrenType="field" maxWidth="lg">
              <TextField
                value={oldPassword}
                variant="outlined"
                type={showPassword.oldPassword ? 'text' : 'password'}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                error={errors.oldPassword}
                helperText={helperText.oldPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setShowPassword((input) => ({ ...input, oldPassword: !input.oldPassword }));
                        }}
                        edge="end"
                      >
                        {showPassword.oldPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </AlignedText>

            <AlignedText text="New Password" childrenType="field" maxWidth="lg">
              <TextField
                value={newPassword}
                variant="outlined"
                type={showPassword.newPassword ? 'text' : 'password'}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                error={errors.newPassword}
                helperText={helperText.newPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setShowPassword((input) => ({ ...input, newPassword: !input.newPassword }));
                        }}
                        edge="end"
                      >
                        {showPassword.newPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </AlignedText>
            <AlignedText text="Confirmed Password" childrenType="field" maxWidth="lg">
              <TextField
                value={confirmPassword}
                variant="outlined"
                type={showPassword.confirmPassword ? 'text' : 'password'}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                error={errors.confirmPassword}
                helperText={helperText.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setShowPassword((input) => ({ ...input, confirmPassword: !input.confirmPassword }));
                        }}
                        edge="end"
                      >
                        {showPassword.confirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </AlignedText>
            <div className={classes.buttons}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button color="primary" type="submit" disabled={disabled} onClick={() => setPopUp(true)}>
                Save
              </Button>
            </div>
          </>
        </SimpleBar>
      ) : (
        <SimpleBar
          title="Password"
          buttons={(
            <>
              <Button onClick={() => setEdit(true)}>Edit</Button>
            </>
          )}
        />
      )}
      <Dialog
        open={popUp}
        keepMounted
        onClose={() => setPopUp(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography variant="h4">Change password</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to change your password ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setPopUp(false);
              handleCancel();
            }}
            color="default"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setPopUp(false);
              handleResetPassword();
            }}
            color="secondary"
          >
            Change
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          setShowSnackbar(false);
        }}
        message={`Error: ${serverError}`}
      />
    </>
  );
}
