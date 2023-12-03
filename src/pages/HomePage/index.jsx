import { useEffect, useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [userName, setUserName] = useState('');
  const handleNameDeleteClick = () => {
    setUserName('');
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <main className="container-main__page">
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <div className="question-name">
          <p>Ahoj, já jsem Dino Míno.</p>

          <label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Jak se jmenuješ?"
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
      <img
        className="sweep-HomePage "
        onClick={handleNameDeleteClick}
        src="./img/IconsFunctional/dust.png"
        alt="remove activity"
      />
    </main>
  );
};
