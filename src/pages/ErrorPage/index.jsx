import './style.css';
import { Link } from 'react-router-dom';
import './style.css';

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-container--content">
        <h2 className="error">404: Tady nic není</h2>
        <p>Asi jste se spletli</p>
        <Link className="back-home" to="/">
          Zpět Domů
          <img src="./img/IconsFunctional/footPrintMain.png" />
        </Link>
      </div>
    </div>
  );
};
