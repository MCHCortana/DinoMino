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

  return (
    <div className={fillShape}>
      <h3>{number}</h3>
    </div>
  );
};
