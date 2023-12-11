import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useUI } from '@/contexts/UI-context';
import Header from '@/components/Layout/Header';
import SideMenu from '@/components/Layout/SideMenu';

export const SContainer = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 64px;
  main {
    width: 100%;
    overflow: scroll;
  }
`;

function Layout() {
  const { UIState } = useUI();
  return (
    <Fragment>
      <Header />
      <SContainer>
        <SideMenu />
        <main
          style={{
            padding: UIState.isFixedMenu
              ? '0px 80px 40px 80px'
              : '0px 80px 40px 100px',
          }}
        >
          <Outlet />
        </main>
      </SContainer>
    </Fragment>
  );
}

export default Layout;
