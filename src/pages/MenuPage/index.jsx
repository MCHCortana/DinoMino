import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const MenuPage = () => {
  return (
    <main className="container__menu_page">
      <h1 className="userName">Ahoj Martínku!</h1>
      <img className="dino-mino__menupage" src="./img/DinoMinoNoShadow.png" />
      <Container className="main_menu">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <img
              className="menu_page--calendar"
              src="./img/IconsFunctional/calendar.png"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <img
              className="menu_page--planner"
              src="./img/IconsFunctional/planner.png"
            />
          </Col>
          <Col>
            <Link to="/gamepage">
              <img
                className="menu_page--puzzle"
                src="./img/IconsFunctional/puzzle.png"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
