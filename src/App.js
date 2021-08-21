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
      <div className='notes-container'>
        <SideMenu />
        <main>
          <Switch>
            <Route path='/:label'>
              <Main />
            </Route>
            <Redirect to='/home' />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
