import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUp } from '../../components/Popup';

export const Header = () => {
  const [popCheck, setPopCheck] = useState(false);
  const handleClickOpenInfo = () => {
    setPopCheck(true);
  };
  return (
    <header>
      {popCheck && <PopUp popCheck={setPopCheck} location={'popupinfo'} />}
      <Link to="/">
        <img
          className="link-menu"
          src="./img/IconsFunctional/footPrintMain.png"
        />
      </Link>
      <Link to="/menupage">
        <img className="link-menu" src="./img/IconsFunctional/menu.png" />
      </Link>

      <img
        onClick={handleClickOpenInfo}
        className="link-menu"
        src="./img/IconsFunctional/faq.png"
      />
    </header>
  );
};
