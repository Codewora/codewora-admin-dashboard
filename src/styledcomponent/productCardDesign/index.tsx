import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductCardStyled: any = styled('div')(({ theme, screen }: any) => ({
  position: 'relative',
  width: screen === 'xs' || screen === 'sm' ? '100%' : screen === 'md' ? '40%' : '22%',
  minWidth: '300px',
  minHeight: '400px',
  padding: '10px',
  margin: '40px 10px 20px 10px',
  border: `1px solid ${theme.content.borderColor}`,
  borderRadius: '10px'
}));

const ProductCardIconContainerStyled = styled('div')(({ theme, color }:any) => ({
  height: '200px',
  width: '100%',
  padding: '8px',
  borderRadius: '7px',
  transform: 'translateY(-40px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.content.ternaryBackground,
  boxShadow: `${theme.content.boxShadow} 0px 7px 29px 0px`,
  color: '#ffffff'
}));

const ProductCardImageStyled = styled('img')(({ theme, color }:any) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '7px',
}));

const ProductCardTitleStyled = styled('div')(({ theme, color }:any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 900,
  paddingBottom: '10px',
  color: theme.content.primaryText
}));

const ProductCardDescriptionStyled = styled('div')(({ theme, color }:any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign:'center',
  padding: '10px 0',
  color: theme.content.secondaryText,
  fontSize: '13px'
}));

const ProductCardContainerStyled = styled('div')(({ theme }:any) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flexDirection: 'column'
}));

const ProductCardTextContainerStyled = styled('p')(({ theme }:any) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const ProductCardTextStyled = styled('p')(({ theme }:any) => ({
  padding: '10px 0',
  fontSize: '13px',
  color: theme.content.secondaryText
}));

const ProductCardDividerStyled = styled(Divider)(({ theme }:any) => ({
  borderColor: theme.content.borderColor
}));

export {
  ProductCardStyled,
  ProductCardContainerStyled,
  ProductCardIconContainerStyled,
  ProductCardTextStyled,
  ProductCardTitleStyled,
  ProductCardDescriptionStyled,
  ProductCardTextContainerStyled,
  ProductCardImageStyled,
  ProductCardDividerStyled
};
