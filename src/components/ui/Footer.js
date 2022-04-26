/* eslint-disable react/react-in-jsx-scope */
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
import * as React from 'react';

import Icon from './icon/index';
import FooterBtn from './btn/FooterBtn';

function Footer(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('Step', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Container
      as="footer"
      bg="#18191F"
      maxWidth="100%"
      verticalAlign="center"
    >
      <Stack
        id="footer-content"
        textAlign="left middle"
        color="white"
        direction={{ base: 'column', md: 'row' }}
        justify="space-evenly"
        py={{ base: '6', md: '12' }}
        px="4"
      >
        <Stack
          minW="300px"
          spacing={{ base: '6', md: '8' }}
          align="start"
        >
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            px="0"
            marginInlineStart="0rem"
          >
            <Icon.SmallLogo />
            <Text
              align="left"
              direction="column"
              fontSize={{ base: 'xl', md: '4xl' }}
              fontWeight={900}
            >
              PenDown
            </Text>
          </Stack>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight={700}
          >
            Subscribe to get newsletter from us. You can cancel anytime.
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }}>
            <Input id="subscribe_input" placeholder="Enter your email" bg="white" type="email" required w="100%" />
            <Button id="subscribe_btn" variant="primary" type="submit" width="150px" flexShrink={0} _hover={{ color: 'black', bg: 'secondary.500' }}>
              Subscribe
            </Button>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            PenDown, Inc. All rights reserved.
          </Text>
        </Stack>
        <br />
        <SimpleGrid
          columns={2}
          verticalAlign="center"
          maxW="30%"
          minW="300px"
        >
          <FooterBtn>
            About
          </FooterBtn>
          <FooterBtn>
            Pricing
          </FooterBtn>
          <FooterBtn>
            Terms of Service
          </FooterBtn>
          <FooterBtn>
            Sign Up
          </FooterBtn>
          <FooterBtn>
            Privacy Policy
          </FooterBtn>
          <FooterBtn>
            Discover
          </FooterBtn>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Footer;
