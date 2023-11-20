import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ActivityPage = () => {
  return (
    <main className="container-activity_page">
      <Container className="grid-activity_page">
        <Row>
          <Col className="activity_options">
            {' '}
            1 of 2
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Col>
          <Col className="summary-activity_page">2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
        </Row>
        <Row>
          <Col xs lg="4">
            <img
              className="dino-mino__activitypage"
              src="./img/DinoMinoNoShadow.png"
            />
          </Col>
          <Col>2 of 3</Col>
        </Row>
      </Container>
    </main>
  );
};
