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
        children: [
          {
            index: true,
            element: <Routes.Elements.Root />,
          },
          {
            path: '/elements/action',
            element: <Routes.Elements.Action />,
          },
          {
            path: '/elements/button',
            element: <Routes.Elements.Button />,
          },
          {
            path: '/elements/text',
            element: <Routes.Elements.Text />,
          },
          {
            path: '/elements/title',
            element: <Routes.Elements.Title />,
          },
          {
            path: '/elements/label',
            element: <Routes.Elements.Label />,
          },
          {
            path: '/elements/control',
            element: <Routes.Elements.Control />,
          },
          {
            path: '/elements/select',
            element: <Routes.Elements.Select />,
          },
          {
            path: '/elements/divider',
            element: <Routes.Elements.Divider />,
          },
          {
            path: '/elements/group',
            element: <Routes.Elements.Group />,
          },
          {
            path: '/elements/stack',
            element: <Routes.Elements.Stack />,
          },
          {
            path: '/elements/accordion',
            element: <Routes.Elements.Accordion />,
          },
        ],
      },
      {
        path: '/articles',
        element: <Routes.Articles />,
      },
      {
        path: '/canvas',
        element: <Routes.Canvas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouter.RouterProvider router={browserRouter} />
  </React.StrictMode>
);
