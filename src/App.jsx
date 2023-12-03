import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { usePreview } from 'react-dnd-preview';

import { bodyPartsImport } from './../src/pages/MonsterPage/bodyPartsImport';

const options = {
  enableMouseEvents: true,
};
const MyPreview = () => {
  const preview = usePreview();
  if (!preview.display) {
    return null;
  }
  const { itemType, item, style } = preview;

  const bodyPart = bodyPartsImport[item.id].element;
  console.log(style);
  return (
    <img
      src={bodyPart.props.src}
      alt={bodyPart.props.className}
      className={bodyPart.props.className}
      style={style}
    />
  );
};

export const App = () => {
  return (
    <>
      <Header />
      <DndProvider backend={TouchBackend} options={options}>
        {/* <DndProvider backend={HTML5Backend}> */}
        <Outlet />
        <MyPreview />
      </DndProvider>
      <Footer />
    </>
  );
};
