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
        children: [
          { index: true, element: <ROUTES.Projects.Thunkworks /> },
          { path: '/projects/tabindex', element: <ROUTES.Projects.TabIndex /> },
          { path: '/projects/v1', element: <ROUTES.Projects.V1 /> },
        ],
      },
      {
        path: '/sandbox',
        element: <ROUTES.Sandbox />,
        children: [
          { index: true, element: <ROUTES.Sandbox.Directory /> },
          { path: '/sandbox/accordion', element: <ROUTES.Sandbox.Accordion /> },
          { path: '/sandbox/action', element: <ROUTES.Sandbox.Action /> },
          { path: '/sandbox/button', element: <ROUTES.Sandbox.Button /> },
          { path: '/sandbox/control', element: <ROUTES.Sandbox.Control /> },
          { path: '/sandbox/checkbox', element: <ROUTES.Sandbox.Checkbox /> },
          { path: '/sandbox/select', element: <ROUTES.Sandbox.Select /> },
          { path: '/sandbox/switch', element: <ROUTES.Sandbox.Switch /> },
          { path: '/sandbox/tabs', element: <ROUTES.Sandbox.Tabs /> },
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
