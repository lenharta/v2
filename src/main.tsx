import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import { ROUTES, ROUTES_SANDBOX } from './types';
import {
  CanvasRoute,
  ContactRoute,
  ErrorRoute,
  ExperienceRoute,
  HomeRoute,
  ProjectsRoute,
  RootLayout,
  SandboxRoute,
  SettingsRoute,
  ToolboxRoute,
} from '@/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
