import './style.css';
// import { Ornaments } from '../../components/Ornaments';
import { PopUp } from './../../components/Popup/';
import { XmasTreeButtons } from './XmasTreeButtons';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Xmas = () => {
  const [treeDec, setTreeDec] = useState(null);

  const [popupTreeDec, setPopUpTreeDec] = useState(null);

  const [popCheck, setPopCheck] = useState(false);

  // const [ornament, setOrnament] = useState(null);

  const [clickedDay, setClickedDay] = useState(null);

  const day = dayjs().date();

  useEffect(() => {
    const fetchOrnamentData = async () => {
      const response = await fetch('./api/xmasButtons.json');
      if (!response.ok) {
        console.log('Nemůžu načíst data');
      }
      const data = await response.json();
      setTreeDec(data);
    };
    fetchOrnamentData();
  }, []);

  return (
    <main className="xmas_tree-container">
      {popCheck && (
        <PopUp
          popContent={popupTreeDec}
          popCheck={setPopCheck}
          location={'xmas'}
          clickedDay={clickedDay}
          day={day}
        />
      )}
      <div className="advent_calendar_dino">
        <img src="./img/dinoWinter2.png" />
      </div>
      {/* <div className="christmas_tree tree_grid"> */}
      <XmasTreeButtons
        tree={treeDec}
        popCheck={setPopCheck}
        onChoice={setPopUpTreeDec}
        clickedDay={setClickedDay}
        day={day}
      />
      {/* {treeDec &&
          treeDec.map((ornament) => {
            return (
              <Ornaments
                key={ornament.id}
                day={day}
                popCheck={setPopCheck}
                ornament={ornament}
                onChoice={setPopUpTreeDec}
              />
            );
          })} */}
      {/* </div> */}
    </main>
  );
};
