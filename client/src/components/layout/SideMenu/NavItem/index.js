import { NavLink } from 'react-router-dom';
import * as Icon from 'components/UI/Icon/index.js';
import { ROUTE } from 'constants/routes.js';
import { SNavItem, SNavItemText } from 'components/Layout/SideMenu/NavItem/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

function NavItem({ id, label, type = 'tag' }) {
  const icon =
    type === 'memo' ? <Icon.Bulb /> : type === 'archive' ? <Icon.Archive /> : <Icon.LabelOutline />;

  return (
    <SNavItem key={id}>
      <NavLink to={ROUTE.BUILD_LABEL_PATH(label)} activeStyle={{ backgroundColor: '#FEEFC3' }}>
        <ButtonRound size={40}>{icon}</ButtonRound>
        <SNavItemText>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default NavItem;
