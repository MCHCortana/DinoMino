import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const App = () => {
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Outlet />
      </DndProvider>
      <Footer />
    </>
  );
};
