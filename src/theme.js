import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      light: '#fdd835',
      main: '#fdd835',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Inter", "Arial", sans-serif',
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    button: { textTransform: "none" },
  },
});


export default theme;