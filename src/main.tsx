import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import {
  Home,
  Layout,
  Contact,
  Experience,
  Profile,
  Projects,
  Sandbox,
  Settings,
  Toolbox,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Layout.Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Home.Error />,
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
        path: '/profile',
        element: <Profile />,
        errorElement: <Profile.Error />,
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
        children: [{ index: true, element: <Sandbox.Directory /> }],
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
