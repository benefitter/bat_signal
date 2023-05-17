import { extendTheme } from 'native-base';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    uhcBlue: {
      600: '#002660',
      700: '#002666',
      800: '#002670',
      900: '#002677',
    },
    uhcCtaBlue: {
      900: '#196ECF',
    },
    uhcBrightBlue: {
      100: '#E5F8FB',
      200: '#CCF2F7',
      400: '#99E5EE',
      900: '#00BED5',
    },
    uhcGray: {
      100: '#FBFBFB',
      200: '#F4F4F4',
      300: '#E9E9E9',
      400: '#DADBDC',
      500: '#6F6F6F',
      600: '#5A5A5A',
      700: '#333333',
    },
  },
  fonts: {},
});

export default theme;
