import { styled } from '@mui/material/styles';
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box
} from '@mui/material';

const CompanyLogoStyled = styled(Box)(({ theme }: any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  fontWeight: 900,
  fontSize: '30px',
  color: theme.sidemenu.primaryText
}));

const ListButtonStyled = styled(ListItemButton)(({ theme }: any) => ({
  color: theme.sidemenu.primaryText
}));

const ListTextStyled = styled(ListItemText)(({ theme }: any) => ({
  color: theme.sidemenu.primaryText
})); 

const ListIconStyled = styled(ListItemIcon)(({ theme }: any) => ({
  display: 'flex !important',
  justifyContent: 'center !important',
  color: theme.sidemenu.primaryText
})); 

const UserProfileStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  padding: '20px',
  left: 0,
  color: 'white'
}));

const UserProfileImageStyled: any = styled('img')(({ theme, isCollapse }: any) => ({
  width: isCollapse ? '50px': '80px',
  border: `4px solid ${theme?.sidemenu?.borderColor}`,
  borderRadius: '20px',
  marginBottom: '20px'
}));

const UserNameStyled = styled('p')(({ theme }: any) => ({
  fontWeight: 900,
  color: theme.sidemenu.primaryText
}));

export {
  ListButtonStyled,
  ListTextStyled,
  ListIconStyled,
  CompanyLogoStyled,
  UserProfileStyled,
  UserProfileImageStyled,
  UserNameStyled
}