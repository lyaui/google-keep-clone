import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { useUI } from '@/contexts/UI-context';
import Header from '@/components/Layout/Header';
import SideMenu from '@/components/Layout/SideMenu';
import { SContainer } from '@/components/Layout/style';

function Layout() {
  const { UIState } = useUI();
  return (
    <Fragment>
      <Header />
      <SContainer>
        <SideMenu />
        <main
          style={{
            '--padding': UIState.isFixedMenu
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
