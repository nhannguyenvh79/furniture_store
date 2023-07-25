import React, { useContext } from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return language === "eng" ? (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>NhaGo</h1>
            </div>
            <p>
              Wood plank distribution partner leading industry in Vietnam. There
              are also samples of sofa fabrics, curtains, stone, wooden floors,
              etc. for customers Easy to choose and save time.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link to="/recruitment">Careers</Link>
              </li>
              <li>
                <Link to="/design">Our Stores</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">How to Buy</Link>
              </li>
              <li>
                <Link to="/">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/">Corporate & Bulk Purchasing</Link>
              </li>
              <li>
                <Link to="/">Track Your Order</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d74583.08807049935!2d106.64970358823533!3d10.762232652536976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f3129e64d%3A0x8d6b2d79522c7f30!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1688096633896!5m2!1svi!2s"
                style={{
                  width: "200px",
                  height: "100px",
                  border: 0,
                  borderRadius: "5px",
                }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <li>
                Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:0123456789">0123456789</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  ) : (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>NhaGo</h1>
            </div>
            <p>
              Đối tác phân phối ván gỗ công nghiệp hàng đầu Việt Nam. Ở đó Ngoài
              ra còn có các mẫu sofa vải, rèm cửa, đá, sàn gỗ, v.v… để khách
              hàng dễ dàng lựa chọn và tiết kiệm thời gian.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Về chúng tôi</h2>
            <ul>
              <li>
                <Link to="/recruitment">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="/design">Cửa hàng</Link>
              </li>
              <li>
                <Link to="/">Điều khoản và điều kiện</Link>
              </li>
              <li>
                <Link to="/">Chính sách bảo mật</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              <li>
                <Link to="/">Trung tâm trợ giúp</Link>
              </li>
              <li>
                <Link to="/">làm thế nào để mua</Link>
              </li>
              <li>
                <Link to="/">Trả lại & Hoàn tiền</Link>
              </li>
              <li>
                <Link to="/">Cộng tác & Mua số lượng lớn</Link>
              </li>
              <li>
                <Link to="/">Theo dõi đơn hàng của bạn</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Liên hệ chúng tôi</h2>
            <ul>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d74583.08807049935!2d106.64970358823533!3d10.762232652536976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f3129e64d%3A0x8d6b2d79522c7f30!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1688096633896!5m2!1svi!2s"
                style={{
                  width: "200px",
                  height: "100px",
                  border: 0,
                  borderRadius: "5px",
                }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <li>
                Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
              </li>
              <li>
                Điện thoại: <a href="tel:0123456789">0123456789</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
