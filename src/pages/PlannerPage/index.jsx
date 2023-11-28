import './style.css';

import { useEffect, useState } from 'react';

import { DayPlan } from './../../components/DayPlan';
import { IconCarousel } from '../../components/IconCarousel';
import { PopUp } from '../../components/Popup';

export const PlannerPage = () => {
  const [weekDays, setData] = useState([
    { id: 'monday', dayName: 'pondělí', activities: [] },
    { id: 'tuesday', dayName: 'úterý', activities: [] },
    { id: 'wednesday', dayName: 'středa', activities: [] },
    { id: 'thursday', dayName: 'čtvrtek', activities: [] },
    { id: 'friday', dayName: 'pátek', activities: [] },
    { id: 'saturday', dayName: 'sobota', activities: [] },
    { id: 'sunday', dayName: 'neděle', activities: [] },
  ]);
  const [activityForDay, setActivityForDay] = useState(null);
  const [tooManyActivities, setTooManyActivities] = useState(false);

  return (
    <main className="container__planner_page">
      <div className="planner_page_action_container">
        <img src="./img/IconsFunctional/printer.png" alt="print_planner" />
        <img src="./img/IconsFunctional/remove.png" alt="remove_activity" />
      </div>
      <div className="planner_days">
        {/* potřeba upravit zavírání poUpu na víc jak 3 aktivity */}
        {tooManyActivities && (
          <PopUp popCheck={setTooManyActivities} location="alert" />
        )}
        {weekDays.map((day) => {
          return (
            <DayPlan
              key={day.id}
              day={day}
              setActivityForDay={setActivityForDay}
              setTooManyActivities={setTooManyActivities}
            />
          );
        })}
      </div>
      <IconCarousel
        onAddingPlan={activityForDay}
        setActivityForDay={setActivityForDay}
      />
    </main>
  );
};
