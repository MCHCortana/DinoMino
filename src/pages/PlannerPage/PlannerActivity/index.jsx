import './style.css';

import { useState, useEffect } from 'react';

export const PlannerActivity = ({
  activity,
  onDeleting,
  indexOnDelete,
  index,
  onPhysicalDelete,
}) => {
  console.log('Planner Activity', activity);
  console.log('planner actvivit - index', index);
  const handleClick = () => {
    onPhysicalDelete(true);
    indexOnDelete(index);
  };

  return (
    <div className="one_activity">
      {onDeleting && (
        <button onClick={handleClick} className="delete_button--button">
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
