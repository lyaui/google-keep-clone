import styled from 'styled-components';
import { SNavItemText } from '@/components/Layout/SideMenu/NavItem/style.jsx';
import { SNavItem } from '@/components/Layout/SideMenu/NavItem/style.jsx';

export const SSideMenu = styled.aside`
  width: var(--width);
  height: 100%;
  padding-right: 12px;
  position: var(--position);
  z-index: var(--zindex-sideMenu);
  background-color: var(--color-bg);
  overflow: scroll;
  transition: width 0.3s;

  :hover {
    width: 280px;
    box-shadow: var(--shadow-lg);
  }

  :hover ${SNavItemText} {
    opacity: 0.9;
    width: 100%;
  }

  :hover ${SNavItem} {
    margin-left: -20px;
    padding-left: 20px;
    button {
      margin-left: 15px;
    }
  }
`;

export const SSideMenuList = styled.ul`
  padding: 0;
  margin-bottom: 80px;
`;
