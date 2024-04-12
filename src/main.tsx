import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/main.scss';

import App from './app';
import { ErrorPage } from './app/page';
import { ErrorLayout } from './app/layout';
import {
  Home,
  Demo,
  Contact,
  Sandbox,
  Toolbox,
  Projects,
  Experience,
  Preferences,
} from './app/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorPage /> },
      { path: '/demo', element: <Demo />, errorElement: <ErrorPage /> },
      { path: '/contact', element: <Contact />, errorElement: <ErrorPage /> },
      { path: '/toolbox', element: <Toolbox />, errorElement: <ErrorPage /> },
      { path: '/sandbox', element: <Sandbox />, errorElement: <ErrorPage /> },
      { path: '/projects', element: <Projects />, errorElement: <ErrorPage /> },
      { path: '/experience', element: <Experience />, errorElement: <ErrorPage /> },
      { path: '/preferences', element: <Preferences />, errorElement: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
