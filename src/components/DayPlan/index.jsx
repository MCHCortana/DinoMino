import './style.css';

import { useState } from 'react';

import { PlannerActivity } from './../../components/PlannerActivity';
export const DayPlan = ({ day }) => {
  const handleAdd = () => {};

  return (
    <>
      <div className="planner_one_day">
        <button className="adding_button" onClick={handleAdd}>
          <img src="./img/IconsFunctional/plus.png" alt="add-button" />
        </button>
        <div className={`day_planner ${day.id}`}>
          <h2>{day.dayName}</h2>
        </div>
        {day.activities.length === 0 && (
          <>
            <div className="activities">
              <img src="./img/IconsFunctional/square.png" />
              <img src="./img/IconsFunctional/square.png" />
              <img src="./img/IconsFunctional/square.png" />
            </div>
          </>
        )}
        {day.activities.map((activity) => (
          <PlannerActivity activity={activity} />
        ))}
      </div>
    </>
  );
};
