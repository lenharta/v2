import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/main.scss';
import App from './app';
import * as Route from './app/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>App Error</div>,
    children: [
      { index: true, element: <Route.Home />, errorElement: <div>404</div> },
      { path: '/demo', element: <Route.Demo />, errorElement: <div>404</div> },
      { path: '/contact', element: <Route.Contact />, errorElement: <div>404</div> },
      { path: '/toolbox', element: <Route.Toolbox />, errorElement: <div>404</div> },
      { path: '/sandbox', element: <Route.Sandbox />, errorElement: <div>404</div> },
      { path: '/projects', element: <Route.Projects />, errorElement: <div>404</div> },
      { path: '/experience', element: <Route.Experience />, errorElement: <div>404</div> },
      { path: '/preferences', element: <Route.Preferences />, errorElement: <div>404</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
