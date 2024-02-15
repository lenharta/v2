import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/main.scss';

import { Home, Preferences, RootError, RootLayout, Settings, Toolbox } from './pages';

const OnboardScreen = (props: {}) => {
  return <div className="Screen"></div>;
};

const SplashScreen = (props: {}) => {
  return <div className="Screen SplashScreen"></div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Home /> },
      { path: '/toolbox', element: <Toolbox /> },
      { path: '/settings', element: <Settings /> },
      { path: '/preferences', element: <Preferences /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
