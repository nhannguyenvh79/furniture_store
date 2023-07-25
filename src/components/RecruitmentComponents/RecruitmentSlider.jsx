import React, { useState, useEffect } from "react";
import "./RecruitmentSLider.css";

const RecruitmentSlider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const handlePre = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length - 1);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouseOn = () => {
    setPause(false);
  };
  const handleMouseOff = () => {
    setPause(true);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slide-container">
      <div
        className="slide"
        // onMouseEnter={handleMouseOn}
        // onMouseLeave={handleMouseOff}
      >
        {content.map((item, index) => (
          <div
            className={counter === index ? "isshow" : "isnot-show"}
            key={index}
          >
            {item}
          </div>
        ))}

        <button className="prev" onClick={handlePre}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* <div className="page">
        {content.map((item, index) => (
          <span
            key={index}
            className={counter === index ? "dot active" : "dot"}
            onClick={() => handlePage(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default RecruitmentSlider;
