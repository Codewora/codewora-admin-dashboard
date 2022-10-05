import { Fragment, useState } from 'react';
import {
  List,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { menu } from '../../routes';
import {
  ListButtonStyled,
  ListTextStyled,
  ListIconStyled,
  CompanyLogoStyled,
  UserProfileStyled,
  UserProfileImageStyled,
  UserNameStyled
} from '../../styledcomponent';
import logo from './profile.jpeg';
import ThemeToggler from '../../components/themeToggler';

const SideMenu: any = ({ isCollapse }: any) => {
  const [openMenu, setOpenMenu] = useState<any>({});


  const SingleList = ({ item }: any) => {
    return (
      <ListButtonStyled>
        {item.icon && <ListIconStyled>{item.icon}</ListIconStyled>}
        {!isCollapse && <ListTextStyled primary={item.title} />}
      </ListButtonStyled>
    );
  };

  const MultiLeveList = ({ item }: any) => {
    const handleClick = () => {
      const tempOpenMenu = openMenu;
      tempOpenMenu[item.title] = !openMenu[item.title];
      setTimeout(() => {
        setOpenMenu({...tempOpenMenu});
      },200)
    };
    return (
      <Fragment>
        <ListButtonStyled onClick={handleClick}>
          {item.icon && <ListIconStyled>{item.icon}</ListIconStyled>}
          {!isCollapse && <ListTextStyled primary={item.title} />}
          {!isCollapse &&
            (openMenu[item.title] ? <ExpandLess /> : <ExpandMore />)}
        </ListButtonStyled>
          <Collapse
            in={openMenu[item.title]}
            style={{ paddingLeft: isCollapse ? 0 : '40px' }}
            timeout='auto'
            unmountOnExit
          >
            <List component='div' disablePadding>
              {item.items.map((child: any, key: any) => (
                <MenuItemRender key={key} item={child} />
              ))}
            </List>
          </Collapse>
      </Fragment>
    );
  };

  const MenuItemRender = ({ item }: any) => {
    const ListComponent =
      item.hasOwnProperty('items') && item.items.length
        ? MultiLeveList
        : SingleList;
    return <ListComponent item={item} />;
  };

  return (
    <Fragment>
      <CompanyLogoStyled>{isCollapse ? 'C' : 'Codewora'}</CompanyLogoStyled>
      {menu.map((item, key) => (
        <MenuItemRender key={key} item={item} />
      ))}
      <UserProfileStyled>
        <UserProfileImageStyled src={logo} isCollapse={isCollapse}/>
        {
          !isCollapse && <UserNameStyled>Software Developer</UserNameStyled>
        }
        <ThemeToggler/>
      </UserProfileStyled>
    </Fragment>
  );
};

export default SideMenu;
