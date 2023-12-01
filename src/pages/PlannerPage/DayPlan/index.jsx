import './style.css';

import { useState } from 'react';

import { PlannerActivity } from '../PlannerActivity';

export const DayPlan = ({
  day,
  onDeleting,
  setActivityForDay,
  setTooManyActivities,
  onAddingPlan,
}) => {
  const [physicalyDelete, setPhysicalyDelete] = useState(false);
  const [index, setIndex] = useState(null);

  const handleAdd = () => {
    onAddingPlan;
    setActivityForDay(day);
    day.activities.length === 3 && setTooManyActivities(true);
  };
  physicalyDelete &&
    day.activities.map((activity) => {
      if (index === day.activities.indexOf(activity)) {
        day.activities.splice(index, 1);
      }
      setPhysicalyDelete(false);
      setIndex(null);
    });

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
          {day.activities.map((dayActivity, index) => {
            return (
              <PlannerActivity
                key={dayActivity}
                onDeleting={onDeleting}
                onPhysicalDelete={setPhysicalyDelete}
                activity={dayActivity}
                indexOnDelete={setIndex}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
