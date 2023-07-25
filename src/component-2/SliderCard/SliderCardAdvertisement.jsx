import "./slidercard.css";
import ClockAds from "../ClockAd/ClockAds";
import { LanguageContext } from "../../context/LanguageContext";
import {useContext} from "react";

export default function SliderCardAdvertisement({discountName,discountNumber,category2,coverUrl}) {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className='productad-box'>
        <div className="productad-left-box">
          <div className="productad-content">
            <h4>{discountName}</h4>
            <span className="productad-category">{category2}</span>
            <h3>{language === "vie" ? "Giảm giá chỉ từ" : "Discount only from"} <span className="productad-discount">{discountNumber}%</span></h3>
          </div>
          <ClockAds />
        </div>
        <div className="productad-img">
          <img src={coverUrl} alt="#" />
        </div>

      </div>
    </div>
  )
}


