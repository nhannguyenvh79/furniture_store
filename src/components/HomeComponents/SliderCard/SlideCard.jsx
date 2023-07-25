import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

const SlideCard = ({ title, desc, cover }) => {
  const { language } = useContext(LanguageContext);
  return (
    <Container className="box">
      <Row>
        <Col md={7}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button
            className="btn-primary"
            style={{
              borderRadius: "5px",
              margin: "10px 0px",
              backgroundColor: "rgb(15, 52, 96)",
              color: "white",
            }}
          >
            <Link
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "rgb(15, 52, 96)",
                color: "white",
                textDecoration: "none",
              }}
              to="/design"
            >
              {language === "vie" ? "Xem Bộ Sưu Tập" : "Visit Collections"}
            </Link>
          </button>
        </Col>
        <Col md={5}>
          <div className="img-container">
            <img src={cover} alt="#" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
