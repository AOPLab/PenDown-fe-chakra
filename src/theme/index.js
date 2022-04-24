import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';

const direction = 'ltr';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = {
  direction,
  ...foundations,
  components,
  config,
};

export default extendTheme(theme);
