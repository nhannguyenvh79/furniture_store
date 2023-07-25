import { Container, Row } from "react-bootstrap";
import "./section.css";
import useAnimation from "../../../customHooks/animationHook";
import { useRef } from "react";

const Section = ({ title, img, subTitle, content, direction, bgcolor }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [fadein1, right1, bottom1, left1] = useAnimation(ref1);
  const [fadein2, right2, bottom2, left2] = useAnimation(ref2);
  const [fadein3, right3, bottom3, left3] = useAnimation(ref3);

  return (
    <section className="section" style={{ backgroundColor: bgcolor }}>
      <Container>
        <div ref={ref1} className={`heading ${fadein1}`}>
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
          <img ref={ref2} className={`${left2}`} src={img} alt="..." />
          <div ref={ref3} className={`section-content ${right3}`}>
            <h2>{subTitle}</h2>
            <p>{`${content} `}</p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
