/* eslint-disable react/react-in-jsx-scope */
import { Box, useStyleConfig } from '@chakra-ui/react';

function Card(props) {
  // const { variant, ...rest } = props;

  const styles = useStyleConfig('Card', { variant: props.variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} onClick={props.onClick}>{props.children}</Box>;
}

export default Card;
