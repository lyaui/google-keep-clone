import styled from 'styled-components/macro';
import { SNavItemText } from 'components/Layout/SideMenu/NavItem/style.js';

export const SSideMenu = styled.aside`
  width: var(--width);
  height: 100%;
  padding-right: 12px;
  position: var(--position);
  z-index: 10;
  background-color: var(--color-bg);
  overflow: scroll;
  transition: all 0.3s;

  :hover {
    width: 280px;
    box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%),
      0px 2px 4px -1px rgb(0 0 0 / 20%);
  }

  :hover ${SNavItemText} {
    opacity: 0.9;
    width: 100%;
  }
`;

export const SSideMenuList = styled.ul`
  padding: 0;
  margin-bottom: 80px;
`;
