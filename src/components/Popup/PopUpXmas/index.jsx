import './style.css';

export const PopUpXmas = ({ popContent }) => {
  const { id, element, number, text, name } = popContent;
  return (
    <div className="popup_xmas">
      <h2>
        Dnes je{}
        <i>
          <strong>{'Den teprve přijde z day js. '.toUpperCase()}</strong>
        </i>
      </h2>
      {24 - number !== 0 && <h2>Do Štědrého dne zbývá {24 - number}.</h2>}
      {number % 7 === 0 && number / 7 !== 1 && (
        <h2>To jsou {number / 7} týdny.</h2>
      )}
      {number % 7 === 0 && number / 7 === 1 && (
        <h2>Ježíšek přijde už za jeden týden.</h2>
      )}
      {24 - number === 0 && (
        <>
          <h2>Dnes je ŠTĚDRÝ DEN</h2>
          <img src="./img/IconsCalendar/music-notes.png" alt="Noty" />
        </>
      )}
      <h1>Říkanka dne:</h1>
      <h2>{text}</h2>
      <div>
        <h2>🎁Omalovánka k vytisknutí.🎁</h2>
        <a href={`./img/coloring/omalovanky${number.toString()}.jpg`}>
          <img
            className="coloring"
            src={`./img/coloring/omalovanky${number.toString()}.jpg`}
            alt="Omalovánka ke stažení"
          />
        </a>
      </div>
    </div>
  );
};
