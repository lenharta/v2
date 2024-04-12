import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/main.scss';

import App from './app';

import { LayoutError, PageError } from './app/common';

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
    errorElement: <LayoutError />,
    children: [
      { index: true, element: <Home />, errorElement: <PageError /> },
      { path: '/demo', element: <Demo />, errorElement: <PageError /> },
      { path: '/contact', element: <Contact />, errorElement: <PageError /> },
      { path: '/toolbox', element: <Toolbox />, errorElement: <PageError /> },
      { path: '/sandbox', element: <Sandbox />, errorElement: <PageError /> },
      { path: '/projects', element: <Projects />, errorElement: <PageError /> },
      { path: '/experience', element: <Experience />, errorElement: <PageError /> },
      { path: '/preferences', element: <Preferences />, errorElement: <PageError /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
