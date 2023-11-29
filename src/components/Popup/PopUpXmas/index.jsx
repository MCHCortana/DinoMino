import dayjs from 'dayjs';
import './style.css';

export const PopUpXmas = ({ popContent, day }) => {
  const { id, element, number, text, name } = popContent;
  console.log('number ze stromku', number);
  return (
    <div className="popup_xmas">
      <div className="popup_xmas_general">
        {number === '' && <h2>Tady nic není, hledej dál</h2>}
        {number !== '' && (
          <>
            <div className="xmas_dates">
              <h2>
                Dnes je
                <i>
                  <strong> {day}. prosince</strong>
                </i>
              </h2>
              {24 - number !== 0 && (
                <h2>Do Štědrého dne zbývá {24 - number} dní.</h2>
              )}
              {number % 7 === 0 && number / 7 !== 1 && (
                <h2>To jsou {number / 7} týdny.</h2>
              )}
              {number % 7 === 0 && number / 7 === 1 && (
                <h2>Ježíšek přijde už za jeden týden.</h2>
              )}
              <div className="ryhmes">
                {24 - number === 0 ? (
                  <h2>VESELÉ VÁNOCE</h2>
                ) : (
                  <h2>Říkanka dne:</h2>
                )}
                {24 - number === 0 && (
                  <div className="audio">
                    <h2>Dnes je </h2>
                    <h2>ŠTĚDRÝ DEN</h2>
                    <img src="./img/IconsCalendar/music-notes.png" alt="Noty" />
                    <audio controls>
                      <source src="./audio/01Vanoce.mp3" type="audio/mpeg" />{' '}
                    </audio>
                  </div>
                )}
                <h3>{text}</h3>
              </div>
            </div>
            <div className="coloring_div">
              <a href={`./img/coloring/omalovanky${number.toString()}.jpg`}>
                <h3>🎁 Omalovánka ke stažení. 🎁</h3>
                <img
                  className="coloring"
                  src={`./img/coloring/omalovanky${number.toString()}.jpg`}
                  alt="Omalovánka ke stažení"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
