const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'center',
    gap: 2,
    border: '2px',
    borderRadius: 'pendown',
    _hover: { boxShadow: '0px 4px 0px #18191F' },
  },
  // Two variants: rounded and smooth
  variants: {
    pendown: {
      padding: 6,
      borderRadius: 'pendown',
      transition: '.2s ease-in-out',
      _hover: { boxShadow: '0px 4px 0px #18191F', transform: 'translateY(-5px) scale(1.02)' },
    },
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
};

export default Card;
