import { Switch, Route, Redirect } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { ROUTE } from 'constants/routes.js';
import MemoContextProvider, { useMemoContextVal } from 'contexts/memo-context.js';
import AuthContextProvider from 'contexts/auth-context.js';
import UIContextProvider from 'contexts/ui-context.js';
import Main from 'pages/Main.js';
import Login from 'pages/Login.js';

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
      <AuthContextProvider>
        <UIContextProvider>
          <MemoContextProvider>
            <main>
              <Switch>
                <Route path={[ROUTE.LOGIN, ROUTE.SIGNUP]}>
                  <Login />
                </Route>
                <Route path={ROUTE.LABEL}>
                  <Main />
                </Route>
                <Redirect to={ROUTE.LOGIN} />
              </Switch>
            </main>
          </MemoContextProvider>
        </UIContextProvider>
      </AuthContextProvider>
    </DragDropContext>
  );
}

export default App;
