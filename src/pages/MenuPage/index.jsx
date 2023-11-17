import './style.css';

export const MenuPage = () => {
  return (
    <main className="container__menu_page">
      <h1 className="userName">Ahoj Martínku!</h1>
      <img className="dino-mino__menupage" src="./img/DinoMinoAdjusted.png" />
      <div className="main_menu">
        <img src="./img/IconsFunctional/calendar.png" />
        <img src="./img/IconsFunctional/planner.png" />
        <img src="./img/IconsFunctional/puzzle.png" />
      </div>
    </main>
  );
};
