import './style.css';
import { PopUpHint } from './PopUpHint';
import { PopUpXmas } from './PopUpXmas';
import { PopUpAlert } from './PopupAlert';
import { PopUpSummaryPrint } from './PopUpSummaryPrint';

export const PopUp = ({
  popCheck,
  location,
  popContent,
  popUpSumaryPrint,
  day,
}) => {
  const handleClick = () => {
    if (location === 'pop_print') {
      return popUpSumaryPrint(false);
    }
    popCheck(false);
    // popUpSumaryPrint(false);
  };

  return (
    <div onClick={handleClick}>
      <div className="popup">
        {location === 'hint_activity' && <PopUpHint />}
        {location === 'xmas' && <PopUpXmas day={day} popContent={popContent} />}
        {location === 'pop_print' && (
          <PopUpSummaryPrint popUpSumaryPrint={popUpSumaryPrint} />
        )}
        {location === 'alert' && <PopUpAlert />}
      </div>
      <div className="overlay"></div>
    </div>
  );
};
