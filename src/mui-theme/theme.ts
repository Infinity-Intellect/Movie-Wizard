import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:446)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme;