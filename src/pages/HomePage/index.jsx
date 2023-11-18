import './style.css';

export const HomePage = () => {
  return (
    <main className="container-main__page">
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <div className="question-name">
          <p>Ahoj, já jsem Dino Míno.</p>
          <label>
            A jak se jmenuješ ty?
            <input type="text" className="custom-input"></input>
          </label>
        </div>
        <div className="dino-foot">
          <img
            className="dino-mino__main-page"
            src="./img/DinoMinoAdjusted.png"
          />
          <img
            className="foot-print__main-page"
            src="./img/IconsFunctional/footPrintMain.png"
          />
        </div>
      </div>
    </main>
  );
};
