import { NavLink } from 'react-router-dom';
import * as Icon from '@/components/UI/Icon/index.jsx';
import {
  SNavItem,
  SNavItemText,
} from '@/components/Layout/SideMenu/NavItem/style.jsx';
import { ButtonRound } from '@/components/UI/Buttons/index.jsx';

function NavItem({ navItemStyle, toRoute, label, type = 'tag' }) {
  const icon =
    type === 'memo' ? (
      <Icon.Bulb />
    ) : type === 'archive' ? (
      <Icon.Archive />
    ) : (
      <Icon.LabelOutline />
    );

  return (
    <SNavItem style={navItemStyle}>
      <NavLink
        to={toRoute}
        activeStyle={{ backgroundColor: 'var(--color-menu-active-bg)' }}
      >
        <ButtonRound size={40}>{icon}</ButtonRound>
        <SNavItemText>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
