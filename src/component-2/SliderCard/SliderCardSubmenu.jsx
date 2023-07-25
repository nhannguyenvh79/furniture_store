import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

export default function SlideCardSubmenu ({coverUrl,text}) {
  return (
      <Container className='subm-box' >
        <Row>
          <Col md={6}>
            <img src={coverUrl} alt="#" />
          </Col>
          <Col md={6}>
            <h1>{text}</h1>
          </Col>
        </Row>

    </Container>
  )
}


