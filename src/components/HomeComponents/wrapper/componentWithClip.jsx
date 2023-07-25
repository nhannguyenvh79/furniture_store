import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./componentWithClip.css";
import { withClipData } from "../../../data/withClipData";
import useAnimation from "../../../customHooks/animationHook";
import { useRef } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { useState } from "react";
import { useEffect } from "react";

function HomeComponentWithClip(props) {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [fadein1, right1, bottom1, left1] = useAnimation(ref1);
  const [fadein2, right2, bottom2, left2] = useAnimation(ref2);
  const [fadein3, right3, bottom3, left3] = useAnimation(ref3);
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(withClipData.vie);
  useEffect(() => {
    if (language === "vie") {
      setData(withClipData.vie);
    } else {
      setData(withClipData.eng);
    }
  }, [language]);

  return (
    <Container className="clip-container">
      <Row ref={ref1} className={`sub-container-1 ${fadein1}`}>
        <Col className="main-content">
          <h2>{data.title1}</h2>
          <h5>{data.content1}</h5>
        </Col>
      </Row>
      <Row className="sub-container-2">
        <Col ref={ref2} className={`sub-content ${left2}`}>
          <div>
            <h2>{data.title2}</h2>
            <p>{data.content2}</p>
          </div>
        </Col>
        <Col ref={ref3} className={`clip ${right3}`}>
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
