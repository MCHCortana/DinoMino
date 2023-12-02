import './style.css';

import { useState } from 'react';

import { DayPlan } from './DayPlan';
import { IconCarousel } from './IconCarousel';
import { PopUp } from '../../components/Popup';
import { FunctionalDivPlannerPage } from './FunctionalDivPlannerPage';

export const PlannerPage = () => {
  const [weekDays, setWeekDays] = useState([
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
  const [onDeleting, setDeleting] = useState(false);

  return (
    <main className="container__planner_page">
      <FunctionalDivPlannerPage
        onDeleting={setDeleting}
        deleting={onDeleting}
        onClearing={setWeekDays}
      />

      <div className="planner_days">
        {tooManyActivities && (
          <PopUp popCheck={setTooManyActivities} location="alert" />
        )}
        {weekDays.map((day) => {
          console.log('Planner Page activity', day);
          return (
            <DayPlan
              key={day.id}
              day={day}
              onDeleting={onDeleting}
              setActivityForDay={setActivityForDay}
              setTooManyActivities={setTooManyActivities}
            />
          );
        })}
      </div>
      {activityForDay && (
        <IconCarousel
          onAddingPlan={activityForDay}
          setActivityForDay={setActivityForDay}
        />
      )}
    </main>
  );
};
