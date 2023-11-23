import './style.css';
import { PopUpHint } from './PopUpHint';
import { PopUpXmas } from './PopUpXmas';

export const PopUp = ({ popCheck, location, popContent }) => {
  const handleClick = () => {
    popCheck(false);
  };
  return (
    <>
      <div className="popup">
        {location === 'hint_activity' && <PopUpHint />}
        {location === 'xmas' && <PopUpXmas popContent={popContent} />}
      </div>
      <div onClick={handleClick} className="overlay"></div>
    </>
  );
};
