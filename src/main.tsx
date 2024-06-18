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
        path: ROUTES.experience,
        element: <ExperienceRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.projects,
        element: <ProjectsRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.settings,
        element: <SettingsRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.toolbox,
        element: <ToolboxRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.contact,
        element: <ContactRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.canvas,
        element: <CanvasRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: ROUTES.sandbox,
        element: <SandboxRoute />,
        errorElement: <ErrorRoute />,
        children: [
          { path: ROUTES_SANDBOX.root, element: <SandboxRoute.Root />, index: true },
          { path: ROUTES_SANDBOX.icon, element: <SandboxRoute.Icon /> },
          { path: ROUTES_SANDBOX.tile, element: <SandboxRoute.Tile /> },
          { path: ROUTES_SANDBOX.text, element: <SandboxRoute.Text /> },
          { path: ROUTES_SANDBOX.title, element: <SandboxRoute.Title /> },
          { path: ROUTES_SANDBOX.label, element: <SandboxRoute.Label /> },
          { path: ROUTES_SANDBOX.button, element: <SandboxRoute.Button /> },
          { path: ROUTES_SANDBOX.action, element: <SandboxRoute.Action /> },
          { path: ROUTES_SANDBOX.divider, element: <SandboxRoute.Divider /> },
          { path: ROUTES_SANDBOX.floating, element: <SandboxRoute.Floating /> },
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
