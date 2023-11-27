import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GamePage } from './pages/GamePage';
import { ErrorPage } from './pages/ErrorPage';
import { ActivityPage } from './pages/ActivityPage';
import { Xmas } from './pages/Xmas';
import { Monster } from './pages/Monster';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menupage',
        element: <MenuPage />,
      },
      {
        path: '/activitypage',
        element: <ActivityPage />,
      },
      {
        path: '/gamepage',
        element: <GamePage />,
      },
      {
        path: '/xmas',
        element: <Xmas />,
      },
      {
        path: '/monster',
        element: <Monster />,
      },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
