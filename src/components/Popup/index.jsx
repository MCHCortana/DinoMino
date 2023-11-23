import './style.css';
import { PopUpHint } from './PopUpHint';

export const PopUp = ({ popupHintCheck, location, popUpTreeDec }) => {
  const handleClick = () => {
    popupHintCheck(false);
  };
  return (
    <>
      <div className="popup">
        <PopUpHint />
        <PopUpXmas popUpTreeDec={popUpTreeDec} />
      </div>
      <div onClick={handleClick} className="overlay"></div>
    </>
  );
};
