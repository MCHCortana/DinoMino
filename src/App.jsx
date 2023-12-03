import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

const options = {
  enableMouseEvents: true,
};

export const App = () => {
  return (
    <>
      <Header />
      <DndProvider backend={TouchBackend} options={options}>
        <Outlet />
      </DndProvider>
      <Footer />
    </>
  );
};
