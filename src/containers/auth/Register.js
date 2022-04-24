import React from 'react';
import {
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx="auto" maxW="md" py={12} px={6}>
        <RegisterForm />
      </Stack>
    </Flex>
  );
}
