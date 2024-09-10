import './style/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactRouterDOM from 'react-router-dom';

import { RootLayout } from './app';
import * as ROUTES from './routes';

const ROUTER = ReactRouterDOM.createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ROUTES.Error />,
    children: [
      {
        index: true,
        element: <ROUTES.Home />,
      },
      {
        path: '/workspace',
        element: <ROUTES.Workspace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouterDOM.RouterProvider router={ROUTER} />
  </React.StrictMode>
);
