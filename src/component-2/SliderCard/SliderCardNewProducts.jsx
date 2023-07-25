import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function SliderCardNewProducts({
  id,
  productName,
  coverUrl,
  price,
  category2,
}) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="slidernewproducts-cards">
      <div className="slidernewproducts-components" key={id}>
        <img className="slidernewproducts-img " src={coverUrl} alt="" />

        <div className="slidernewproducts-contents">
          <p>
            {language === "vie" ? "Tên sản phẩm:" : "Name"} {productName}
          </p>
          <div className="slidernewproducts-categories">
            <p>{language === "vie" ? "Khu vực:" : "Category:"}</p>
            <button>{category2}</button>
          </div>
          <p className="slidernewproducts-price ">
            {" "}
            <b>Giá:</b> ${price.toLocaleString("en-US")}
          </p>
          <button className="slidernewproducts-btn">
            {language === "vie" ? "Tham Khảo" : "Watch"}
          </button>
        </div>
      </div>
    </div>
  );
}
