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
        path: '/about',
        element: <ROUTES.About />,
      },
      {
        path: '/contact',
        element: <ROUTES.Contact />,
      },
      {
        path: '/projects',
        element: <ROUTES.Projects />,
      },
      {
        path: '/sandbox',
        element: <ROUTES.Sandbox />,
        children: [
          { path: '/sandbox/action', element: <ROUTES.Sandbox.Action /> },
          { path: '/sandbox/button', element: <ROUTES.Sandbox.Button /> },
          { path: '/sandbox/select', element: <ROUTES.Sandbox.Select /> },
          { path: '/sandbox/switch', element: <ROUTES.Sandbox.Switch /> },
        ],
      },
      {
        path: '/stack',
        element: <ROUTES.Stack />,
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
