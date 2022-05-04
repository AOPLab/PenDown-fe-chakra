import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Button } from '@chakra-ui/react';
import { editAccount } from '../../actions/user/user';

function AccountSetting() {
  // const history = useHistory();
  // const location = useLocation();
  const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    dispatch(editAccount(config.token, username, fullName, email, description));
  };

  useEffect(() => {
    setUsername(user.username);
    setFullName(user.fullName);
    setEmail(user.email);
    setDescription(user.description);
  }, [user.description, user.email, user.fullName, user.username]);

  return (
    <>
      <Heading>This is container about setting of account.</Heading>
      <h1>This is container about setting of account.</h1>
      <h1>This is container about setting of account.</h1>
      <h1>This is container about setting of account.</h1>
      <h1>{username}</h1>
      <h1>{fullName}</h1>
      <h1>{email}</h1>
      <h1>{description}</h1>
      {/* <AccountSetting /> */}
      <Button
        onClick={onSubmit}
      >
        Submit
      </Button>
    </>
  );
}

export default AccountSetting;
