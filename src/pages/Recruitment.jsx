import { useEffect, useRef } from "react";
import {
  RecruitmentFormEng,
  RecruitmentFormVie,
} from "../components/Form/RecruitmentForm";
import RecruitmentSlider from "../components/RecruitmentComponents/RecruitmentSlider";
import {
  WrapperRecruitmentEng,
  WrapperRecruitmentVie,
} from "../components/RecruitmentComponents/Wrapper";
import { SliderData } from "../data/recruitmentSlide";
import {
  JobListEng,
  JobListVie,
} from "../components/RecruitmentComponents/JobList";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";

export default function Recruitment() {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(SliderData.vie);
  useEffect(() => {
    if (language === "vie") {
      setData(SliderData.vie);
    } else {
      setData(SliderData.eng);
    }
  }, [language]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scollToRef = useRef();
  const scollToForm = useRef();
  const fnScroll = () => {
    scollToForm.current.scrollIntoView();
  };
  return (
    <>
      <RecruitmentSlider>
        {data.map((el, index) => {
          return (
            <div key={index} className="el-container">
              <img src={el.cover} alt="img" />
              <div className="content">
                <h2>{el.title}</h2>
                <p>{el.desc}</p>
                <button onClick={() => scollToRef.current.scrollIntoView()}>
                  {language === "vie" ? "Tuyển dụng" : "Join us"} &#8594;
                </button>
              </div>
            </div>
          );
        })}
      </RecruitmentSlider>
      {language === "vie" ? (
        <>
          <WrapperRecruitmentVie />
          <JobListVie scroll={scollToRef} fnScroll={fnScroll} />
          <RecruitmentFormVie scroll={scollToForm} />
        </>
      ) : (
        <>
          <WrapperRecruitmentEng />
          <JobListEng scroll={scollToRef} fnScroll={fnScroll} />
          <RecruitmentFormEng scroll={scollToForm} />
        </>
      )}
    </>
  );
}
