import * as React from 'react';
import {
  Box, Button, Link,
} from '@chakra-ui/react';

function FooterBtn(props) {
  return (
    <Box textAlign="left">
      <Link href={props.href} passHref isExternal>
        <Button
          as="a"
          variant="link"
          border="none"
          borderRadius="pendown"
          color="white"
          fontSize="md"
          _hover={{ color: 'primary.500' }}
          _focus={{ borderRadius: 'pendown' }}
        >
          {props.children}
        </Button>
      </Link>
    </Box>
  );
}

export default FooterBtn;
