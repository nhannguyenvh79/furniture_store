import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "../../../data/serviceData";
import { LanguageContext } from "../../../context/LanguageContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Wrapper = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(serviceData.vie);
  useEffect(() => {
    if (language === "vie") {
      setData(serviceData.vie);
    } else {
      setData(serviceData.eng);
    }
  }, [language]);
  return (
    <section className="wrapper background bottom-to-top-animation">
      <Container>
        <Row>
          {data.map((val, index) => {
            return (
              <Col
                md={3}
                sm={5}
                xs={9}
                style={{ backgroundColor: val.bg }}
                className="feature left-to-right-animation"
                key={index}
              >
                <div className="icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.subtitle}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
