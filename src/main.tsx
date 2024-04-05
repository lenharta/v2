import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root, Error, Home, Articles, Experience, Toolbox, Sandbox, Projects } from './site';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/articles', element: <Articles /> },
      { path: '/experience', element: <Experience /> },
      { path: '/projects', element: <Projects /> },
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
