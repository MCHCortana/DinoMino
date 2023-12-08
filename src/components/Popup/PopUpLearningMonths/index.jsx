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
    const audioMonth = monthData.find(
      (month) => month.monthName === learningMonth,
    ).audio;
    return audioMonth;
  };
  return (
    <div className="learning_months">
      <div className="learning_months_box">
        <h1> {learningMonth.toUpperCase()}</h1>

        {monthData && <p>{getPoem()}</p>}
        <div className="audio_hint">
          <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
          {monthData && (
            <audio
              controls
              src={`/audio/months/${getAudio()}.m4a`}
              type="audio/m4a"
            ></audio>
          )}
        </div>
      </div>
    </div>
  );
};
