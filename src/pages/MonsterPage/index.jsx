import './style.css';
import { bodyPartsImport } from './bodyPartsImport';
import { useDrop } from 'react-dnd';
import { useState, useCallback } from 'react';
import update from 'immutability-helper';

import { MonsterTitle } from './MonsterTitle';
import { DragableBox } from './DragableBox';

export const MonsterPage = ({ hideSourceOnDrag }) => {
  const ItemTypes = {
    BOX: 'box',
  };
  console.log(bodyPartsImport);

  const [bodyParts, setBodyParts] = useState(bodyPartsImport);
  const handlePrint = () => {
    const printContent = document.querySelector('.monster-container__box');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.close();
    printWindow.print();
  };

  const moveBox = useCallback(
    (id, left, top) => {
      setBodyParts(
        update(bodyParts, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [bodyParts, setBodyParts],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox],
  );

  return (
    <main className="monster-container">
      <MonsterTitle />
      <div ref={drop} className="monster-container__box">
        {Object.keys(bodyParts).map((key) => {
          const { left, top, element, height } = bodyParts[key];

          return (
            <DragableBox
              key={key}
              id={key}
              left={left}
              top={top}
              height={height}
              hideSourceOnDrag={hideSourceOnDrag}
            >
              {element}
            </DragableBox>
          );
        })}
        <img
          className="print-icon"
          src="./img/IconsFunctional/printer3.png"
          alt="Printer"
          onClick={handlePrint}
        ></img>
      </div>
    </main>
  );
};