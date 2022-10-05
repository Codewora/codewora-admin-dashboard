import {Divider} from '@mui/material';
import {
  ProductCardStyled,
  ProductCardContainerStyled,
  ProductCardIconContainerStyled,
  ProductCardTextStyled,
  ProductCardTitleStyled,
  ProductCardDescriptionStyled,
  ProductCardTextContainerStyled,
  ProductCardImageStyled,
  ProductCardDividerStyled
} from '../../styledcomponent';
import { useScreenSize } from '../../customHooks';

const ProductCardDesign = ({details}: any) => {
  const { url, title, description, price, count } = details;
  const screen = useScreenSize();
  
  return (
    <ProductCardStyled  screen={screen}>
      <ProductCardIconContainerStyled>
        <ProductCardImageStyled src={url} />
      </ProductCardIconContainerStyled>
      <ProductCardContainerStyled>
        <ProductCardTitleStyled>{title}</ProductCardTitleStyled>
        <ProductCardDescriptionStyled>
        {description}
        </ProductCardDescriptionStyled>
      </ProductCardContainerStyled>
      <ProductCardDividerStyled />
      <ProductCardTextContainerStyled>
        <ProductCardTextStyled>{price}</ProductCardTextStyled>
        <ProductCardTextStyled>{count}</ProductCardTextStyled>
      </ProductCardTextContainerStyled>
    </ProductCardStyled>
  )
}

export default ProductCardDesign;