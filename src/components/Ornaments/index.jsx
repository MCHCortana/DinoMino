import './style.css';
import { useState } from 'react';
export const Ornaments = ({ fill, number }) => {
  let fillShape = 'empty';
  if (fill === 's') {
    fillShape = 'filled star';
  } else if (fill === 'x') {
    fillShape = 'filled filledB';
  } else if (fill === 'g') {
    fillShape = 'filled filledG';
  }

  const handleClick = () => {
    setPopHintCheck(true);
  };

  return (
    <div
      onClick={handleClick}
      className={fillShape}
      popHintCheck={setPopHintCheck}
      location={'xmas'}
    >
      <h3>{number}</h3>
    </div>
  );
};
