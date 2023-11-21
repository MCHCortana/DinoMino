import './style.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <Link to="/menupage">
        <img
          className="link-menu"
          src="./img/IconsFunctional/footPrintMain.png"
        />
      </Link>
      <Link to="/">
        <img className="link-menu" src="./img/IconsFunctional/faq.png" />
      </Link>
    </header>
  );
};
