import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import { SITE_ROUTE_MAP } from './data';
import { Root } from './root';
import {
  Contact,
  Experience,
  Landing,
  Profile,
  Projects,
  Sandbox,
  Settings,
  Toolbox,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root.Error />,
    children: [
      {
        path: SITE_ROUTE_MAP.contact.path,
        element: <Contact />,
        errorElement: <Contact.Error />,
      },
      {
        path: SITE_ROUTE_MAP.experience.path,
        element: <Experience />,
        errorElement: <Experience.Error />,
      },
      {
        path: SITE_ROUTE_MAP.landing.path,
        element: <Landing />,
        errorElement: <Landing.Error />,
      },
      {
        path: SITE_ROUTE_MAP.profile.path,
        element: <Profile />,
        errorElement: <Profile.Error />,
      },
      {
        path: SITE_ROUTE_MAP.projects.path,
        element: <Projects />,
        errorElement: <Projects.Error />,
      },
      {
        path: SITE_ROUTE_MAP.sandbox.path,
        element: <Sandbox />,
        errorElement: <Sandbox.Error />,
      },
      {
        path: SITE_ROUTE_MAP.settings.path,
        element: <Settings />,
        errorElement: <Settings.Error />,
      },
      {
        path: SITE_ROUTE_MAP.toolbox.path,
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
