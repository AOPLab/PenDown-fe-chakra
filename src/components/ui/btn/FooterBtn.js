/* eslint-disable react/react-in-jsx-scope */
import { Box, Button, useStyleConfig } from '@chakra-ui/react';

function FooterBtn(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('FooterBtn', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box as="button" textAlign="left">
      <Button
        variant="link"
        border="none"
        borderRadius="pendown"
        color="white"
        _hover={{ color: 'primary.500' }}
        _focus={{ borderRadius: 'pendown' }}
      >
        {props.children}
      </Button>
    </Box>
  );
}

export default FooterBtn;
