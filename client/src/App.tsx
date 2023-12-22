import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';
import Toast from '@/components/UI/Toast';
import { useAuth, logout } from '@/contexts/auth-context';

let logoutTimer: NodeJS.Timeout;

function App() {
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn, expiration } = authState;

  // auto logout
  useEffect(() => {
    if (isLoggedIn && expiration) {
      const expireTimestamp = new Date(expiration).getTime();
      const remainingTime = expireTimestamp - new Date().getTime();
      logoutTimer = setTimeout(() => {
        logout(authDispatch);
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [isLoggedIn, authDispatch, expiration]);

  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router} />
      <Toast />
    </Suspense>
  );
}

export default App;
