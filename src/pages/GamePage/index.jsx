import './style.css';
import { Link } from 'react-router-dom';

export const GamePage = () => {
  return (
    <main className="container__game_page">
      <h1>A jdeme si hrát!</h1>
      <img className="dino-mino__gamepage" src="./img/DinoMinoNoShadow.png" />
      <div className="game_menu">
        <div>
          <Link to="/xmas">
            <img
              className="game_page--presents"
              src="./img/IconsCalendar/christmas-tree2.png"
              alt="Adventní kalendář"
            />
          </Link>
        </div>
        <div>
          <img
            className="game_page--dino"
            src="./img/IconsCalendar/monster.png"
          />
        </div>
      </div>
    </main>
  );
};
