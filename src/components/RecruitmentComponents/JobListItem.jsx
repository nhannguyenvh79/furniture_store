import { memo, useState } from "react";
import "./JobListItem.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JobListItemEng(props) {
  const [modalShow, setModalShow] = useState(false);
  const list = props.data;
  return (
    <>
      <Container className="job-list-item">
        <Row>
          <Col style={{ flex: "0 0 90%" }}>
            <h3>{list.title}</h3>
          </Col>
          <Col style={{ flex: "0 0 10%", color: "rgb(226, 242, 178)" }}>
            <button style={{ color: "rgb(246, 202, 153)" }}>&#9751;</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="salary">&#36;: {list.salary}</p>
            <p className="location">&#9990;: {list.location}</p>
          </Col>
          <Col>
            <p className="department">&#22291;: {list.department}</p>
          </Col>
          <Col className="action" style={{ flex: "0 0 20%" }}>
            <button className="show-more" onClick={() => setModalShow(true)}>
              Show More
            </button>
            <button className="apply" onClick={props.fnScroll}>
              Apply
            </button>
          </Col>
        </Row>
      </Container>
      <JobDetailEng
        show={modalShow}
        onHide={() => setModalShow(false)}
        jobs={list}
      />
    </>
  );
}

function JobDetailEng(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      key={props.jobs.id}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "rgb(126, 38, 8)" }}
        >
          {props.jobs.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Decription:</h5>
        <ul>
          {props.jobs.description.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Requirement:</h5>
        <ul>
          {props.jobs.requirement.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Benefit:</h5>
        <ul>
          {props.jobs.benefit.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function JobListItemVie(props) {
  const [modalShow, setModalShow] = useState(false);
  const list = props.data;
  return (
    <>
      <Container className="job-list-item">
        <Row>
          <Col style={{ flex: "0 0 90%" }}>
            <h3>{list.title}</h3>
          </Col>
          <Col style={{ flex: "0 0 10%", color: "rgb(226, 242, 178)" }}>
            <button style={{ color: "rgb(246, 202, 153)" }}>&#9751;</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="salary">&#36;: {list.salary}</p>
            <p className="location">&#9990;: {list.location}</p>
          </Col>
          <Col>
            <p className="department">&#22291;: {list.department}</p>
          </Col>
          <Col className="action" style={{ flex: "0 0 20%" }}>
            <button className="show-more" onClick={() => setModalShow(true)}>
              Hiển thị thêm
            </button>
            <button className="apply" onClick={props.fnScroll}>
              Ứng tuyển
            </button>
          </Col>
        </Row>
      </Container>
      <JobDetailVie
        show={modalShow}
        onHide={() => setModalShow(false)}
        jobs={list}
      />
    </>
  );
}

function JobDetailVie(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      key={props.jobs.id}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "rgb(126, 38, 8)" }}
        >
          {props.jobs.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Mô tả công việc:</h5>
        <ul>
          {props.jobs.description.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Yêu cầu công việc:</h5>
        <ul>
          {props.jobs.requirement.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h5 style={{ color: "rgb(126, 38, 8)" }}>Phúc lợi:</h5>
        <ul>
          {props.jobs.benefit.map((el, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
                padding: "5px",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}
export { JobListItemEng, JobListItemVie };
