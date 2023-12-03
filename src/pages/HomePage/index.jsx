import './style.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PopUp } from './../../components/Popup';

export const HomePage = () => {
  const [popCheck, setPopCheck] = useState(false);
  const [userName, setUserName] = useState('');
  const [userNameEnter, setUserNameEnter] = useState(false);
  const handleNameDeleteClick = () => {
    confirm('Určitě chcete smazat uloženého uživtale') && setUserName('');
  };
  console.log('user name Enter', userNameEnter);
  const onImageClick = () => {
    setPopCheck(true);
  };

  const handleChange = (e) => {
    setUserNameEnter(true);
    setUserName(e.target.value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    console.log(data);
    setUserName(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <main className="container-main__page">
      {popCheck && <PopUp location={'enterName'} popCheck={setPopCheck} />}
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <div className="question-name">
          <p>Ahoj, já jsem Dino Míno.</p>
          <label>
            <input
              onChange={handleChange}
              type="text"
              placeholder={userName === '' ? 'Jak se jmenuješ?' : userName}
              className="custom-input"
              value={userName !== '' ? userName : ''}
            ></input>
          </label>
        </div>
        <div className="dino-foot">
          <img
            className="dino-mino__main-page"
            src="./img/DinoMinoNoShadow.png"
          />
          {userName === '' ? (
            <img
              onClick={onImageClick}
              className="foot-print__main-page"
              src="./img/IconsFunctional/footPrintMain.png"
            />
          ) : (
            <Link to="/menupage">
              <img
                className="foot-print__main-page"
                src="./img/IconsFunctional/footPrintMain.png"
              />
            </Link>
          )}
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
