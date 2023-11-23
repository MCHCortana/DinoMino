import './style.css';

import { SummaryActivityPage } from './SummaryActivityPage';
import { DaysMonths } from './DaysMonths';
import { PopUp } from '../../components/Popup';
import { useState } from 'react';

export const ActivityPage = () => {
  const [popCheck, setPopCheck] = useState(false);
  const handleClickHint = () => {
    setPopHintCheck(true);
  };
  const handleClickDay = () => {
    setPopDay(true);
  };

  return (
    <main className="container-activity_page">
      {popCheck && <PopUp popCheck={setPopCheck} location={'hint_activity'} />}
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
            <div className="dino--activity_page">
              <img
                className="dino-mino--activity_page"
                src="./img/DinoReading.png"
                alt="Dinosaur Dino Míno s knihou"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
