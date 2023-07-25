import { Col, Container, Row } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import "./slidercard.css";

const SlideCardMenu = ({title,desc,coverUrl}) => {
  const {language} = useContext(LanguageContext);
  const router =useNavigate();

  const handleContactClick = () =>{
    router(`/`);
  }
  return (
      <div className='menu-box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='btn-primary'onClick={() => handleContactClick()}>{language === "vie" ? "Xem thêm" : "Find out more"}</button>
          </Col>
          <Col md={6}>
            <img src={coverUrl} alt="#" />
          </Col>
        </Row>

    </div>
  )
}

export default SlideCardMenu;
