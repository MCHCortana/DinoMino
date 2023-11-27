import './style.css';

export const Monster = () => {
  const handlePrint = () => {
    const printContent = document.querySelector('.monster-container__box');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <main className="monster-container">
      <div className="monster-container__title">
        <img src="./img/Monster/mon.png" alt="Mon"></img>
        <img src="./img/Monster/ster.png" alt="Ster"></img>
        <img
          className="monster_2"
          src="./img/Monster/monster_2.png"
          alt="Monster"
        ></img>
        <img src="./img/Monster/set.png" alt="Set"></img>
      </div>
      <div className="monster-container__fields">
        <div className="monster-container__set">
          <div className="set-eyes">
            <img src="./img/Monster/oko_1.png" alt="Oko"></img>
            <img src="./img/Monster/oko_2.png" alt="Oko"></img>
            <img src="./img/Monster/oko_3.png" alt="Oko"></img>
            <img src="./img/Monster/oko_4.png" alt="Oko"></img>
            <img src="./img/Monster/oko_5.png" alt="Oko"></img>
            <img src="./img/Monster/oko_6.png" alt="Oko"></img>
            <img src="./img/Monster/oko_7.png" alt="Oko"></img>
            <img src="./img/Monster/oko_8.png" alt="Oko"></img>
            <img src="./img/Monster/nimb.png" alt="Nimb"></img>
          </div>

          <img src="./img/Monster/noha_5.png" alt="Noha"></img>
          <img src="./img/Monster/noha_3.png" alt="Noha"></img>
          <img src="./img/Monster/noha_2.png" alt="Noha"></img>
          <img src="./img/Monster/noha_6.png" alt="Noha"></img>
          <img src="./img/Monster/noha_4.png" alt="Noha"></img>

          <img src="./img/Monster/noha_1.png" alt="Noha"></img>

          <img src="./img/Monster/kridlo_1.png" alt="Křidlo"></img>
          <img src="./img/Monster/kridlo_5.png" alt="Křidlo"></img>
          <img src="./img/Monster/kridlo_3.png" alt="Křidlo"></img>
          <img src="./img/Monster/kridlo_2.png" alt="Křidlo"></img>
          <img src="./img/Monster/kridlo_6.png" alt="Křidlo"></img>
          <img src="./img/Monster/kridlo_4.png" alt="Křidlo"></img>

          <img src="./img/Monster/ruce_1.png" alt="Ruce"></img>
          <img src="./img/Monster/ruce_4.png" alt="Ruce"></img>
          <img src="./img/Monster/ruce_2.png" alt="Ruce"></img>
          <img src="./img/Monster/ruce_5.png" alt="Ruce"></img>
          <img src="./img/Monster/ruce_3.png" alt="Ruce"></img>
          <img src="./img/Monster/ruce_6.png" alt="Ruce"></img>

          <div className="set-corners">
            <img src="./img/Monster/rohy_1.png" alt="Rohy"></img>
            <img src="./img/Monster/rohy_2.png" alt="Rohy"></img>
            <img src="./img/Monster/rohy_3.png" alt="Rohy"></img>
            <img src="./img/Monster/rohy_4.png" alt="Rohy"></img>
          </div>

          <div className="set-tail">
            <img src="./img/Monster/ocas_2.png" alt="Ocas"></img>
            <img src="./img/Monster/ocas_1.png" alt="Ocas"></img>
            <img src="./img/Monster/ocas_3.png" alt="Ocas"></img>
          </div>

          <img className="body" src="./img/Monster/telo_1.png" alt="Tělo"></img>
          <img className="body" src="./img/Monster/telo_2.png" alt="Tělo"></img>
          <img className="body" src="./img/Monster/telo_3.png" alt="Tělo"></img>
        </div>
        <div className="monster-container__box">
          <img
            className="print-icon"
            src="./img/IconsFunctional/printer3.png"
            alt="Printer"
            onClick={handlePrint}
          ></img>
        </div>
      </div>
    </main>
  );
};
