import * as React from 'react';
import { Box, Button, useStyleConfig } from '@chakra-ui/react';

function FooterBtn(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('FooterBtn', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box textAlign="left">
      <Button
        variant="link"
        border="none"
        borderRadius="pendown"
        color="white"
        fontSize={{ sm: '0.8em', md: '1em' }}
        _hover={{ color: 'primary.500' }}
        _focus={{ borderRadius: 'pendown' }}
      >
        {props.children}
      </Button>
    </Box>
  );
}

export default FooterBtn;
