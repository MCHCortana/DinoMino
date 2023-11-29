import './style.css';

import { useEffect, useState } from 'react';

import { DayPlan } from './../../components/DayPlan';
import { IconCarousel } from '../../components/IconCarousel';
import { PopUp } from '../../components/Popup';
import { FunctionalDivPlannerPage } from './../../components/FunctionalDivPlannerPage';

export const PlannerPage = () => {
  // musí tady být useState - neměním proměnou, ale prvky v proměnné, nemusel by tedy být useState
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

  // Může tohle být jako další položka ve weekdays? why not? deleting taky? - jednodušší předání props - předám den.deleting a nemusím deklarovat novou proměnnou. Bude mít nová dlekarace nějaký vliv, kromě toho, že budeu předávat hodně props?

  const [tooManyActivities, setTooManyActivities] = useState(false);
  const [deleting, setDeleting] = useState(true);

  return (
    <main className="container__planner_page">
      <FunctionalDivPlannerPage onDeleting={setDeleting} />

      <div className="planner_days">
        {tooManyActivities && (
          <PopUp popCheck={setTooManyActivities} location="alert" />
        )}
        {weekDays.map((day) => {
          return (
            <DayPlan
              onDeleting={deleting}
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
