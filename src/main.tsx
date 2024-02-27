import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/main.scss';

import { Root } from '@/app';
import { Home, Preferences, Toolbox, Demo } from '@/app/pages';

import { OnBoardScreen, PageError404, SplashScreen } from './app/screens';

import {
  DemoAnimation,
  DemoCheckbox,
  DemoControl,
  DemoDropdown,
  DemoOverlay,
  DemoSummary,
} from './app/demo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError404 />,
    children: [
      { index: true, element: <Home /> },
      { path: '/onboard', element: <OnBoardScreen /> },
      { path: '/toolbox', element: <Toolbox /> },
      { path: '/preferences', element: <Preferences /> },
      {
        path: '/demo',
        element: <Demo />,
        children: [
          { index: true, element: <DemoSummary /> },
          { path: '/demo/animation', element: <DemoAnimation /> },
          { path: '/demo/Checkbox', element: <DemoCheckbox /> },
          { path: '/demo/Control', element: <DemoControl /> },
          { path: '/demo/Dropdown', element: <DemoDropdown /> },
          { path: '/demo/Overlay', element: <DemoOverlay /> },
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
