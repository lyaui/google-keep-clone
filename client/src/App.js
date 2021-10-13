import { Switch, Route, Redirect } from 'react-router-dom';
import Toast from 'components/UI/Toast';
import { DragDropContext } from 'react-beautiful-dnd';
import { ROUTE } from 'constants/routes.js';
import MemoContextProvider, { useMemoContextVal } from 'contexts/memo-context.js';
import { AuthProvider, useAuth } from 'contexts/auth-context';
import { UIProvider } from 'contexts/UI-context/index.js';
import Main from 'pages/Main.js';
import Login from 'pages/Login.js';

function App() {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { setMemos } = useMemoContextVal();

  const onDragEnd = () => {
    setMemos([{ id: 'c12', color: '#e8eaed', title: 'gray', content: 'gray' }]);
    // const { draggableId, source, destination } = result;
    // // 若不在 droppable 的範圍內
    // if (!destination) return;
    // // 若位置沒有改變
    // if (source.droppableId === destination.droppableId && source.index === destination.index)
    //   return;
    // setMemos();
    // const column =
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AuthProvider>
        <UIProvider>
          <MemoContextProvider>
            <main>
              <Switch>
                <Route path={[ROUTE.LOGIN, ROUTE.SIGNUP]}>
                  <Login />
                </Route>
                <Route path={[ROUTE.LABEL, ROUTE.HOME]}>
                  <Main />
                </Route>
                <Redirect to={ROUTE.LOGIN} />
              </Switch>
            </main>
            <Toast />
          </MemoContextProvider>
        </UIProvider>
      </AuthProvider>
    </DragDropContext>
  );
}

export default App;
