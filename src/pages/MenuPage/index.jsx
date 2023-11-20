import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const MenuPage = () => {
  return (
    <main className="container__menu_page">
      <h1 className="userName">Ahoj Martínku!</h1>
      <img className="dino-mino__menupage" src="./img/DinoMinoNoShadow.png" />
      <div className="main_menu">
        <Container>
          <Row className="row1-menu_page">
            <Col>
              <Link to="/activitypage">
                <img
                  className="menu_page--calendar"
                  src="./img/IconsFunctional/calendar.png"
                />
              </Link>
            </Col>
            <Col>
              <img
                className="menu_page--planner"
                src="./img/IconsFunctional/planner.png"
              />
            </Col>
          </Row>
          <Row className="row2-menu_page">
            <Col md={{ span: 6, offset: 3 }}>
              <Link to="/gamepage">
                <img
                  className="menu_page--puzzle"
                  src="./img/IconsFunctional/puzzle.png"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};
