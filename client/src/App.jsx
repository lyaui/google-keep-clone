import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { router } from '@/routes';
import { memosActions } from '@/store/memosSlice';
import Toast from '@/components/UI/Toast';
import { useAuth, logout } from '@/contexts/auth-context';

let logoutTimer;

function App() {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const { tasks } = memo;
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn, expiration } = authState;

  // auto logout
  // useEffect(() => {
  //   if (isLoggedIn && expiration) {
  //     const expireTimestamp = new Date(expiration).getTime();
  //     const remainingTime = expireTimestamp - new Date().getTime();
  //     logoutTimer = setTimeout(() => {
  //       logout(authDispatch);
  //     }, remainingTime);
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // }, [isLoggedIn, authDispatch, expiration]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // if item is not in the destination scope
    if (!destination) return;

    // if item is in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    let arr = [...tasks];
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, remove);
    dispatch(memosActions.updateMemo({ tasks: arr }));
  };

  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Toast />
        </DragDropContext>
      </RouterProvider>
    </Suspense>
  );
}

export default App;