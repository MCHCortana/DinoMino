import './style.css';
import { useState } from 'react';
export const Ornaments = ({ ornament, fill, number, onChoice }) => {
  console.log(ornament);
  // [id, fillShape, number, text, name] = ornament;

  let fillShape = 'empty';
  if (fill === 's') {
    fillShape = 'filled star';
  } else if (fill === 'x') {
    fillShape = 'filled filledB';
  } else if (fill === 'g') {
    fillShape = 'filled filledG';
  }

  const handleClick = () => {
    onChoice(ornament);
  };

  return (
    <div onClick={handleClick} className={fillShape} location={'xmas'}>
      <h3>{number}</h3>
    </div>
  );
};
