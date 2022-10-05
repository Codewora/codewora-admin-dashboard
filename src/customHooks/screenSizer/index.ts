import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const useScreenSize = () => {
  const theme = useTheme();
  const screenValue: any = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl'))
  };
  const screen = Object.keys(screenValue).filter((item) => screenValue[item]);

  return screen[screen.length - 1];
};
