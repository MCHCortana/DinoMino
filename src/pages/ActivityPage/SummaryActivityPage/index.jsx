import './style.css';

export const SummaryActivityPage = () => {
  return (
    <>
      <div className="summary_activity_page">
        <div className="title_summary">
          <h2>Rok, měsíc a den?</h2>
          <h3>Už je znáš?</h3>
        </div>

        <div className="activitiy_page-task">
          <h3>Jaké máme roční období?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/season.png"
            alt="Rok má 4 roční období"
          />
        </div>

        <div className="activitiy_page-task">
          <h3>Jaký je měsíc?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/number-12.png"
            alt="Rok má 12 měsíců"
          />
        </div>
        <div className="activitiy_page-task">
          <h3>Jaký je dneska den?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/week.png"
            alt="Týden má 7 dní"
          />
        </div>
      </div>
    </>
  );
};
