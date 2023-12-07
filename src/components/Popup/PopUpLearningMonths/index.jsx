import './style.css';
import { useEffect, useState } from 'react';

export const PopUpLearningMonths = ({ learningMonth }) => {
  const [monthData, setMonthData] = useState(null);

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

  const getPoem = () => {
    const month = monthData.find((month) => month.monthName === learningMonth);
    const poemLines = month.poem;
    return poemLines;
  };
  const getAudio = () => {
    return monthData.find((month) => month.monthName === learningMonth).audio;
  };

  return (
    <div className="learning_months">
      <div className="learning_months_box">
        <h1> {learningMonth.toUpperCase()}</h1>
        <p>{monthData && getPoem()}</p>
        <div className="audio_hint">
          <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
          {/* <audio controls>
          <source src={monthData && getAudio} type="audio/mpeg" />{' '}
        </audio> */}
        </div>
      </div>
    </div>
  );
};
