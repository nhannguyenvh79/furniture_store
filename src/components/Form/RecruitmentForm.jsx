import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export function RecruitmentFormEng(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getExtension(fileName) {
    if (!fileName) return "";

    const parts = fileName.split(".");
    if (parts.length === 1) return "";

    return parts[parts.length - 1];
  }
  const getFileName = (file) => {
    const parts = file.split("\\");
    if (parts.length === 1) return "";

    return parts[parts.length - 1];
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      phone: "",
      email: "",
      address: "",
      file: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(4, "More than 4 characters"),
      title: Yup.string()
        .required("Job title is required")
        .min(4, "More than 4 characters"),
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
      file: Yup.mixed()
        .required("CV is required")
        .test({
          message: "Please provide a PDF file type",
          test: (file, context) => {
            const isValid = ["pdf"].includes(getExtension(file));
            if (!isValid) context?.createError();
            return isValid;
          },
        }),
    }),

    onSubmit: (values, { resetForm }) => {
      handleShow();
      // window.alert("Your form is sent");
      // console.log(values);
      // resetForm();
    },
  });
  return (
    <Container className="form-container" ref={props.scroll}>
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
            APPLICATION FORM:
          </Col>
        </Row>
        <Col>
          <Form onSubmit={formik.handleSubmit}>
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
              <Form.Group className="mb-3">
                <Form.Label> Job Title (Ex: Sales - Ha Noi):</Form.Label>
                <Form.Control
                  placeholder="Enter job title"
                  id="title"
                  value={formik.values.title}
                  name="title"
                  onChange={formik.handleChange}
                />
                {formik.errors.title && (
                  <p className="error">{formik.errors.title}</p>
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
              <Form.Group className="position-relative mb-3">
                <Form.Label>CV File (PDF):</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  id="file"
                  onChange={formik.handleChange}
                />
                {formik.errors.file && (
                  <p className="error">{formik.errors.file}</p>
                )}
              </Form.Group>
            </Row>

            <Button
              style={{
                background:
                  !formik.errors.name &&
                  !formik.errors.title &&
                  !formik.errors.phone &&
                  !formik.errors.email &&
                  !formik.errors.address &&
                  !formik.errors.file
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
                  <Modal.Title>Confirm Your Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>Your name:</strong> {formik.values.name}
                  </p>
                  <p>
                    <strong>Job Title:</strong> {formik.values.title}
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
                    <strong>Your CV:</strong> {getFileName(formik.values.file)}
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
                      window.alert("Your form has been submitted");
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
export function RecruitmentFormVie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getExtension(fileName) {
    if (!fileName) return "";

    const parts = fileName.split(".");
    if (parts.length === 1) return "";

    return parts[parts.length - 1];
  }
  const getFileName = (file) => {
    const parts = file.split("\\");
    if (parts.length === 1) return "";

    return parts[parts.length - 1];
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      phone: "",
      email: "",
      address: "",
      file: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập tên")
        .min(2, "Tên phải hơn 2 kí tự"),
      title: Yup.string()
        .required("Vui lòng nhập tiêu đề")
        .min(4, "Phải hơn 4 kí tự"),
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
      file: Yup.mixed()
        .required("Vui lòng nhập CV")
        .test({
          message: "Vui lòng nộp CV dưới dạng PDF",
          test: (file, context) => {
            const isValid = ["pdf"].includes(getExtension(file));
            if (!isValid) context?.createError();
            return isValid;
          },
        }),
    }),

    onSubmit: (values, { resetForm }) => {
      handleShow();
      // window.alert("Your form is sent");
      // console.log(values);
      // resetForm();
    },
  });
  return (
    <Container className="form-container" ref={props.scroll}>
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
            Biểu Mẫu Ứng Tuyển
          </Col>
        </Row>
        <Col>
          <Form onSubmit={formik.handleSubmit}>
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
              <Form.Group className="mb-3">
                <Form.Label>
                  {" "}
                  Tiêu đề công việc (Ví dụ: Sales - Ha Noi):
                </Form.Label>
                <Form.Control
                  placeholder="Nhập tiêu đề công việc"
                  id="title"
                  value={formik.values.title}
                  name="title"
                  onChange={formik.handleChange}
                />
                {formik.errors.title && (
                  <p className="error">{formik.errors.title}</p>
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
              <Form.Group className="position-relative mb-3">
                <Form.Label>Tệp CV (PDF):</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  id="file"
                  onChange={formik.handleChange}
                />
                {formik.errors.file && (
                  <p className="error">{formik.errors.file}</p>
                )}
              </Form.Group>
            </Row>

            <Button
              style={{
                background:
                  !formik.errors.name &&
                  !formik.errors.title &&
                  !formik.errors.phone &&
                  !formik.errors.email &&
                  !formik.errors.address &&
                  !formik.errors.file
                    ? "linear-gradient(to right, rgb(0, 128, 0), rgba(0, 128, 0,0.6))"
                    : "linear-gradient(to right, rgb(128, 128, 128), rgba(128, 128, 128,0.6))",
              }}
              type="submit"
            >
              Nộp đơn
            </Button>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Xác Nhận Biểu Mẫu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>Tên:</strong> {formik.values.name}
                  </p>
                  <p>
                    <strong>Tiêu đề công việc:</strong> {formik.values.title}
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
                    <strong>Tệp CV:</strong> {getFileName(formik.values.file)}
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
                      window.alert("Đơn của bạn đã được gửi!");
                    }}
                  >
                    Xác nhận
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
