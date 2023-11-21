import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GamePage } from './pages/GamePage';
import { ErrorPage } from './pages/ErrorPage';
import { ActivityPage } from './pages/ActivityPage';
// import { AdventCalendar } from './pages/AdventCalendar';
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
        path: '/gamepage',
        element: <GamePage />,
      },
      // {
      //   path: '/gamepage/advent-calendar',
      //   element: <AdventCalendar />,
      // },
      {
        path: '/activitypage',
        element: <ActivityPage />,
      },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
