import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// pages
import Main from 'pages/Main.js';

// components
import Header from 'components/layout/Header';
import SideMenu from 'components/layout/SideMenu';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='notes-containe'>
        <SideMenu />
        <Switch>
          <main>
            <Route path='/:label'>
              <Main />
            </Route>
            <Redirect to='/home' />
          </main>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
