import { Fragment, useContext, useEffect, useState } from "react";
import Wrapper from "../components/HomeComponents/wrapper/Wrapper";
import Section from "../components/HomeComponents/wrapper/Section";
import SliderHome from "../components/HomeComponents/wrapper/Slider";
import { homeSectionData } from "../data/homeSectionData";
import HomeComponentWithClip from "../components/HomeComponents/wrapper/componentWithClip";
import { homelastSectionData } from "../data/lastSectionData";
import { HomeFormEng, HomeFormVie } from "../components/Form/HomeForm";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const [homeData, setHomeData] = useState(homeSectionData.vie);
  useEffect(() => {
    if (language === "vie") {
      setHomeData(homeSectionData.vie);
    } else {
      setHomeData(homeSectionData.eng);
    }
  }, [language]);

  const [lasthomeData, setLastHomeData] = useState(homelastSectionData.vie);
  useEffect(() => {
    if (language === "vie") {
      setLastHomeData(homelastSectionData.vie);
    } else {
      setLastHomeData(homelastSectionData.eng);
    }
  }, [language]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      {homeData.map((el, index) => {
        return (
          <Section
            key={index}
            title={el.title}
            img={el.img}
            subTitle={el.subTitle}
            content={el.content}
            direction={el.direction}
            bgcolor={el.bgcolor}
          />
        );
      })}
      <HomeComponentWithClip />
      {lasthomeData.map((el, index) => {
        return (
          <Section
            key={index}
            title={el.title}
            img={el.img}
            subTitle={el.subTitle}
            content={el.content}
            direction={el.direction}
            bgcolor={el.bgcolor}
          />
        );
      })}
      {language === "vie" ? <HomeFormVie /> : <HomeFormEng />}
    </Fragment>
  );
};

export default Home;
