import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Root } from '@/app/layouts';
import {
  ArticlesRoute,
  CanvasRoute,
  ContactRoute,
  ErrorRoute,
  ExperienceRoute,
  HomeRoute,
  ProjectsRoute,
  SandboxRoute,
  SettingsRoute,
  ToolboxRoute,
} from '@/app/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/experience',
        element: <ExperienceRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/projects',
        element: <ProjectsRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/settings',
        element: <SettingsRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/toolbox',
        element: <ToolboxRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/contact',
        element: <ContactRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/canvas',
        element: <CanvasRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: '/sandbox',
        element: <SandboxRoute />,
        errorElement: <ErrorRoute />,
        children: [
          { index: true, element: <SandboxRoute.Root /> },
          { path: '/sandbox/button', element: <SandboxRoute.Button /> },
          { path: '/sandbox/action', element: <SandboxRoute.Action /> },
        ],
      },
      {
        path: '/articles',
        element: <ArticlesRoute />,
        errorElement: <ErrorRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
