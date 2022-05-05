import React from 'react';
import {
  SimpleGrid,
  Stack,
  Text,
  Container,
  Button,
  Input,
  useStyleConfig,
  // Center,
} from '@chakra-ui/react';

import Icon from '../ui/icon/index';
import FooterBtn from '../ui/btn/FooterBtn';

function Footer(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('Step', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Container as="footer" bg="#18191F" maxWidth="100%" verticalAlign="center">
      <Stack id="footer-logo" color="white" pt={{ base: '6', md: '12' }} margin="0 5vw 0 5vw">
        <Stack direction={{ base: 'column', sm: 'row' }} marginInlineStart="0rem">
          <Icon.SmallLogo />
          <Text align="left" direction="column" fontSize={{ base: 'xl', md: '4xl' }} fontWeight={900}>
            PenDown
          </Text>
        </Stack>
      </Stack>
      <Stack
        id="footer-content"
        textAlign="left middle"
        color="white"
        direction={{ base: 'column', md: 'row' }}
        spacing="4vw"
        margin="0 5vw 0 5vw"
        pt={{ base: '6', md: '12' }}
        paddingLeft="4px"
      >
        <Stack minW="300px" spacing={{ base: '6', md: '8' }} align="start">
          <Text fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }} fontWeight={700}>
            Subscribe to get newsletter from us. You can cancel anytime.
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }}>
            <Input
              id="subscribe_input"
              color="blackAlpha.700"
              borderRadius="pendown"
              placeholder="Enter your email"
              bg="white"
              type="email"
              required
              w="70%"
              maxW="420px"
            />
            <Button
              id="subscribe_btn"
              variant="primary"
              type="submit"
              width="100px"
              flexShrink={0}
              _hover={{ color: 'black', bg: 'secondary.500' }}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
        <br />
        <SimpleGrid columns={2} verticalAlign="center" height={{ base: '200px', sm: '100px' }} maxW="30%" minW="350px">
          <FooterBtn>About</FooterBtn>
          <FooterBtn>Pricing</FooterBtn>
          <FooterBtn>Terms of Service</FooterBtn>
          <FooterBtn>Sign Up</FooterBtn>
          <FooterBtn>Privacy Policy</FooterBtn>
          <FooterBtn>Discover</FooterBtn>
        </SimpleGrid>
      </Stack>
      <Stack color="white" pt={{ base: '6', md: '12' }} pb="3vh" margin="0 5vw 0 5vw">
        <Text fontSize="sm" color="whiteAlpha.900">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          PenDown, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
