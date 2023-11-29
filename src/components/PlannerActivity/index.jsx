import './style.css';

import { useState, useEffect } from 'react';

export const PlannerActivity = ({ activity, onDeleting }) => {
  console.log('Planner Activity', activity);

  // const [dayActivity, setDayActivity] = useState();
  // useEffect(() => {
  //   setDayActivity(day.activities);
  // }, [day.activities]);

  // console.log(dayActivity);

  return (
    <div className="one_activity">
      {onDeleting && (
        <button className="delete_button--button">
          <img
            className="delete_button--img"
            src="./img/IconsFunctional/remove.png "
          />{' '}
        </button>
      )}
      <img src={`./img/IconsCalendar/${activity}`} alt={activity} />
    </div>
  );
};
