import './style.css';

export const XmasTreeButtons = ({
  tree,
  onChoice,
  popCheck,
  clickedDay,
  day,
}) => {
  const handleClick = (e) => {
    tree.map((ornament) => {
      //Pouzn.:v případě odkomentování této sekce, je možné klikat  pouze na správný den měsíce Prosince - ADVENTNÍ kalendář, z důvodu hodnocení funčnosti a odevzávání projektu, je tato část zakomentováná, aby uživatel mohl vidět celou sekci. Při IRL požívání nutno odkomentovat

      //Pozn.: odpočet do štědrého dne se odvozuje od čísla, na adventním kalendáři, a funguje tedy při odkomentování sekce. Při zakomentování této sekce je funkce odpočtu omezena.

      // if (ornament.number !== day.toString()) {
      // } else ..............tady je nutné ještě spojit řádek a vytvořit else if
      if (ornament.number === e.target.textContent) {
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
        <div className="tree xmasTreeRow--1">
          <button id="xmas_star" onClick={handleClick}>
            24
          </button>
        </div>
        <div className="tree xmasTreeRow--2">
          <button className="xmas_red" onClick={handleClick}>
            3
          </button>
          <button className="xmas_white" onClick={handleClick}>
            21
          </button>
        </div>
        <div className="tree xmasTreeRow--3">
          <button className="xmas_green" onClick={handleClick}></button>
          <button className="xmas_cherry" onClick={handleClick}>
            12
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="tree xmasTreeRow--4">
          <button className="xmas_blue--dark" onClick={handleClick}>
            13
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_green" onClick={handleClick}>
            20
          </button>
          <button className="xmas_white" onClick={handleClick}>
            18
          </button>
        </div>
        <div className="tree xmasTreeRow--5">
          <button className="xmas_blue" onClick={handleClick}>
            17
          </button>
          <button className="xmas_cherry" onClick={handleClick}>
            23
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            10
          </button>
          <button className="xmas_green" onClick={handleClick}>
            15
          </button>
          <button className="xmas_blue--dark" onClick={handleClick}>
            22
          </button>
        </div>
        <div className="tree xmasTreeRow--6">
          <button className="xmas_green" onClick={handleClick}>
            5
          </button>
          <button className="xmas_red" onClick={handleClick}>
            4
          </button>
          <button className="xmas_white" onClick={handleClick}>
            11
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_cherry" onClick={handleClick}>
            7
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            19
          </button>
        </div>
        <div className="tree xmasTreeRow--7">
          <button className="xmas_white" onClick={handleClick}>
            1
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_blue--dark" onClick={handleClick}>
            8
          </button>
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
