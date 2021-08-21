import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from 'pages/Main.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <main>
          <Route path='/:label'>
            <Main />
          </Route>
          <Redirect to='/home' />
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
