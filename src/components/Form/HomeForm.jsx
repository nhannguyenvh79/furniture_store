import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function HomeFormEng() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "More than 2 characters"),
      phone: Yup.string()
        .required("Number phone is required")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Invalid phone number"),
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Invalid email"
        ),
      address: Yup.string()
        .required("Address is required")
        .min(10, "Please enter adress more detail"),
    }),

    onSubmit: (values, { resetForm }) => {
      handleShow();
      // window.alert("Your form is sent");
      // console.log(values);
      // resetForm();
    },
  });
  return (
    <Container className="form-container" onSubmit={formik.handleSubmit}>
      <Row className="form">
        <Row
          style={{
            padding: "10px",
            textAlign: "center",
            color: "black",
          }}
        >
          <Col
            style={{
              color: "grey",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Your Contact:
          </Col>
        </Row>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label> Your Name:</Form.Label>
                <Form.Control
                  placeholder="Enter your name"
                  id="name"
                  value={formik.values.name}
                  name="name"
                  onChange={formik.handleChange}
                />
                {formik.errors.name && (
                  <p className="error">{formik.errors.name}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="error">{formik.errors.email}</p>
                )}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Phone number:</Form.Label>
                <Form.Control
                  placeholder="Enter phone number"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && (
                  <p className="error">{formik.errors.phone}</p>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  placeholder="Enter address"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && (
                  <p className="error">{formik.errors.address}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter message"
                  style={{ height: "100px" }}
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Row>

            <Button
              style={{
                background:
                  !formik.errors.name &&
                  !formik.errors.phone &&
                  !formik.errors.email &&
                  !formik.errors.address
                    ? "linear-gradient(to right, rgb(0, 128, 0), rgba(0, 128, 0,0.6))"
                    : "linear-gradient(to right, rgb(128, 128, 128), rgba(128, 128, 128,0.6))",
              }}
              type="submit"
            >
              Submit
            </Button>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Your Form:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>Your name:</strong> {formik.values.name}
                  </p>
                  <p>
                    <strong>Your Email:</strong> {formik.values.phone}
                  </p>
                  <p>
                    <strong>Your Phone number:</strong> {formik.values.email}
                  </p>
                  <p>
                    <strong>Your Address:</strong> {formik.values.address}
                  </p>
                  <p>
                    <strong>Your Message:</strong> {formik.values.message}
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleClose();
                      formik.resetForm();
                      console.log(formik.values);
                      window.alert(
                        "Your form has been submitted! \n Please Wait for our staff to contact you!"
                      );
                    }}
                  >
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function HomeFormVie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập tên")
        .min(2, "Tên phải hơn 2 kí tự"),
      phone: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không đúng"),
      email: Yup.string()
        .required("Vui lòng nhập Email")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Email không đúng"
        ),
      address: Yup.string()
        .required("Vui lòng nhập địa chỉ")
        .min(10, "Vui lòng cung cấp địa chỉ chi tiết hơn"),
    }),

    onSubmit: (values, { resetForm }) => {
      handleShow();
      // window.alert("Your form is sent");
      // console.log(values);
      // resetForm();
    },
  });
  return (
    <Container className="form-container" onSubmit={formik.handleSubmit}>
      <Row className="form">
        <Row
          style={{
            padding: "10px",
            textAlign: "center",
            color: "black",
          }}
        >
          <Col
            style={{
              color: "grey",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Liên Hệ Với Chúng Tôi
          </Col>
        </Row>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label> Tên:</Form.Label>
                <Form.Control
                  placeholder="Nhập tên"
                  id="name"
                  value={formik.values.name}
                  name="name"
                  onChange={formik.handleChange}
                />
                {formik.errors.name && (
                  <p className="error">{formik.errors.name}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="error">{formik.errors.email}</p>
                )}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  placeholder="Nhập số điện thoại"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && (
                  <p className="error">{formik.errors.phone}</p>
                )}
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Địa chỉ:</Form.Label>
                <Form.Control
                  placeholder="Nhập địa chỉ"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && (
                  <p className="error">{formik.errors.address}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Lời Nhắn:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Nhập lời nhắn"
                  style={{ height: "100px" }}
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Row>

            <Button
              style={{
                background:
                  !formik.errors.name &&
                  !formik.errors.phone &&
                  !formik.errors.email &&
                  !formik.errors.address
                    ? "linear-gradient(to right, rgb(0, 128, 0), rgba(0, 128, 0,0.6))"
                    : "linear-gradient(to right, rgb(128, 128, 128), rgba(128, 128, 128,0.6))",
              }}
              type="submit"
            >
              Liên Hệ
            </Button>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Xác Nhận Thông Tin:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>Tên:</strong> {formik.values.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formik.values.email}
                  </p>
                  <p>
                    <strong>Số điện thoại:</strong> {formik.values.phone}
                  </p>
                  <p>
                    <strong>Địa chỉ:</strong> {formik.values.address}
                  </p>
                  <p>
                    <strong>Lời Nhắn:</strong> {formik.values.message}
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Đóng
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleClose();
                      formik.resetForm();
                      console.log(formik.values);
                      window.alert(
                        "Thông tin liên hệ của bạn đã được gửi! \n Vui lòng chờ nhân viên của chúng tôi liên lạc lại bạn sau!"
                      );
                    }}
                  >
                    Xác Nhận
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export { HomeFormEng, HomeFormVie };
