import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

// pages
import Main from 'pages/Main.js';

// components
import Header from 'components/layout/Header';
import SideMenu from 'components/layout/SideMenu';

function App() {
  const onDragEnd = (result) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
}

export default App;
