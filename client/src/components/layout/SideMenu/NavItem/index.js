import { NavLink } from 'react-router-dom';
import * as Icon from 'components/UI/Icon.js';
import { SNavItem, SNavItemText } from 'components/layout/SideMenu/NavItem/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { useUIContextVal } from 'contexts/ui-context.js';

function NavItem({ id, label, type = 'tag' }) {
  const { CTX_FIXMENU } = useUIContextVal();
  const icon =
    type === 'memo' ? (
      <Icon.Bulb />
    ) : type === 'edit' ? (
      <Icon.EditOutline />
    ) : type === 'archive' ? (
      <Icon.Archive />
    ) : (
      <Icon.LabelOutline />
    );

  return (
    <SNavItem key={id}>
      <NavLink to={`/label/${label}`} activeStyle={{ backgroundColor: '#FEEFC3' }}>
        <ButtonRound size={40}>{icon}</ButtonRound>
        <SNavItemText isFixedMenu={CTX_FIXMENU.isFixedMenu}>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
