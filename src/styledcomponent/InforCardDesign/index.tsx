import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const InfoCardStyled: any = styled('div')(({ theme, screen }: any) => ({
  position: 'relative',
  width: screen === 'xs' || screen === 'sm' ? '100%' : '22%',
  minWidth: '250px',
  padding: '10px',
  margin: '40px 10px 20px 10px',
  border: `1px solid ${theme.content.borderColor}`,
  borderRadius: '10px'
}));

const InfoCardIconContainerStyled = styled('div')(({ theme, color }:any) => ({
  height: '60px',
  width: '60px',
  padding: '13px',
  borderRadius: '7px',
  position: 'absolute',
  top: '-30px',
  left: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: color,
  boxShadow: `${theme.content.boxShadow} 0px 7px 29px 0px`,
  color: theme.content.iconColor
}));


const InfoCardContainerStyled = styled('div')(({ theme }:any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flexDirection: 'column'
}));

const InfoCardNameStyled = styled('p')(({ theme }:any) => ({
  fontWeight: 900,
  color: theme.content.primaryText
}));


const InfoCardCountStyled = styled('p')(({ theme }:any) => ({
  padding: '10px 0',
  fontSize: '13px',
  fontWeight: 600,
  color: theme.content.secondaryText
}));

const InfoCardTextStyled = styled('p')(({ theme }:any) => ({
  padding: '10px 0',
  fontSize: '13px',
  color: theme.content.secondaryText
}));

const InfoCardDividerStyled = styled(Divider)(({ theme }:any) => ({
  borderColor: theme.content.borderColor
}));

export {
  InfoCardStyled,
  InfoCardContainerStyled,
  InfoCardIconContainerStyled,
  InfoCardNameStyled,
  InfoCardCountStyled,
  InfoCardTextStyled,
  InfoCardDividerStyled
};
