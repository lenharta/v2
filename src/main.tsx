import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/main.scss';

import { Root } from '@/app';
import { Home, Toolbox, Sandbox } from '@/app/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Page Error: 404</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: '/sandbox', element: <Sandbox /> },
      { path: '/toolbox', element: <Toolbox /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
