import './style.css';
import { Ornaments } from '../../components/Ornaments';
import { PopUp } from './../../components/Popup/';
import { useEffect, useState } from 'react';
export const Xmas = () => {
  const [treeDec, setTreeDec] = useState(' ');

  const [popupTreeDec, setPopUpTreeDec] = useState(null);

  const [popCheck, setPopCheck] = useState(false);

  useEffect(() => {
    const fetchOrnamentData = async () => {
      const response = await fetch('http://localhost:4000/api/xmasOrnaments');
      const data = await response.json();
      console.log(data);
      setTreeDec(data.result);
    };
    fetchRoomData();
  }, []);
  console.log(treeDec);

  return (
    <main className="xmas_tree-container">
      <div className="advent_calendar">
        <h2>Adventní kalendář</h2>
        <img src="./img/dinoWinter2.png" />
      </div>
      <div className="christmas_tree tree_grid">
        {popCheck && <PopUp popupTreeDec={treeDec} location={'xmas'} />}
        {treeDec.map((ornament) => {
          return (
            <Ornaments
              popCheck={setPopCheck}
              fill={ornament.element}
              number={ornament.number}
            />
          );
        })}
      </div>
    </main>
  );
};
