import './style.css';
import { Day } from './../../../components/Day';
import { Months } from './../../../components/Months';
import { Seasons } from './../../../components/Seasons';
import { DefaultActivity } from './../../../components/DefaultActivity';
import { useState } from 'react';

export const DaysMonths = ({ learn, setLearn }) => {
  return (
    <>
      <div className="days_months">
        {learn === 'year' && <DefaultActivity />}
        {learn === 'days' && <Day />}
        {learn === 'months' && <Months />}
        {learn === 'seasons' && <Seasons />}
      </div>
    </>
  );
};
