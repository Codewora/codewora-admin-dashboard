import SideMenu  from './sidemenu';
import { LayoutContainerStyled,SidemenuContainerStyled,ContentContainerStyled } from '../styledcomponent';
import { useEffect, useState } from 'react';
import Header from './header';
import { useScreenSize } from '../customHooks';
const AdminLayout = ({children, headerFixed}: any) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [collapseEventName, setCollapseEventName] = useState('');
  const screen = useScreenSize();

  const menuToggleHandler = () => {
    if (isCollapse) {
      setIsCollapse(false);
      setCollapseEventName('');
      return
    }
    setIsCollapse(true);
    setCollapseEventName('CLICK');
  }

  const mouseEnterHandler = () => {
    if (collapseEventName === 'CLICK' && isCollapse && !(screen === 'xs') && !(screen === 'sm')) {
      setIsCollapse(false);
    }

  }

  const mouseLeaveHandler = () => {
    if (collapseEventName === 'CLICK' && !isCollapse  && !(screen === 'xs') && !(screen === 'sm')) {
      setIsCollapse(true);
      
    }
    
  }


  useEffect(() => {
    if (screen === 'xs' || screen === 'sm') {
      setCollapseEventName('')
      setIsCollapse(true)
    }
    console.log(screen)
  },[screen])

  return (
    <LayoutContainerStyled>
      <SidemenuContainerStyled
        isCollapse={isCollapse}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <SideMenu isCollapse={isCollapse}/>
      </SidemenuContainerStyled>
      <ContentContainerStyled screen={screen} isCollapse={isCollapse}>
        <Header isCollapse={isCollapse} menuToggleHandler={menuToggleHandler}/>
        {children}
      </ContentContainerStyled> 
    </LayoutContainerStyled>
  )
}

export default AdminLayout;