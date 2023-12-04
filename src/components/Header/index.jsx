import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUp } from '../../components/Popup';

export const Header = () => {
  const [popCheck, setPopCheck] = useState(false);
  const [popCheckUser, setPopCheckUser] = useState(false);
  const handleClickOpenInfo = () => {
    setPopCheck(true);
  };
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    console.log(data);
    setUserName(data);
  }, []);

  const onImageClick = () => {
    setPopCheckUser(true);
  };
  return (
    <header>
      {popCheck && <PopUp popCheck={setPopCheck} location={'popupinfo'} />}
      {popCheckUser && (
        <PopUp popCheck={setPopCheckUser} location={'enterName'} />
      )}
      <Link to="/">
        <img
          className="link-menu"
          src="./img/IconsFunctional/footPrintMain.png"
        />
      </Link>
      {userName === '' || userName === null ? (
        <img
          onClick={onImageClick}
          className="link-menu"
          src="./img/IconsFunctional/menu.png"
        />
      ) : (
        <Link to="/menupage">
          <img className="link-menu" src="./img/IconsFunctional/menu.png" />
        </Link>
      )}

      <img
        onClick={handleClickOpenInfo}
        className="link-menu"
        src="./img/IconsFunctional/faq.png"
      />
    </header>
  );
};
