import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/main.scss';
import './site/styles/main.scss';

import { Root, Error, Home, About, Articles, Experience, Toolbox, Sandbox, Projects } from './site';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/articles', element: <Articles /> },
      { path: '/experience', element: <Experience /> },
      { path: '/projects', element: <Projects /> },
      { path: '/sandbox', element: <Sandbox /> },
      { path: '/toolbox', element: <Toolbox /> },
    ],
  },
]);

// import { Root } from '@/app';
// import { Home, Toolbox, Sandbox } from '@/app/pages';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <h1>Page Error: 404</h1>,
//     children: [
//       { index: true, element: <Home /> },
//       { path: '/sandbox', element: <Sandbox /> },
//       { path: '/toolbox', element: <Toolbox /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
