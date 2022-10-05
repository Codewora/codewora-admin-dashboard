import {
  InfoCardStyled,
  InfoCardContainerStyled,
  InfoCardIconContainerStyled,
  InfoCardNameStyled,
  InfoCardCountStyled,
  InfoCardTextStyled,
  InfoCardDividerStyled
} from '../../styledcomponent';
import { useScreenSize } from '../../customHooks';

const CardDesign = ({details}: any) => {
  const screen = useScreenSize();
  const { icon, name, count, growth, color } = details;
  return (
    <InfoCardStyled screen={screen}>
      <InfoCardIconContainerStyled color={color}>
        {icon}
      </InfoCardIconContainerStyled>
      <InfoCardContainerStyled>
        <InfoCardNameStyled>{name}</InfoCardNameStyled>
        <InfoCardCountStyled>{count}</InfoCardCountStyled>
      </InfoCardContainerStyled>
      <InfoCardDividerStyled light />
      <InfoCardTextStyled>{growth}</InfoCardTextStyled>
    </InfoCardStyled>
  )
}

export default CardDesign;