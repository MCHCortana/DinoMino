import './style.css';

import { PlannerActivity } from '../PlannerActivity';

export const DayPlan = ({
  day,
  setActivityForDay,
  setTooManyActivities,
  onDeleting,
}) => {
  console.log('Tady nastavuji všechny dny', day);
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
        <div className="activities">
          {day.activities.length === 0 && (
            <>
              <img src="./img/IconsFunctional/square.png" />
              <img src="./img/IconsFunctional/square.png" />
              <img src="./img/IconsFunctional/square.png" />
            </>
          )}
          {day.activities.map((dayActivity) => {
            return (
              <PlannerActivity
                key={dayActivity + day.dayName}
                onDeleting={onDeleting}
                activity={dayActivity}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
