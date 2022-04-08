const light = {
  colors: {
    primary: '#5964E0',
    primaryLighter: '#939BF4',
    secondary: '#19202D',
    secondaryDarker: '#121721',
    white: '#fff',
    whiteDarker: '#f9f9f9',
    gray: '#9DAEC2',
    darkGray: '#6E8098',
  },

  fonts: {
    heading: 'Lexend',
    default: 'Inter',
  },

  borderRadius: '8px',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 24px',

  mediaQueries: {
    xsmall: '530px',
    small: '640px',
    medium: '960px',
    large: '1280px',
  },
} as const;

const dark = {
  ...light,

  boxShadow: '0',

  colors: {
    primary: '#5964E0',
    primaryLighter: '#939BF4',
    white: '#19202D',
    whiteDarker: '#121721',
    secondary: '#fff',
    secondaryDarker: '#f9f9f9',
    gray: '#9DAEC2',
    darkGray: '#6E8098',
  },
} as const;

export { light, dark };
