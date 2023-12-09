import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const Label = lazy(() => import('@/pages/Label'));
const Archive = lazy(() => import('@/pages/Archive'));
const Search = lazy(() => import('@/pages/Search'));
const EditModal = lazy(() => import('@/components/EditModal'));
const Layout = lazy(() => import('@/components/Layout'));

export const ROUTER_PATH = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  LABEL: '/label/:labelName',
  MEMO: '/memo/:memoId',
  ARCHIVE: '/archive',
  SEARCH: '/search',
  BUILD_LABEL_PATH: (labelName) => `/label/${labelName}`,
  BUILD_MEMO_PATH: (memoId) => `/memo/${memoId}`,
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTER_PATH.SIGNUP,
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: ROUTER_PATH.HOME,
      },
      {
        element: <Label />,
        path: ROUTER_PATH.LABEL,
      },
      {
        element: <Archive />,
        path: ROUTER_PATH.ARCHIVE,
      },
      {
        element: <Search />,
        path: ROUTER_PATH.SEARCH,
      },
      {
        element: <EditModal />,
        path: ROUTER_PATH.MEMO,
      },
    ],
  },
]);
