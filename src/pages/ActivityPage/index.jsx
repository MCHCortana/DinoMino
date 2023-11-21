import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SummaryActivityPage } from '../../components/SummaryActivityPage';

export const ActivityPage = () => {
  return (
    <main className="container-activity_page">
      <Container id="container--activity_page">
        <Row style={{ height: '100%' }}>
          {/* Left Column */}
          <Col xs={12} md={6} className="left-column">
            {/* First Row (2/3 of height) */}
            <Row className="first-row--activity_page">
              <Col style={{ backgroundColor: '#eee' }}>Content 1</Col>
            </Row>

            {/* Second Row (30% of height) */}
            <Row className="second-row--activity_page">
              <Col id="imgs">
                <img
                  className="dino-mino--activity_page"
                  src="./img/DinoReading.png"
                  alt="Dinosaur Dino Míno s knihou"
                />
              </Col>
              <Col className="faq--activity_page">
                <img src="./img/IconsFunctional/faq.png" alt="Pomoc" />
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={6} className="right-column--activity_page">
            <div className="summary">
              <SummaryActivityPage />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
