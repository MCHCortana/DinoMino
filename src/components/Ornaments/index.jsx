import './style.css';

export const Ornaments = ({ ornament, popCheck, onChoice, day }) => {
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
    <button
      onClick={handleClick}
      className={fillShape}
      location={'xmas'}
      // disabled={day !== number && true}
    >
      <h3>{number}</h3>
    </button>
  );
};
