import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PopUp } from '../../components/Popup';

export const Header = () => {
  const [popInfo, setPopInfo] = useState(false);
  const handleClickOpenInfo = () => {
    setPopInfo(true);
  };
  return (
    <header>
      {popInfo && <PopUp popInfo={setPopInfo} location={'popupinfo'} />}
      <Link to="/menupage">
        <img
          className="link-menu"
          src="./img/IconsFunctional/footPrintMain.png"
        />
      </Link>
      <Link to="/menupage">
        <img className="link-menu" src="./img/IconsFunctional/menu.png" />
      </Link>
      <Link to="/">
        <img className="link-menu" src="./img/IconsFunctional/faq.png" />
      </Link>
    </header>
  );
};
