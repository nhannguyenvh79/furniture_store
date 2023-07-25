import "./productsubmnew.css";
import React, {useContext} from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ProductSubMNewCard ({id, productName, coverUrl, price,category2 }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="newproducts-card">
      <div className="newproducts-component" key={id}>
          <div className="newproducts-img">
              <img className="newproducts-img " src={coverUrl} alt="" />
          </div>

          <div className="newproducts-content">
              <p>{language === "vie" ? "Tên sản phẩm:" : "Product Name:"} {productName}</p>
              <div className="newproducts-category">
                <p>{language === "vie" ? "Khu vực" : "Area:"}</p>
                <button>{category2}</button>
              </div>
              <span className="newproducts-price"> <b>{language === "vie" ? "Giá:" : "Price:"}</b> ${price.toLocaleString('en-US')}</span>
              <button className="newproducts-btn">{language === "vie" ? "Tham khảo:" : "More information"}</button>
          </div>  
      </div>
    </div>
  );
};

