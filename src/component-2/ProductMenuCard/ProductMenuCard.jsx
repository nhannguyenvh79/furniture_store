import "./productmenucard.css";
import { useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { Col, Container,Row } from "react-bootstrap";
import { DataContainer } from "../../App";
import {FaStar} from "react-icons/fa";
import {RiShoppingCartFill} from "react-icons/ri";
import { toast } from "react-toastify";
import { LanguageContext } from "../../context/LanguageContext";
import React from "react";

export default function ProductMenuCard ({ itemData, addToCart}) {
  const { language } = useContext(LanguageContext);
  const {setSelectedProduct} =useContext(DataContainer);
  const router =useNavigate();
  // Liên hệ Click
  const handleContactClick = () =>{
    setSelectedProduct(itemData);
    localStorage.setItem(`selectedProduct-${itemData}`,JSON.stringify(itemData));
    router(`/`);
  }
  //CategoryClick
  const handleCategoryClick = ()=> {
    if(itemData.category2 === "phòng khách" || itemData.category2 === "livingroom" ) router(`/shop/livingroom`);
    else if (itemData.category2 === "phòng ngủ" || itemData.category2 === "bedroom" ) router(`/shop/bedroom`);
    else if(itemData.category2 === "phòng bếp" || itemData.category2 === "kitchen" ) router(`/shop/kitchen`);    
  }
  // Add cart
  const handelProductAdd =(itemData)=> {
      addToCart(itemData);
      toast.success(`${language === "vie" ? "Sản phẩm đã có trong giỏ hàng!" : "Products have already been added in cart!!"}`);
  }

  return (
    <section className="productmenu-card" key={itemData.id}>
      <Container>
        <Row>
          <Col className="productcard-component">
            <div className="productcard-img">
              <img 
              className="productcard-img " 
              loading="lazy" 
              src={itemData.coverUrl} 
              alt="" 
              />
            </div>

            <div className="productcard-content">
              <p>{language === "vie"? "Tên sản phẩm:":"Product Name:"} {itemData.productName}</p>
              <div className="productcard-category">
                <p>{language === "vie"? "Khu vực:":"Area:"}</p>
                <button onClick={() => handleCategoryClick()}>{itemData.category2}</button>
              </div>
              <span className="productcard-price "> <b>{language === "vie"? "Giá:":"Price:"}</b> ${itemData.price.toLocaleString('en-US')}</span>
              <div className="productcard-rating">
                  <span><FaStar/></span>
                  <span><FaStar/></span>
                  <span><FaStar/></span>
                  <span><FaStar/></span>
                  <span><FaStar/></span>
              </div>
            </div>
          
            <button className="productmenu-contact" onClick={() => handleContactClick()}>{language === "vie"? "Liên hệ":"Contact"}</button>
            <button 
              aria-label="Add" 
              type="submit"
              className="productmenu-addtocart"
              onClick={() => handelProductAdd(itemData)}
              >
              {language === "vie"? "Giỏ hàng":"Add to Cart"} <RiShoppingCartFill/>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

