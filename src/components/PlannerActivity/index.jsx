import { useEffect } from 'react';
import './style.css';

export const PlannerActivity = ({ day }) => {
  // console.log('Planner Activity', day);
  const handleChoiceActivity = () => {};

  return (
    <div className="activities">
      {/* {delete && <button><img src="./img/remove.png " /> </button>} */}
      {day.length === 0 && (
        <>
          <img src="./img/IconsFunctional/square.png" />
          <img src="./img/IconsFunctional/square.png" />
          <img src="./img/IconsFunctional/square.png" />
        </>
      )}
      {day.map((activity) => {
        console.log(activity);
        return (
          <img
            key={day.indexOf(activity)}
            onClick={handleChoiceActivity}
            src={`./img/IconsCalendar/${activity}`}
            alt={activity}
          />
        );
      })}
    </div>
  );
};
