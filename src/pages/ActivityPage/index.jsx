import './style.css';

import { SummaryActivityPage } from './SummaryActivityPage';
import { DaysMonths } from './DaysMonths';
import { PopupHint } from '../../components/PopupHint';
import { useState } from 'react';

export const ActivityPage = () => {
  const [popHintCheck, setPopHintCheck] = useState(false);
  const handleClickHint = () => {
    setPopHintCheck(true);
  };

  return (
    <main className="container-activity_page">
      {popHintCheck && <PopupHint popupHintCheck={setPopHintCheck} />}
      {/* Left Column */}
      <div className="left-column">
        <div className="container_days_months">
          <DaysMonths />
        </div>
      </div>

      {/* Right Column */}
      <div className="summary">
        <SummaryActivityPage />
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
