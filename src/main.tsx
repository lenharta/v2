import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactRouter from 'react-router-dom';

import './styles/index.scss';

import { Layout } from '@/app/components';
import * as Routes from '@/app/routes';

const browserRouter = ReactRouter.createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Routes.Error />,
    children: [
      {
        index: true,
        element: <Routes.Overview />,
      },
      {
        path: '/about',
        element: <Routes.About />,
      },
      {
        path: '/stack',
        element: <Routes.Stack />,
      },
      {
        path: '/projects',
        element: <Routes.Projects />,
      },
      {
        path: '/settings',
        element: <Routes.Settings />,
      },
      {
        path: '/contact',
        element: <Routes.Contact />,
      },
      {
        path: '/elements',
        element: <Routes.Elements />,
      },
      {
        path: '/articles',
        element: <Routes.Articles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouter.RouterProvider router={browserRouter} />
  </React.StrictMode>
);
