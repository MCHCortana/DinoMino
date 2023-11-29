import './style.css';

import { useState, useEffect } from 'react';

export const PlannerActivity = ({ day, onDeleting }) => {
  console.log('Planner Activity', day);

  // const [dayActivity, setDayActivity] = useState();
  // useEffect(() => {
  //   setDayActivity(day.activities);
  // }, [day.activities]);

  // console.log(dayActivity);
  const handleDelete = (e) => {
    console.log(activities.indexOf(e.target));
    // day.activity.filter((activity !== e.target.value))
  };

  return (
    <div className="activities">
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
          <div className="delete_button" key={day.indexOf(activity)}>
            {onDeleting && (
              <button onClick={handleDelete} className="delete_button--button">
                <img
                  className="delete_button--img"
                  src="./img/IconsFunctional/remove.png "
                />{' '}
              </button>
            )}
            <img src={`./img/IconsCalendar/${activity}`} alt={activity} />
          </div>
        );
      })}
    </div>
  );
};
