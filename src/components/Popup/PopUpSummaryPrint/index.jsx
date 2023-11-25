import './style.css';

export const PopUpSummaryPrint = () => {
  return (
    <>
      <div className="sumary-container">
        <p>Rok má 365 dní</p>
        <h3>Rok má 4 ročni období.Teď mame zimu</h3>
        <div className="sumary-winter">
          <h2>Zima</h2>
          <p>Kreslím si, jak padá sníh</p>
          <p>na pole a na cesty.</p>
          <p>Sněhuláka kreslím též</p>
          <p>bez kabátu bez vesty.</p>
        </div>

        <h3>Rok Má 12 měsíců. Teď máme prosinec</h3>

        <div className="sumary-winter">
          <h2>Prosinec</h2>
          <p>Za prosince končí rok,</p>
          <p>do nového už jen krok.</p>
          <p>V prosinci jsou Vánoce,</p>
          <p>přesně jednou po roce.</p>
        </div>
        <h3>Týden má 7 dní, dnes je</h3>
        <div className="print">
          <img
            className="print-icon"
            src="./img/IconsFunctional/printer3.png"
            alt="Printer"
            onClick={() => {
              window.print();
            }}
          ></img>
        </div>
      </div>
    </>
  );
};
