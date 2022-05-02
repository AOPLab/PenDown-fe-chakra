export default {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
    border: '2px',
    borderRadius: 'pendown',
  },
  // 2. We can add a new button size or extend existing
  // sizes: {
  //   lg: {
  //     h: '56px',
  //     fontSize: 'lg',
  //     px: '32px',
  //   },
  // },
  // 3. We can add a new visual variant
  variants: {

    clean: {
      border: 'none',
      borderRadius: '8px',
      padding: '5px',
      _hover: { bg: 'gray.100' },
      _focus: { outline: 0 },
    },
    pendown: {
      _hover: { boxShadow: '0px 4px 0px #18191F', filter: 'brightness(99%)' },
      _focus: { outline: 0 },
    },
    // 'pendown-primary': {
    //   border: '2px solid',
    //   padding: '0px',
    //   bg: 'primary.500',
    //   color: 'black',
    //   _hover: { boxShadow: '0px 4px 0px #18191F', bg: 'primary.600' },
    //   _focus: { outline: 0 },
    // },
    'pendown-yellow': {
      border: '2px solid',
      padding: '0px',
      bg: 'white',
      _hover: { boxShadow: '0px 4px 0px #18191F', bg: 'primary.100' },
      _focus: { outline: 0 },
    },
    'pendown-round': {
      border: '2px solid',
      borderRadius: '50%',
      padding: '0px',
      bg: 'white',
      _hover: { boxShadow: '0px 4px 0px #18191F', bg: 'primary.100' },
      _focus: { outline: 0 },
    },
    'pendown-primary': {
      bg: 'primary.300',
      color: 'black',
      _hover: { boxShadow: '0px 4px 0px #18191F', bg: 'primary.400' },
      _focus: { outline: 0 },
      _active: { outline: 0 },
    },
    // 4. We can override existing variants
    // solid: (props) => ({
    //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
  },
};
