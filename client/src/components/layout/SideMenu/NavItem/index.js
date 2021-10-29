import { NavLink } from 'react-router-dom';
import * as Icon from 'components/UI/Icon/index.js';

import { SNavItem, SNavItemText } from 'components/Layout/SideMenu/NavItem/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

function NavItem({ toRoute, label, type = 'tag' }) {
  const icon =
    type === 'memo' ? <Icon.Bulb /> : type === 'archive' ? <Icon.Archive /> : <Icon.LabelOutline />;

  return (
    <SNavItem>
      <NavLink to={toRoute} activeStyle={{ backgroundColor: 'var(--color-menu-active-bg)' }}>
        <ButtonRound size={40}>{icon}</ButtonRound>
        <SNavItemText>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
