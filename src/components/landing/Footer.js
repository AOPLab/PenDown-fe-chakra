import React, { useState } from 'react';
import {
  SimpleGrid,
  Stack,
  Text,
  Container,
  Input,
  Link,
} from '@chakra-ui/react';

import Icon from '../ui/icon/index';
import FooterBtn from '../ui/btn/FooterBtn';

function Footer(props) {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container as="footer" bg="gray.900" maxWidth="100%" verticalAlign="center">
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
        justifyContent="space-between"
      >
        <Stack minW="300px" spacing={{ base: '6', md: '8' }} align="start">
          <Text fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }} fontWeight={700}>
            Join our wait list to stay up-to-date. You can cancel anytime.
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }}>
            <Input
              id="subscribe_input"
              color="blackAlpha.700"
              borderRadius="pendown"
              placeholder="Enter your email"
              bg="white"
              type="email"
              _hover={{ borderColor: 'primary.400' }}
              focusBorderColor="primary.400"
              required
              w="70%"
              maxW="420px"
              size="lg"
              value={email}
              onChange={handleChange}
            />
            <Link
              id="subscribe_btn"
              textAlign="center"
              bg="black"
              color="white"
              border="2px solid white"
              borderRadius="pendown"
              _hover={{ color: 'black', bg: 'secondary.500' }}
              _focus={{ outline: 0 }}
              _active={{ outline: 0 }}
              p={2}
              type="submit"
              size="lg"
              fontSize="lg"
              fontWeight="bold"
              width="100px"
              flexShrink={0}
              href={'https://docs.google.com/forms/d/e/1FAIpQLSefrrxuqogFs3ICBQNP_YkWFCN6_O-kNOPuUART3rmIajJBww/viewform?entry.1387188781='.concat(email)}
              isExternal
            >
              Join
            </Link>
          </Stack>
        </Stack>
        <br />
        <SimpleGrid columns={2} verticalAlign="center" height={{ base: '200px', sm: '100px' }} maxW="30%" minW="350px" spacing={4}>
          <FooterBtn href="https://aoplab.notion.site/About-d39c56d855d449d186f90a20a9d0e451">About</FooterBtn>
          <FooterBtn href="https://pendown.icheft.tech/account/payment">Pricing</FooterBtn>
          <FooterBtn href="https://aoplab.notion.site/Terms-Conditions-b11f01b49f4442f981df634bcd5f8cb2">Terms & Conditions</FooterBtn>
          <FooterBtn href="https://pendown.icheft.tech/register">Sign Up</FooterBtn>
          <FooterBtn href="https://aoplab.notion.site/Privacy-Policy-a99071c9717b4261b1f1889944795892">Privacy Policy</FooterBtn>
          <FooterBtn href="https://pendown.icheft.tech/search/all">Discover</FooterBtn>
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
