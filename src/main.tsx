import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/main.scss';

import { Root } from '@/app';
import { Home, Demo, Toolbox, Sandbox } from '@/app/pages';
import { OnBoardScreen, PageError404 } from './app/screens';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError404 />,
    children: [
      { index: true, element: <Home /> },
      { path: '/onboard', element: <OnBoardScreen /> },
      { path: '/sandbox', element: <Sandbox /> },
      { path: '/toolbox', element: <Toolbox /> },
      {
        path: '/demo',
        element: <Demo />,
        children: [],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
