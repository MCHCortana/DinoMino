import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SummaryActivityPage } from './SummaryActivityPage';
import { DaysMonths } from './DaysMonths';

export const ActivityPage = () => {
  return (
    <main className="container-activity_page">
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
              <img src="./img/IconsFunctional/faq.png" alt="Pomoc" />
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
