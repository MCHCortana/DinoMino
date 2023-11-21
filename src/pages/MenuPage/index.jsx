// MenuPage.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './style.css';

export const MenuPage = () => {
  return (
    <main className="container__menu_page">
      <Container className="grid-menu_page">
        <Row>
          <Col className="userName">
            <h1>Ahoj Martínku!</h1>
          </Col>
        </Row>
        <Row>
          <div className="main_menu">
            <Row className="row1-menu_page">
              <Col>
                <Link to="/activitypage">
                  <img
                    className="menu_page--calendar"
                    src="./img/IconsFunctional/calendar.png"
                    alt="Calendar"
                  />
                </Link>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <img
                  className="menu_page--planner"
                  src="./img/IconsFunctional/planner.png"
                  alt="Planner"
                />
              </Col>
            </Row>
            <Row className="row2-menu_page">
              <Col>
                <Link to="/gamepage">
                  <img
                    className="menu_page--puzzle"
                    src="./img/IconsFunctional/puzzle.png"
                    alt="Puzzle"
                  />
                </Link>
              </Col>
            </Row>
          </div>
        </Row>
        <Row>
          <Col>
            <img
              className="dino-mino__menupage"
              src="./img/DinoMinoNoShadow.png"
              alt="Dino Mino"
            />
          </Col>
          <Col xs lg="4"></Col>
          <Col>
            <img
              className="faq-menupage"
              src="./img/IconsFunctional/faq.png"
              alt="FAQ"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
