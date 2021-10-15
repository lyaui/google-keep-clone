import { Switch, Route, Redirect } from 'react-router-dom';
import Toast from 'components/UI/Toast';
import { DragDropContext } from 'react-beautiful-dnd';
import { ROUTE } from 'constants/routes.js';
import { AuthProvider, useAuth } from 'contexts/auth-context';
import { UIProvider } from 'contexts/UI-context/index.js';
import Main from 'pages/Main.js';
import Login from 'pages/Login.js';

function App() {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;

  const onDragEnd = () => {
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
        </UIProvider>
      </AuthProvider>
    </DragDropContext>
  );
}

export default App;
