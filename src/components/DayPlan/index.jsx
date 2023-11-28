import './style.css';

import { useEffect, useState } from 'react';

import { PlannerActivity } from './../../components/PlannerActivity';

export const DayPlan = ({ day, setActivityForDay }) => {
  console.log('Tady nastavuji všechny dny', day);
  const handleAdd = () => {
    setActivityForDay(day);
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
        <PlannerActivity day={day} />
      </div>
    </>
  );
};
