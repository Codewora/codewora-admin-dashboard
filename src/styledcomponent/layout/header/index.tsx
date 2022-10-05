import { styled } from '@mui/material/styles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderCloseIcon = styled(MenuIcon)(({ theme }: any) => ({
  color: theme.sidemenu.primaryText
}));

const HeaderCloseOpen = styled(MenuOpenIcon)(({ theme }: any) => ({
  color: theme.sidemenu.primaryText
}));

export {
  HeaderCloseOpen,
  HeaderCloseIcon
}