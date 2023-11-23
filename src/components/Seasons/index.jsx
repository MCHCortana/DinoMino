import './style.css';
export const Seasons = () => {
  return (
    <>
      <div className="season-box">
        <div className="season-box_two">
          <div className="season-winter">
            <div className="season-winter_content">
              <h2 className="season-title winter">Zima</h2>

              <img src="./img/3 (1).png" alt="Winter" />
            </div>
          </div>
        </div>

        <div className="season-box_two">
          <div className="season-spring">
            <div className="season-spring_content">
              <h2 className="season-title spring">Jaro</h2>
              <img src="./img/4 (1).png" alt="Spring" />
            </div>
          </div>
        </div>
      </div>

      <div className="season-box">
        <div className="season-box_two">
          <div className="season-summer">
            <div className="season-summer_content">
              <h2 className="season-title summer">Léto</h2>
              <img src="./img/5.png" alt="Summer" />
            </div>
          </div>
        </div>

        <div className="season-box_two">
          <div className="season-autumn">
            <div className="season-autumn_content">
              <h2 className="season-title autumn">Podzim</h2>
              <img src="./img/2 (1).png" alt="Autumn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
