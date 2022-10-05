import {
  HeaderCloseOpen,
  HeaderCloseIcon, 
  HeaderContainerStyled
} from '../../styledcomponent';
import { Input } from '../../components/index';

const Header = ({ menuToggleHandler, isCollapse }: any) => {
  const SidemenuToggler = isCollapse  ? HeaderCloseIcon : HeaderCloseOpen
  return (
    <HeaderContainerStyled>
      <SidemenuToggler style={{ cursor: 'pointer' }} onClick={menuToggleHandler} />
      <Input />
    </HeaderContainerStyled>
  )
}

export default Header;