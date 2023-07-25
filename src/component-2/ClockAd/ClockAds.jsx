import { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./clockads.css";

export default function ClockAds() {
  const { language } = useContext(LanguageContext);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const interval = useRef(null);

  const countDown = () => {
    const destination = new Date("August 01, 2023").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="clock-wrapper">
      <div className="clock-data">
        <div className="text-center">
          <h1 className="clock-number">{days}</h1>
          <h5 className="clock-text">{language === "vie" ? "Ngày" : "Days"}</h5>
        </div>
      </div>

      <div className="clock-data">
        <div className="text-center">
          <h1 className="clock-number">{hours}</h1>
          <h5 className="clock-text">{language === "vie" ? "Giờ" : "Hours"}</h5>
        </div>
      </div>

      <div className="clock-data">
        <div className="text-center">
          <h1 className="clock-number">{minutes}</h1>
          <h5 className="clock-text">{language === "vie" ? "Phút" : "Minutes"}</h5>
        </div>
      </div>

      <div className="clock-data">
        <div className="text-center">
          <h1 className="clock-number">{seconds}</h1>
          <h5 className="clock-text">{language === "vie" ? "Giây" : "Seconds"}</h5>
        </div>
      </div>
    </div>
  );
}
