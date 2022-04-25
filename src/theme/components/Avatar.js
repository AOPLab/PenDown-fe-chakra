export default {
  // 1. We can update the base styles
  // baseStyle: {
  //   fontWeight: 'bold', // Normally, it is "semibold"
  //   border: '2px',
  //   borderRadius: 'pendown',
  // },
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

    'pendown-navbar': {

      _hover: { boxShadow: '0px 4px 0px #18191F', filter: 'brightness(99%)' },
      _focus: { outline: 0 },
    },
    // 4. We can override existing variants
    // solid: (props) => ({
    //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
  },
};
