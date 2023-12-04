import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { osloveni } from './osloveni';
import { Header } from './../../components/Header';

export const MenuPage = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    console.log(data);
    setUserName(data);
  }, []);
  return (
    <>
      <Header />
      <main className="container__menu_page">
        <h1 className="userName">Ahoj {osloveni(userName)}</h1>
        <img
          className="faq-menupage"
          src="./img/IconsFunctional/faq.png"
          alt="FAQ"
        />
        <div className="menu_page-content">
          <img
            className="dino-mino__menupage"
            src="./img/DinoMinoNoShadow.png"
          />
          <div className="main_menu">
            <div className="menu_icon--one-two">
              <div>
                <Link to="/activitypage">
                  <img
                    className="menu_page--calendar"
                    src="./img/IconsFunctional/calendar.png"
                    alt="Kalendář"
                  />
                </Link>
              </div>
              <div>
                <Link to="/plannerpage">
                  <img
                    className="menu_page--planner"
                    src="./img/IconsFunctional/planner.png"
                    alt="Plánovač"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Link to="/gamepage">
                <img
                  className="menu_page--puzzle"
                  src="./img/IconsFunctional/puzzle.png"
                  alt="Hry"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
