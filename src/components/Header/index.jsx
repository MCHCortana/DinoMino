import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUp } from '../../components/Popup';

export const Header = ({ menuPageLink, gamePageLink }) => {
  const [popCheck, setPopCheck] = useState(false);
  const handleClickOpenInfo = () => {
    setPopCheck(true);
  };
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    console.log(data);
    setUserName(data);
  }, []);

  return (
    <header>
      {popCheck && <PopUp popCheck={setPopCheck} location={'popupinfo'} />}
      <Link to="/">
        <img
          className="link-menu"
          src="./img/IconsFunctional/footPrintMain.png"
        />
      </Link>
      <div className="mid_sec_menu">
        {!menuPageLink && (
          <Link to="/menupage">
            <img className="link-menu" src="./img/IconsFunctional/menu.png" />
          </Link>
        )}
        {!gamePageLink && (
          <Link to="/gamepage">
            <img
              className="link-menu-puzzle"
              src="./img/IconsFunctional/puzzle.png"
            />
          </Link>
        )}
      </div>

      <img
        onClick={handleClickOpenInfo}
        className="link-menu"
        src="./img/IconsFunctional/faq.png"
      />
    </header>
  );
};
