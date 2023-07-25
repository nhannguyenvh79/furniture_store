import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./componentWithClip.css";
import { withClipData } from "../../data/withClipData";

function HomeComponentWithClip() {
  const data = withClipData.eng;
  return (
    <Container className="clip-container">
      <Row className="sub-container-1">
        <Col className="main-content">
          <h2>{data.title1}</h2>
          <h5>{data.content1}</h5>
        </Col>
      </Row>
      <Row className="sub-container-2">
        <Col className="sub-content">
          <div>
            <h2>{data.title2}</h2>
            <p>{data.content2}</p>
          </div>
        </Col>
        <Col className="clip">
          <div></div>
          <iframe
            className="clip-play"
            src={data.link}
            title="Showroom nội thất hiện đại, sang trọng | NaDu Design"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponentWithClip;
