import { Fragment } from 'react';
import Header from 'components/Layout/Header';
import SideMenu from 'components/Layout/SideMenu';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className='notes-container'>
        <SideMenu />
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
