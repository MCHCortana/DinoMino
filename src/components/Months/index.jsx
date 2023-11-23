import './style.css';

export const Months = () => {
  return (
    <div className="mounths-box">
      <div className="season">
        <div className="mounths">
          <div className="mounth-box january">
            <p>Leden</p>
          </div>
          <div className="mounth-box february">
            <p>Únor</p>
          </div>
        </div>
        <div className="winter-img">
          <img className="season-winter" src="./img/3 (1).png" alt="Winter" />
        </div>
      </div>

      <div className="season">
        <div className="spring-img">
          <img className="season-spring" src="./img/4 (1).png" alt="Spring" />
        </div>
        <div className="mounths">
          <div className="mounth-box march">
            <p>Březen</p>
          </div>
          <div className="mounth-box april">
            <p>Duben</p>
          </div>
          <div className="mounth-box may">
            <p>Květen</p>
          </div>
        </div>
      </div>

      <div className="season">
        <div className="mounths">
          <div className="mounth-box june">
            <p>Červen</p>
          </div>
          <div className="mounth-box july">
            <p>Červenec</p>
          </div>
          <div className="mounth-box august">
            <p>Srpen</p>
          </div>
        </div>
        <div className="summer-img">
          <img className="season-summer" src="./img/5.png" alt="Summer" />
        </div>
      </div>

      <div className="season">
        <div className="autumn-img">
          <img className="season-autumn" src="./img/2 (1).png" alt="Autumn" />
        </div>
        <div className="mounths">
          <div className="mounth-box september">
            <p>Září</p>
          </div>
          <div className="mounth-box october">
            <p>Říjen</p>
          </div>
          <div className="mounth-box november">
            <p>Listopad</p>
          </div>
        </div>
      </div>

      <div className="season">
        <div className="mounths">
          <div className="mounth-box december">
            <p>Prosinec</p>
          </div>
        </div>
        <div className="winter-img">
          <img className="season-winter" src="./img/3 (1).png" alt="Winter" />
        </div>
      </div>
    </div>
  );
};
