import './style.css';

import { SummaryActivityPage } from './SummaryActivityPage';
import { DaysMonths } from './DaysMonths';
import { PopUp } from '../../components/Popup';
import { useState } from 'react';

export const ActivityPage = () => {
  const [popCheck, setPopCheck] = useState(false);
  const [learn, setLearn] = useState('year');
  const [popUpSumaryPrint, setPopUpSumaryPrint] = useState(false);

  const handleClickHint = () => {
    setPopCheck(true);
  };

  const handleClichPrint = () => {
    setPopUpSumaryPrint(true);
  };

  return (
    <main className="container-activity_page">
      {popCheck && <PopUp popCheck={setPopCheck} location={'hint_activity'} />}
      {popUpSumaryPrint && (
        <PopUp popUpSumaryPrint={setPopUpSumaryPrint} location={'pop_print'} />
      )}
      {/* Left Column */}
      <div className="left-column">
        <div className="container_days_months">
          <DaysMonths learn={learn} />
        </div>
      </div>

      {/* Right Column */}
      <div className="summary">
        <SummaryActivityPage settingActivity={setLearn} />
        <div className="second-row--activity_page">
          <div className="imgs_activity_page">
            <div className="faq--activity_page">
              <img
                onClick={handleClickHint}
                src="./img/IconsFunctional/faq.png"
                alt="Pomoc"
              />
            </div>

            <div className="tisk-sumary__activity">
              <img
                src="./img/IconsFunctional/printer3.png"
                alt="Printer"
                onClick={handleClichPrint}
              ></img>
            </div>

            <div className="sumary-print"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
