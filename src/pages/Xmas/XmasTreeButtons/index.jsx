import './style.css';

export const XmasTreeButtons = ({
  tree,
  onChoice,
  popCheck,
  clickedDay,
  day,
}) => {
  console.log('tohle je den', day);
  const handleClick = (e) => {
    console.log('tohle je den', day);
    console.log(e.target.textContent);
    tree.find((ornament) => {
      // if (ornament.number !== day) {
      //   return;
      // } else
      if (ornament.number === e.target.textContent) {
        console.log('posílám ornament', ornament);
        onChoice(ornament);
        popCheck(true);
        clickedDay(ornament.number);
      }
    });
  };

  return (
    <div className="xmas_tree">
      <h2>Adventní kalendář</h2>
      <div className="xmas_tree_buttons">
        {/* <img className="xmas_star_img" src="/img/xmas/xmasStar.png" /> */}
        <div className="tree xmasTreeRow--1">
          <button id="xmas_star" onClick={handleClick}>
            24
          </button>
        </div>
        <div className="tree xmasTreeRow--2">
          <button className="xmas_red" onClick={handleClick}>
            3
          </button>
          <button onClick={handleClick}>21</button>
        </div>
        <div className="tree xmasTreeRow--3">
          <button className="xmas_green" onClick={handleClick}></button>
          <button onClick={handleClick}>12</button>
          <button className="xmas_blue" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="tree xmasTreeRow--4">
          <button onClick={handleClick}>13</button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_green" onClick={handleClick}>
            20
          </button>
          <button onClick={handleClick}>18</button>
        </div>
        <div className="tree xmasTreeRow--5">
          <button className="xmas_blue" onClick={handleClick}>
            17
          </button>
          <button onClick={handleClick}>23</button>
          <button className="xmas_blue" onClick={handleClick}>
            10
          </button>
          <button className="xmas_green" onClick={handleClick}>
            15
          </button>
          <button onClick={handleClick}>22</button>
        </div>
        <div className="tree xmasTreeRow--6">
          <button className="xmas_green" onClick={handleClick}>
            5
          </button>
          <button className="xmas_red" onClick={handleClick}>
            4
          </button>
          <button onClick={handleClick}>11</button>
          <button className="xmas" onClick={handleClick}></button>
          <button onClick={handleClick}>7</button>
          <button className="xmas_blue" onClick={handleClick}>
            19
          </button>
        </div>
        <div className="tree xmasTreeRow--7">
          <button onClick={handleClick}>1</button>
          <button className="xmas" onClick={handleClick}></button>
          <button onClick={handleClick}>8</button>
          <button className="xmas_red" onClick={handleClick}>
            2
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            16
          </button>
          <button className="xmas_green" onClick={handleClick}>
            6
          </button>
          <button className="xmas_red" onClick={handleClick}>
            14
          </button>
        </div>
        <div className="tree xmasTreeRow--8">
          <button id="xmas_brown" onClick={handleClick}></button>
        </div>
      </div>
    </div>
  );
};
