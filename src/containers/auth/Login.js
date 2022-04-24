import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import LoginForm from './LoginForm';

export default function Login() {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.title = 'Signin';
    return () => {
      document.title = 'PenDown';
    };
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem('id', user.id);
      localStorage.setItem('token', auth.token);
      history.push('/');
    }
  }, [auth.isAuthenticated, auth.token, history, user.id]);

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx="auto" maxW="md" py={12} px={6}>
        <LoginForm />
      </Stack>
    </Flex>
  );
}
