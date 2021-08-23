import { NavLink } from 'react-router-dom';
import * as Icon from 'components/UI/Icon.js';
import { SNavItem } from 'components/layout/SideMenu/NavItem/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

function NavItem({ id, label, type = 'tag' }) {
  const icon =
    type === 'memo' ? (
      <Icon.Bulb />
    ) : type === 'trash' ? (
      <Icon.DeleteOutline />
    ) : type === 'archive' ? (
      <Icon.Archive />
    ) : (
      <Icon.LabelOutline />
    );

  return (
    <SNavItem key={id}>
      <NavLink to={`/label/${label}`} activeStyle={{ backgroundColor: '#FEEFC3' }}>
        <ButtonRound size={48}>{icon}</ButtonRound>
        <span>{label}</span>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
