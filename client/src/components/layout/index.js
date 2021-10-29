import { Fragment } from 'react';
import Header from 'components/Layout/Header';
import SideMenu from 'components/Layout/SideMenu';
import { SContainer } from 'components/Layout/style.js';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <SContainer>
        <SideMenu />
        <main>{children}</main>
      </SContainer>
    </Fragment>
  );
};

export default Layout;
