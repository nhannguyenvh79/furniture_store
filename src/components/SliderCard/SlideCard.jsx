import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={7}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button
            className="btn-primary"
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              margin: "10px 0px",
            }}
          >
            Visit Collections
          </button>
        </Col>
        <Col md={6}>
          <img src={cover} />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
