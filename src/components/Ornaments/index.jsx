import './style.css';
import { useState } from 'react';
export const Ornaments = ({ ornament, popCheck, onChoice }) => {
  const { id, element, number, text, name } = ornament;

  let fillShape = 'empty';
  if (element === 's') {
    fillShape = 'filled star';
  } else if (element === 'x') {
    fillShape = 'filled filledB';
  } else if (element === 'g') {
    fillShape = 'filled filledG';
  }

  const handleClick = () => {
    onChoice(ornament);
    popCheck(true);
  };

  return (
    <div onClick={handleClick} className={fillShape} location={'xmas'}>
      <h3>{number}</h3>
    </div>
  );
};
