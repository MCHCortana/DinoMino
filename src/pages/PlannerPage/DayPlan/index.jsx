import './style.css';
import { useState } from 'react';
import { PlannerActivity } from '../PlannerActivity';

export const DayPlan = ({
  day,
  onDeleting,
  setActivityForDay,
  setTooManyActivities,
  setWeekDays,
  endDeleting,
}) => {
  const handleAdd = () => {
    endDeleting(false);
    setActivityForDay(day.dayName);
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
              <img src="/img/IconsFunctional/square.png" />
              <img src="/img/IconsFunctional/square.png" />
              <img src="/img/IconsFunctional/square.png" />
            </>
          )}
          {day.activities.map((dayActivity, index) => {
            const idKey = self.crypto.randomUUID();
            console.log('day', day);
            return (
              <PlannerActivity
                key={idKey}
                whichDay={day.dayName}
                onDeleting={onDeleting}
                activity={dayActivity}
                setWeekDays={setWeekDays}
                indexToDelete={index}
                setIndexToDelete={setActivityForDay}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
