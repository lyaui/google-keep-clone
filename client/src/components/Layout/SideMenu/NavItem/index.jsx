import { NavLink } from 'react-router-dom';
import * as Icon from '@/components/UI/Icon';

import {
  SNavItem,
  SNavItemText,
} from '@/components/Layout/SideMenu/NavItem/style';
import Button from '@/components/UI/Buttons';

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
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'var(--color-menu-active-bg)' : '',
        })}
        end
      >
        <Button size="large">{icon}</Button>
        <SNavItemText>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
