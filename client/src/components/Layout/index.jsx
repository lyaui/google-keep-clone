import { Fragment } from 'react';
import { useUI } from '@/contexts/UI-context';

import Header from '@/components/Layout/Header';
import SideMenu from '@/components/Layout/SideMenu';
import { SContainer } from '@/components/Layout/style';

const Layout = ({ children }) => {
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
          {children}
        </main>
      </SContainer>
    </Fragment>
  );
};

export default Layout;
