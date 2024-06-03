import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import { Root } from './root';
import * as DATA from './data';
import * as PAGES from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root.Error />,
    children: [
      {
        path: DATA.SITE_ROUTE_MAP.contact.path,
        element: <PAGES.Contact />,
        errorElement: <PAGES.Contact.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.experience.path,
        element: <PAGES.Experience />,
        errorElement: <PAGES.Experience.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.landing.path,
        element: <PAGES.Landing />,
        errorElement: <PAGES.Landing.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.profile.path,
        element: <PAGES.Profile />,
        errorElement: <PAGES.Profile.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.projects.path,
        element: <PAGES.Projects />,
        errorElement: <PAGES.Projects.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.sandbox.path,
        element: <PAGES.Sandbox />,
        errorElement: <PAGES.Sandbox.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.settings.path,
        element: <PAGES.Settings />,
        errorElement: <PAGES.Settings.Error />,
      },
      {
        path: DATA.SITE_ROUTE_MAP.toolbox.path,
        element: <PAGES.Toolbox />,
        errorElement: <PAGES.Toolbox.Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
