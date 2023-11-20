import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const GamePage = () => {
  return (
    <main className="container__game_page">
      <h1 className="userName">A jdeme si hrát!</h1>
      <img className="dino-mino__gamepage" src="./img/DinoMinoNoShadow.png" />
      <Container className="game_menu">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <img
              className="game_page--presents"
              src="./img/IconsCalendar/presents.png"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          {/* <Col></Col> */}
          {/* <Col>
            <img
              className="menu_page--planner"
              src="./img/IconsFunctional/planner.png"
            />
          </Col> */}
          <Col>
            <img
              className="game_page--dino"
              src="./img/IconsCalendar/dinosaur (1).png"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
