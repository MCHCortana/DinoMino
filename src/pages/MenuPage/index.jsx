import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const MenuPage = () => {
  return (
    <main className="container__menu_page">
      <h1 className="userName">Ahoj Martínku!</h1>
      <img className="dino-mino__menupage" src="./img/DinoMinoNoShadow.png" />
      <img
        className="faq-menupage"
        src="./img/IconsFunctional/faq.png"
        alt="FAQ"
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
            <img
              className="menu_page--planner"
              src="./img/IconsFunctional/planner.png"
              alt="Plánovač"
            />
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
    </main>
  );
};
