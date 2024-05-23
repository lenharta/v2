import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import {
  Contact,
  Demo,
  Experience,
  Overview,
  Projects,
  Root,
  Sandbox,
  Settings,
  Toolbox,
} from '@/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root.Error />,
    children: [
      {
        index: true,
        element: <Overview />,
        errorElement: <Overview.Error />,
      },
      {
        path: '/demo',
        element: <Demo />,
        errorElement: <Demo.Error />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <Contact.Error />,
      },
      {
        path: '/experience',
        element: <Experience />,
        errorElement: <Experience.Error />,
      },
      {
        path: '/projects',
        element: <Projects />,
        errorElement: <Projects.Error />,
      },
      {
        path: '/sandbox',
        element: <Sandbox />,
        errorElement: <Sandbox.Error />,
      },
      {
        path: '/settings',
        element: <Settings />,
        errorElement: <Settings.Error />,
      },
      {
        path: '/toolbox',
        element: <Toolbox />,
        errorElement: <Toolbox.Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
