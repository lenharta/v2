import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>App</div>,
    errorElement: <div>App Error</div>,
    children: [
      { index: true, element: <div>Home</div>, errorElement: <div>404</div> },
      { path: '/demo', element: <div>Demo</div>, errorElement: <div>404</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
