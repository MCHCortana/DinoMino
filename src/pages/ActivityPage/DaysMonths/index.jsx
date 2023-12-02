import './style.css';
import { Day } from './../../../components/Day';
import { Months } from './../../../components/Months';
import { Seasons } from './../../../components/Seasons';
import { DefaultActivity } from './../../../components/DefaultActivity';
// import { useState } from 'react';
import dayjs from 'dayjs';

export const DaysMonths = ({ learn, setLearn }) => {
  const currentDay = dayjs().format('dddd');
  const currentMonth = dayjs().month();

  const currentSeason = () => {
    const currentMonth = dayjs().month();

    if (currentMonth >= 2 && currentMonth <= 4) {
      return 'Jaro';
    } else if (currentMonth >= 5 && currentMonth <= 7) {
      return 'Léto';
    } else if (currentMonth >= 8 && currentMonth <= 10) {
      return 'Podzim';
    } else {
      return 'Zima';
    }
  };

  return (
    <>
      <div className="days_months">
        {learn === 'year' && <DefaultActivity />}
        {learn === 'days' && <Day currentDay={currentDay} />}
        {learn === 'months' && <Months currentMonth={currentMonth} />}
        {learn === 'seasons' && <Seasons season={currentSeason} />}
      </div>
    </>
  );
};
