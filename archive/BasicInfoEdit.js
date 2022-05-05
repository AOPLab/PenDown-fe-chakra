import React, { useState } from 'react';
import {
  Button, TextField, makeStyles,
} from '@material-ui/core';
import SimpleBar from '../ui/SimpleBar';
import AlignedText from '../ui/AlignedText';
// import { editAccount } from '../../actions/user/user';

const useStyles = makeStyles(() => ({
  buttons: {
    marginTop: '6px',
    marginLeft: '-5px',
  },
}));

export default function BasicInfoEdit(props) {
  const [username, setUsername] = useState(props.username);
  const [fullName, setFullName] = useState(props.fullName);
  const [email, setEmail] = useState(props.email);
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  // const accountId = useSelector((state) => state.user.id);
  // const authToken = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();

  const handleSave = () => {
    // dispatch(editAccount(authToken, accountId, username, nickname, altMailChanged ? altMail : null));
    props.handleBack('');
  };

  const handleCancel = () => {
    props.handleBack('');
    setError(false);
    setErrorText('');
  };

  return (
    <div>
      <SimpleBar title="Basic Information">
        <>
          <AlignedText text="Username" childrenType="field" maxWidth="lg">
            <TextField
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              error={error}
              helperText={errorText}
            />
          </AlignedText>
          <AlignedText text="Full Name" childrenType="field" maxWidth="lg">
            <TextField
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              error={error}
              helperText={errorText}
            />
          </AlignedText>
          <AlignedText text="Email" childrenType="field" maxWidth="lg">
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </AlignedText>
          <div className={classes.buttons}>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button color="primary" type="submit" onClick={handleSave}>
              Save
            </Button>
          </div>
        </>
      </SimpleBar>
    </div>
  );
}
