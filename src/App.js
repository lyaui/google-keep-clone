import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

// contexts
import MemoContextProvider, { useMemoContextVal } from 'contexts/memo-context.js';
import UIContextProvider from 'contexts/ui-context.js';
// pages
import Main from 'pages/Main.js';

// components
import Header from 'components/layout/Header';
import SideMenu from 'components/layout/SideMenu';

function App() {
  const { setMemos } = useMemoContextVal();

  const onDragEnd = () => {
    setMemos([{ id: 'c12', color: '#e8eaed', title: 'gray', content: 'gray' }]);
    // const { draggableId, source, destination } = result;
    // // 若不在 droppable 的範圍內
    // if (!destination) return;
    // // 若位置沒有改變
    // if (source.droppableId === destination.droppableId && source.index === destination.index)
    //   return;
    // console.log(draggableId);
    // setMemos();
    // const column =
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <UIContextProvider>
        <MemoContextProvider>
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
        </MemoContextProvider>
      </UIContextProvider>
    </DragDropContext>
  );
}

export default App;
