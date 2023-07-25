import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./section.css";

const Section = ({ title, img, subTitle, content, direction, bgcolor }) => {
  return (
    <section className="section" style={{ backgroundColor: bgcolor }}>
      <Container>
        <div className="heading">
          <div>
            <h1> {title}</h1>
            <div className="heading-decoration"></div>
          </div>
        </div>
        <Row
          className="justify-content-center"
          style={{
            flexDirection:
              direction === "left to right" ? "row" : "row-reverse",
          }}
        >
          <img src={img} alt="..." />
          <div className="section-content">
            <h2>{subTitle}</h2>
            <p>{`${content} `}</p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
