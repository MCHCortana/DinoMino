import './style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/cs';
import React, { useState, useEffect } from 'react';

export const PopUpSummaryPrint = () => {
  const [monthData, setMonthData] = useState([]);

  dayjs.locale('cs');
  const currentDay = dayjs().format('dddd');
  const currentMonth = dayjs().format('MMMM');

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/mesice.json');
        const data = await response.json();
        setMonthData(data);
      } catch (error) {
        console.error('Chyba při načítání dat', error);
      }
    };

    fetchData();
  }, []);
  console.log(monthData);

  const getDataForCurrentMonth = () => {
    const currentMonthData = monthData.find(
      (item) => Object.keys(item)[0] === currentMonth,
    );
    return currentMonthData
      ? currentMonthData[currentMonth]
      : 'Žádná básnička k dispozici.';
  };

  return (
    <>
      <div className="sumary-container">
        <p>Rok má 365 dní</p>
        <h3>Rok má 4 ročni období.Teď je {currentSeason()}</h3>
        <div className="sumary-winter">
          <h2>{currentSeason()}</h2>
          <p>Kreslím si, jak padá sníh</p>
          <p>na pole a na cesty.</p>
          <p>Sněhuláka kreslím též</p>
          <p>bez kabátu bez vesty.</p>
        </div>

        {/* <h3>Rok Má 12 měsíců. Teď máme: {currentMonth}</h3>

        <div className="sumary-winter">
          {/* {monthsData.map((monthData) => { */}
        {/* if (Object.keys(monthData)[0] === currentMonth) {
              return ( */}
        {/* <div key={currentMonth} className="sumary-winter">
            <h2>{currentMonth}</h2>
            <p>Za prosince končí rok,</p>
            <p>do nového už jen krok.</p>
            <p>V prosinci jsou Vánoce,</p>
            <p>přesně jednou po roce.</p>
          </div>
          {/* );
            }
            
          })} */}
        <h3>Rok Má 12 měsíců. Teď máme: {currentMonth}</h3>
        <div className="sumary-winter">
          <div key={currentMonth} className="sumary-winter">
            <h2>{currentMonth}</h2>
            <p>{getDataForCurrentMonth()}</p>
          </div>
        </div>
        <h3>Týden má 7 dní, dnes je: {currentDay}</h3>
        <div className="print">
          <img
            className="print-icon"
            src="./img/IconsFunctional/printer3.png"
            alt="Tisk"
            onClick={() => {
              window.print();
            }}
          ></img>
        </div>
      </div>
    </>
  );
};
