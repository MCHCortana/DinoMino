import './style.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <main className="container-main__page">
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <img className="faq-HomePage" src="./img/IconsFunctional/faq.png" />
        <div className="question-name">
          <p>Ahoj, já jsem Dino Míno.</p>
          <label>
            <input
              type="text"
              placeholder=" A jak se jmenuješ ty?"
              className="custom-input"
            ></input>
          </label>
        </div>
        <div className="dino-foot">
          <img
            className="dino-mino__main-page"
            src="./img/DinoMinoNoShadow.png"
          />
          <Link to="/menupage">
            <img
              className="foot-print__main-page"
              src="./img/IconsFunctional/footPrintMain.png"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};
