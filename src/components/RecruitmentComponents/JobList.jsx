import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobList.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { jobListData } from "../../data/jobListData";
import { JobListItemEng, JobListItemVie } from "./JobListItem";
import { useEffect, useState } from "react";

export function JobListEng(props) {
  const data = jobListData.eng;
  const [dataFilter, setDataFilter] = useState(data);
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const handleFilter = (location, department) => {
    let termArr = dataFilter;
    termArr = data.filter((el) => {
      if (location && department) {
        return el.location === location && el.department === department;
      } else if (location || department) {
        return el.location === location || el.department === department;
      } else if (!location && !department) {
        return true;
      }
    });
    setDataFilter(termArr);
  };

  useEffect(() => {
    handleFilter(location, department);
  }, [location, department]);

  return (
    <Container className="job-list-container" ref={props.scroll}>
      <Row className="job-list">
        <Col className="job-list-filter-container">
          <h4 className="job-list-filter-title">&#x21cb; Filter</h4>
          <div className="job-list-filter">
            <div className="filter-item">
              <label htmlFor="Default select Location">Location:</label>
              <Form.Select
                aria-label="Default select Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="">Choose Location</option>
                <option value="Ho Chi Minh">Ho Chi Minh</option>
                <option value="Ha Noi">Ha Noi</option>
              </Form.Select>
            </div>
            <div className="filter-item">
              <label htmlFor="Default select Department">Department:</label>
              <Form.Select
                aria-label="Default select Department"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value="">Choose Department</option>
                <option value="Sale">Sale</option>
                <option value="Operation">Operation</option>
                <option value="HR">Human Resource</option>
                <option value="IT">IT</option>
              </Form.Select>
            </div>
          </div>
        </Col>
        <Col className="job-list-content-container">
          <h4 className="job-list-content-title">
            &#x27A3; {data.length} Jobs are waiting for you at Nhago
          </h4>
          <div className="job-list-content">
            {dataFilter.map((el) => {
              return (
                <JobListItemEng
                  key={el.id}
                  data={el}
                  fnScroll={props.fnScroll}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export function JobListVie(props) {
  const data = jobListData.vie;
  const [dataFilter, setDataFilter] = useState(data);
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const handleFilter = (location, department) => {
    let termArr = dataFilter;
    termArr = data.filter((el) => {
      if (location && department) {
        return el.location === location && el.department === department;
      } else if (location || department) {
        return el.location === location || el.department === department;
      } else if (!location && !department) {
        return true;
      }
    });
    setDataFilter(termArr);
  };

  useEffect(() => {
    handleFilter(location, department);
  }, [location, department]);

  return (
    <Container className="job-list-container" ref={props.scroll}>
      <Row className="job-list">
        <Col className="job-list-filter-container">
          <h4 className="job-list-filter-title">&#x21cb; Bộ Lọc</h4>
          <div className="job-list-filter">
            <div className="filter-item">
              <label htmlFor="Default select Location">Địa Điểm:</label>
              <Form.Select
                aria-label="Default select Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="">Chọn địa điểm</option>
                <option value="Ho Chi Minh">Hồ Chí Minh</option>
                <option value="Ha Noi">Hà Nội</option>
              </Form.Select>
            </div>
            <div className="filter-item">
              <label htmlFor="Default select Department">Phòng Ban:</label>
              <Form.Select
                aria-label="Default select Department"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value="">Chọn Phòng Ban</option>
                <option value="Sale">Kinh Doanh</option>
                <option value="Operation">Vận Hành</option>
                <option value="HR">Nhân sự</option>
                <option value="IT">IT</option>
              </Form.Select>
            </div>
          </div>
        </Col>
        <Col className="job-list-content-container">
          <h4 className="job-list-content-title">
            &#x27A3; {data.length} công việc đang chờ bạn tại Nhago
          </h4>
          <div className="job-list-content">
            {dataFilter.map((el) => {
              return (
                <JobListItemVie
                  key={el.id}
                  data={el}
                  fnScroll={props.fnScroll}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
