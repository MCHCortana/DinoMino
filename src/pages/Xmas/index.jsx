import './style.css';
import { Ornaments } from '../../components/Ornaments';
import { PopUp } from './../../components/Popup/';
import { useEffect, useState } from 'react';

export const Xmas = () => {
  const [treeDec, setTreeDec] = useState(null);

  const [popupTreeDec, setPopUpTreeDec] = useState(null);

  const [popCheck, setPopCheck] = useState(false);

  useEffect(() => {
    const fetchOrnamentData = async () => {
      const response = await fetch('http://localhost:4000/api/xmas');
      if (!response.ok) {
        console.log('je to v háji, nefunguje to');
      }
      const data = await response.json();
      console.log(data);
      setTreeDec(data.result);
    };
    fetchOrnamentData();
  }, []);

  console.log(treeDec);

  return (
    <main className="xmas_tree-container">
      <div className="advent_calendar">
        <h2>Adventní kalendář</h2>
        <img src="./img/dinoWinter2.png" />
      </div>
      <div className="christmas_tree tree_grid">
        {popCheck && <PopUp popupTreeDec={popupTreeDec} location={'xmas'} />}
        {treeDec &&
          treeDec.map((ornament) => {
            return (
              <Ornaments
                key={ornament.id}
                popCheck={setPopCheck}
                ornament={ornament}
                onChoice={setPopUpTreeDec}
                fill={ornament.element}
                number={ornament.number}
              />
            );
          })}
      </div>
    </main>
  );
};
