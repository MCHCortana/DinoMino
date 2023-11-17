import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:<ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      // {
      //   path: '/MenuPage',
      //   element: <MenuPage />,
      // },
      // {
      //   path: '/gamepage',
      //   element: <GamePage />,
      // },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
