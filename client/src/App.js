import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice/index.js';
import Toast from 'components/UI/Toast';
import { DragDropContext } from 'react-beautiful-dnd';
import { ROUTE } from 'constants/routes.js';
import { useAuth } from 'contexts/auth-context';
import Layout from 'components/Layout';
import Login from 'pages/Login.js';
import Home from 'pages/Home.js';
import Label from 'pages/Label.js';
import Archive from 'pages/Archive.js';
import Search from 'pages/Search.js';
import EditModal from 'components/EditModal';

function App() {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const { tasks } = memo;
  const { authState } = useAuth();
  const { isLoggedIn } = authState;

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // if item is not in the destination scope
    if (!destination) return;

    // if item is in the same position
    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    let arr = [...tasks];
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, remove);
    dispatch(memosActions.updateMemo({ tasks: arr }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Switch>
        <Route path={[ROUTE.LOGIN, ROUTE.SIGNUP]} component={Login} />
        {isLoggedIn && (
          <Route path={[ROUTE.HOME, ROUTE.LABEL, ROUTE.MEMO, ROUTE.ARCHIVE, ROUTE.SEARCH]}>
            <Layout>
              <Route path={ROUTE.HOME} component={Home} exact />
              <Route path={ROUTE.LABEL} component={Label} exact />
              <Route path={ROUTE.ARCHIVE} component={Archive} exact />
              <Route path={ROUTE.SEARCH} component={Search} exact />
              <Route path={ROUTE.MEMO} component={EditModal} exact />
            </Layout>
          </Route>
        )}
        <Redirect to={ROUTE.LOGIN} />
      </Switch>
      <Toast />
    </DragDropContext>
  );
}

export default App;
