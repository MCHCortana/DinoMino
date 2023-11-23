import './style.css';
import { PopUpHint } from './PopUpHint';

export const PopUp = ({ popCheck, location, popUpTreeDec }) => {
  const handleClick = () => {
    popCheck(false);
  };
  return (
    <>
      <div className="popup">
        {location === 'hint_activity' && <PopUpHint />}
        {location === 'xmas' && <PopUpXmas popUpTreeDec={popUpTreeDec} />}
      </div>
      <div onClick={handleClick} className="overlay"></div>
    </>
  );
};
