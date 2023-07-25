import './productmenucontainer.css';
import ShopListMenu from '../ShopList/ShopListMenu';
import {DataContainer} from '../../App';
import React, {useState, useEffect,useContext}  from "react";
import { AllProducts } from '../../utils/shop';
import { Pagination, Button } from 'react-bootstrap';
import { LanguageContext } from '../../context/LanguageContext';

// Icon
import HomeIcon1 from "../../component-2/Images/Home-icon-01.png"
import LVIcon1 from "../../component-2/Images/LV-icon-01.png"
import BRIcon1 from "../../component-2/Images/BR-icon-01.png"
import KCIcon1 from "../../component-2/Images/KC-icon-01.png"


export default function ProductMenuContainer() {
  const { language } = useContext(LanguageContext);
  const {addToCart} = useContext(DataContainer);

  const [itemData, setItemData] = useState(AllProducts.vie);
  useEffect(() => {
    if (language === "vie") {
      setItemData(AllProducts.vie);
    } else {
      setItemData(AllProducts.eng);
    }
  }, [language]);
  
  const [category, setCategory] = useState ([]);
  // button
  useEffect(() => {
    if(category === "phòng khách") {
      const filterLivingroomVN = AllProducts.vie.filter(e => e.category2 === "phòng khách")
      setItemData(filterLivingroomVN);
    }
    if(category === "phòng ngủ") {
      const filterBedroomVN = AllProducts.vie.filter(e => e.category2 === "phòng ngủ")
      setItemData(filterBedroomVN)
    }
    if(category === "phòng bếp") {
      const filterKitchenVN = AllProducts.vie.filter(e => e.category2 === "phòng bếp")
      setItemData(filterKitchenVN)
    }
    if(category === "tất cả") {
      const filterAllVN = AllProducts.vie.filter(e => e.category3 === "tất cả")
      setItemData(filterAllVN)
    }
    if(category === "livingroom") {
      const filterLivingroomEN = AllProducts.eng.filter(e => e.category2 === "livingroom")
      setItemData(filterLivingroomEN);
    }
    if(category === "bedroom") {
      const filterBedroomEN = AllProducts.eng.filter(e => e.category2 === "bedroom")
      setItemData(filterBedroomEN)
    }
    if(category === "kitchen") {
      const filterKitchenEN = AllProducts.eng.filter(e => e.category2 === "kitchen")
      setItemData(filterKitchenEN)
    }
    if(category === "all") {
      const filterAllEN = AllProducts.eng.filter(e => e.category3 === "all")
      setItemData(filterAllEN)
    }

  },[category]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); 

  // Tính toán để lấy ra các bài viết của trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemData.slice(indexOfFirstPost, indexOfLastPost);

  // Tạo danh sách các trang hiển thị trên Pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemData.length / postsPerPage); i++) {
      pageNumbers.push(i);
  }
  // Hàm xử lý khi người dùng click vào nút "Trang trước"
  const prevPage = () => {
      setCurrentPage(currentPage - 1);
  }

  // Hàm xử lý khi người dùng click vào nút "Trang tiếp"
  const nextPage = () => {
      setCurrentPage(currentPage + 1);
  }


  return (
    <div className='productmenu-container'>
      <section >
        <div className='productmenu-button'>
          <div>
            <h1>{language === "vie" ? "Danh sách sản phẩm" : "Our Products List"}</h1>
          </div>

          <div className='productmenu-category'>
            <button 
              classname={`productmenu-button ${category === "tất cả" || category === "all" ? "active-btn" : ""}`}
              onClick={() => setCategory('tất cả') || setCategory('all') }
            >
              <img src={HomeIcon1} alt=""/>
              <p>{language === "vie" ? "Tất cả" : "All"}</p>
            </button>

            <button 
            classname={`productmenu-button ${category === "phòng khách" || category === "livingroom" ? "active-btn" : ""}`}
            onClick={() => setCategory('phòng khách') || setCategory('livingroom')}>
              <img src={LVIcon1} alt=""/>
              <p>{language === "vie" ? "Phòng khách" : "Livingroom"}</p>
            </button>
            
            <button 
            classname={`productmenu-button ${category === "phòng ngủ" || category === "bedroom" ? "active-btn" : ""}`}
            onClick={() => setCategory('phòng ngủ') || setCategory('bedroom')}  
            >
              <img src={BRIcon1} alt=""/>
              <p>{language === "vie" ? "Phòng ngủ" : "Bedroom"}</p>
            </button>
            
            <button 
            classname={`productmenu-button ${category === "phòng bếp" || category === "kitchen" ? "active-btn" : ""}`}
            onClick={() => setCategory('phòng bếp') || setCategory('kitchen')}
            >
              <img src={KCIcon1} alt=""/>
              <p>{language === "vie" ? "Phòng bếp" : "Kitchen"}</p>
            </button>
          </div>
        </div>

        <div className="productmenu-pagination">
          <ShopListMenu itemData={currentPosts} addToCart={addToCart}/>   
          <Pagination className="product-pagination-section">
              <Button 
                  variant="outline-light" 
                  className="productmenu-page-button" 
                  onClick={prevPage} disabled={currentPage === 1}
              >{language === "vie" ? "Trang trước" : "Previous Page"}</Button>
              
              {pageNumbers.map(number => (
                  <Pagination.Item 
                      className='productmenu-pagination-item' 
                      key={number} 
                      id={number} 
                      active={number === currentPage} 
                      onClick={() => setCurrentPage(number)}
                  >{number}
                  </Pagination.Item>
              ))}
              
              <Button 
                  variant="outline-light" 
                  className="productmenu-page-button" 
                  onClick={nextPage} 
                  disabled={currentPage === Math.ceil(itemData.length / postsPerPage)}
              >{language === "vie" ? "Trang sau" : "Next Page"}</Button>
          </Pagination>
        </div>
        
      </section>
    </div>
  );
}

