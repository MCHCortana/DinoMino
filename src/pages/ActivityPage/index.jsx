import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ActivityPage = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
    </Container>
    // <main className="container-activity_page">
    //   <div className="options-activity_page">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste
    //     temporibus eveniet quibusdam voluptates exercitationem, voluptatibus
    //     dolor iusto dolorem corporis blanditiis quod esse sit quis quo aperiam,
    //     consequatur, ab odit.
    //   </div>

    //   <div className="faq-activity_page">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
    //     dolore, in quis earum illum dolorem illo unde blanditiis, natus magnam
    //     odio tempore, repellat ipsam nemo? Enim vel blanditiis deserunt porro?
    //   </div>
    //   <div className="summary">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
    //     magni, placeat numquam quibusdam dolores unde modi eaque error
    //     reprehenderit quis laudantium voluptatibus animi veniam in ipsam
    //     consequuntur possimus quos? Commodi.
    //   </div>
    // </main>
  );
};
