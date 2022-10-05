import { styled } from '@mui/material/styles';
import {
  Box
} from '@mui/material';

const LayoutContainerStyled = styled(Box)(({ theme }) => ({
  padding: '0 !important',
  height: '100%',
  width: '100%',
  display: 'flex',
}));

const SidemenuContainerStyled: any = styled(Box)(({ theme, isCollapse }: any) => ({
  position: 'relative',
  transition: 'all .4s ease-in-out',
  width: isCollapse ? '100px' : '400px',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  background: theme.sidemenu.primaryBackground
}));

const HeaderContainerStyled: any = styled(Box)(({ theme }: any) => ({
  position: 'relative',
  transition: 'all .4s ease-in-out',
  width: '100%',
  height: '90px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding:'20px',
  background: theme.sidemenu.primaryBackground
}));


const ContentContainerStyled: any = styled(Box)(({ theme, screen, isCollapse }: any) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  padding: '10px',
  background: theme.content.secondaryBackground,
  overflowX: !isCollapse  && (screen === 'xs' || screen === 'sm') ? 'hidden' : 'auto'
}));

const ContainerStyled: any = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap'
}));



export {
  LayoutContainerStyled,
  SidemenuContainerStyled,
  ContentContainerStyled,
  HeaderContainerStyled,
  ContainerStyled
}