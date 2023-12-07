import './style.css';
import { useEffect, useState } from 'react';

export const PopUpLearningSeasons = ({ learningSeason }) => {
  const [seasonsData, setSeasonsData] = useState(null);
  const [poem, setPoem] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/rocniobdobi.json');
        const data = await response.json();
        setSeasonsData(data);
      } catch (error) {
        console.error('Chyba při načítání dat', error);
      }
    };
    fetchData();
  }, []);

  const getPoem = () => {
    const season = seasonsData.find((season) => season.name === learningSeason);
    const poem = season.poem;
    return poem;
  };
  const getAudio = () => {
    return seasonsData.find((season) => season.name === learningSeason).audio;
  };

  return (
    <div className="learning_months">
      <div className="learning_months_box">
        <h1> {learningSeason.toUpperCase()}</h1>
        <p>{seasonsData && getPoem()}</p>
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
