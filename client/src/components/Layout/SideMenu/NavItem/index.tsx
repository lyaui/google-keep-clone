import { memo } from 'react';
import type { MouseEvent, MouseEventHandler } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import * as Icon from '@/components/UI/Icon';
import { useUI } from '@/contexts/UI-context';
import {
  SNavItem,
  SNavItemText,
} from '@/components/Layout/SideMenu/NavItem/style';
import Button from '@/components/UI/Buttons';

export interface NavItemProps {
  label: string;
  toRoute: string;
  type?: 'memo' | 'archive' | 'edit' | 'tag';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function NavItem({ toRoute, label, type = 'tag', onClick }: NavItemProps) {
  const location = useLocation();
  const { UIState } = useUI();

  const icon = (() => {
    if (type === 'memo') return <Icon.Bulb />;
    if (type === 'archive') return <Icon.Archive />;
    if (type === 'edit') return <Icon.EditOutline />;
    return <Icon.LabelOutline />;
  })();

  const preventSameRouteClickHandler = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    if (decodeURI(location.pathname) === toRoute) {
      event.preventDefault();
    }
    onClick && onClick(event);
  };

  return (
    <SNavItem isFixedMenu={UIState.isFixedMenu}>
      <NavLink
        to={toRoute}
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'var(--color-menu-active-bg)' : '',
        })}
        end
        onClick={preventSameRouteClickHandler}
      >
        <Button size="large">{icon}</Button>
        <SNavItemText>{label}</SNavItemText>
      </NavLink>
    </SNavItem>
  );
}

export default memo(NavItem);
