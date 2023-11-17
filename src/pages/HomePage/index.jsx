import './style.css';

export const HomePage = () => {
  return (
    <main className="container-main__page">
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <div className="question-name">
          <p>Já jsem dino míno a jak se jmenuješ ty? </p>
          <input type="text"></input>
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
