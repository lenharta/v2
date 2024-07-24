import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactRouter from 'react-router-dom';

import './styles/index.scss';

import { Layout } from './app';
import * as Routes from './routes';

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
        path: '/sandbox',
        element: <Routes.Sandbox />,
      },
      {
        path: '/demo',
        element: <Routes.Demo />,
        children: [
          { index: true, element: <Routes.Demo.Directory /> },
          { path: '/demo/chip', element: <Routes.Demo.Chip /> },
          { path: '/demo/radio', element: <Routes.Demo.Radio /> },
          { path: '/demo/toggle', element: <Routes.Demo.Toggle /> },
          { path: '/demo/button', element: <Routes.Demo.Button /> },
          { path: '/demo/action', element: <Routes.Demo.Action /> },
          { path: '/demo/control', element: <Routes.Demo.Control /> },
          { path: '/demo/icon-btn', element: <Routes.Demo.IconBtn /> },
          { path: '/demo/tool-btn', element: <Routes.Demo.ToolBtn /> },
          { path: '/demo/checkbox', element: <Routes.Demo.Checkbox /> },
        ],
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
