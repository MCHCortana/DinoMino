import React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
