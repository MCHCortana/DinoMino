import './style.css';
import { Ornaments } from '../../components/Ornaments';
export const Xmas = () => {
  return (
    <main className="xmas_tree-container">
      <p>Something Here</p>
      <div className="christmas_tree">
        <Ornaments />
        <img src="./img/xmas/tree.png" alt="Vánoční stromeček" />
      </div>
    </main>
  );
};
