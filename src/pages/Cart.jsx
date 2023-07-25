import { useContext, useEffect, useState } from "react";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LanguageContext } from "../context/LanguageContext";

export default function Cart() {
  const { language } = useContext(LanguageContext);
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [validName, setValidName] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct } =
    useContext(DataContainer);
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  useEffect(() => {
    if (!name || name.trim() === "") {
      return setValidName(false);
    }

    if (name.length > 255 && name.length < 2) {
      return setValidName(false);
    }

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{}|;:'",./<>?]/;
    if (specialCharacters.test(name)) {
      return setValidName(false);
    }

    return setValidName(true);
  }, [name]);
  useEffect(() => {
    function isValidPhoneNumber(phoneNumber) {
      const phoneNumberPattern = /^(03|05|07|08|09)[0-9]{8,9}$/;
      return phoneNumberPattern.test(phoneNumber);
    }
    setValidPhone(isValidPhoneNumber(phone));
  }, [phone]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {CartItem.length === 0 && (
              <h1
                style={{ backgroundColor: "whitesmoke", color: "black" }}
                className="no-items product"
              >
                {language === "vie" ? "Không có sản phẩm trong giỏ hàng!" : "No products available in your cart!"}
              </h1>
            )}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.coverUrl} alt="" />
                    </Col>

                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h5>
                            ${item.price.toLocaleString("en-US")} *
                            {item.qty.toLocaleString("en-US")}
                            <span> = ${productQty}</span>
                          </h5>
                        </Col>

                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="desCart"
                            onClick={() => decreaseQty(item)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>

                          <button
                            className="incCart"
                            onClick={() => addToCart(item)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>

                    <button
                      className="delete"
                      onClick={() => deleteProduct(item)}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>

          <Col
            md={4}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="cart-total">
              <h2>{language === "vie" ? "Tổng Cộng" : "Cart Total"}</h2>
              <div className="d_flex">
                <h4>{language === "vie" ? "Tổng tiền: " : "Total Amount: "}</h4>
                <h3>${totalPrice.toLocaleString("en-US")}</h3>
              </div>
            </div>
            <button className="buy-btn" onClick={() => setModalShow(true)}>
            {language === "vie" ? "Mua hàng" : "Purchase"}
            </button>
          </Col>
        </Row>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {language === "vie" ? "Chi tiết đơn hàng:" : "Order details:"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{language === "vie" ? "Sản Phẩm:" : "Products"}</h4>
            {CartItem.map((el, index) => {
              return (
                <p key={index}>
                  <strong>{el.productName}: </strong>$
                  {el.price.toLocaleString("en-US")} *
                  {el.qty.toLocaleString("en-US")}
                  <span> = ${el.price * el.qty}</span>
                </p>
              );
            })}
            <hr />
            <h4>{language === "vie" ? "Số tiền phải thanh toán:" : "The amound must be paid:"}</h4>
            <h5 style={{ color: "red" }}>
              ${totalPrice.toLocaleString("en-US")}
            </h5>
            <hr />
            <Container className="buy-information-container">
              <Row>
                <Col className="buy-input">
                  <label htmlFor="name">{language === "vie" ? "Họ và Tên:" : "Fullname:"}</label>
                  <input
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                {!validName && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                    }}
                  >
                    {language === "vie" ? "Họ và Tên chưa đúng!" : "Fullname is incorrect!"}
                  </p>
                )}
              </Row>
              <Row>
                <Col className="buy-input">
                  <label htmlFor="phone">{language === "vie" ? "Số điện Thoại:" : "Phone Number:"}</label>
                  <input
                    name="phone"
                    placeholder=" Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                {!validPhone && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 12,
                    }}
                  >
                    {language === "vie" ? "Số điện thoại chưa đúng!" : "Your phone number is incorrect"}
                  </p>
                )}
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={
                validName && validPhone && CartItem.length ? false : true
              }
              onClick={() => {
                console.log({ CartItem, user: { name, phone } });
                setModalShow(false);
                window.alert(
                  language === "vie" ? "- đặt hàng thành công! \n- Đơn hàng đang được xử lý, cửa hàng sẽ liên lạc lại với bạn sau!\n- Cảm ơn quý khách đã ủng hộ!" : "- Order placed successfully! \n- The order is being processed, the store will contact you later!\n- Thank you for your support!"
                );
                setCartItem([]);
                setName("");
                setPhone("");
              }}
            >
              {language === "vie" ? "Mua" : "Purchase"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
