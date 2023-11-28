import './style.css';

import { PlannerActivity } from './../../components/PlannerActivity';

export const DayPlan = ({ day, setActivityForDay, setTooManyActivities }) => {
  // console.log('Tady nastavuji všechny dny', day);
  const handleAdd = () => {
    setActivityForDay(day);
    day.activities.length === 3 && setTooManyActivities(true);
  };
  return (
    <>
      <div className="planner_one_day">
        <button className="adding_button" onClick={handleAdd}>
          <img src="./img/IconsFunctional/plus.png" alt="add-button" />
        </button>
        <div className={`day_planner ${day.id}`}>
          <h2>{day.dayName}</h2>
        </div>
        <PlannerActivity day={day.activities} />
      </div>
    </>
  );
};
