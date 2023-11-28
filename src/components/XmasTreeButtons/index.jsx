import './style.css';

export const XmasTreeButtons = ({ tree, onChoice, popCheck, clickedDay }) => {
  const handleClick = (e) => {
    console.log('textcontent', e.target.textContent);
    tree.find((ornament) => {
      if (ornament.number === e.target.textContent) {
        console.log('posílám ornament', ornament);
        onChoice(ornament);
        popCheck(true);
        clickedDay(ornament.number);
      }
    });
  };

  return (
    <div className="xmas_tree_buttons">
      <div className="tree xmasTreeRow--1">
        <button
          onClick={handleClick}
          className="xmas_star"
          // location={'xmas'}
        >
          <img className="xmasbutton--star" src="/img/xmas/xmasStar.png" />
        </button>
      </div>
      <div className="tree xmasTreeRow--2">
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>21</button>
      </div>
      <div className="tree xmasTreeRow--3">
        <button onClick={handleClick}></button>
        <button onClick={handleClick}>12</button>
        <button onClick={handleClick}>9</button>
      </div>
      <div className="tree xmasTreeRow--4">
        <button onClick={handleClick}>13</button>
        <button onClick={handleClick}></button>
        <button onClick={handleClick}>20</button>
        <button onClick={handleClick}>18</button>
      </div>
      <div className="tree xmasTreeRow--5">
        <button onClick={handleClick}>17</button>
        <button onClick={handleClick}>23</button>
        <button onClick={handleClick}>10</button>
        <button onClick={handleClick}>15</button>
        <button onClick={handleClick}>22</button>
      </div>
      <div className="tree xmasTreeRow--6">
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>11</button>
        <button onClick={handleClick}></button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>19</button>
      </div>
      <div className="tree xmasTreeRow--7">
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}></button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>16</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>14</button>
      </div>
    </div>
  );
};
