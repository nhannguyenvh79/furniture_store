import "./shopsubmenu.css";
import SliderSubMenu from "../../component-2/Slider/SliderSubMenu";
import BannerSubmenu from "../../component-2/Banner/BannerSubmenu";
import FilterSelect from "../../component-2/FilterSelect/FilterSelect";
import SearchBar from "../../component-2/SeachBar/SearchBar";
import ShopListSubm from "../../component-2/ShopList/ShopListSubm";
import ProductSubmNewContainer from "../../component-2/ProductSubmNew/ProductSubmNewContainer";
import {
  LivingroomProducts,
  SliderLVData,
  NewProducts,
} from "../../utils/shop";
import { DataContainer } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Pagination, Button } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";

export default function LivingRoomDetails() {
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(
    language === "vie" ? LivingroomProducts.vie : LivingroomProducts.eng // khởi tạo theo ngôn ngữ
  );

  const [filterList, setFilterList] = useState(
    language === "vie"
      ? itemData.filter((item) => item.category3 === "tất cả")
      : itemData.filter((item) => item.category3 === "all")
  );
  useEffect(() => {
    setItemData(
      language === "vie" ? LivingroomProducts.vie : LivingroomProducts.eng
    );
    setFilterList(
      language === "vie"
        ? itemData.filter((item) => item.category3 === "tất cả")
        : itemData.filter((item) => item.category3 === "all")
    );
  }, [language]); //ngôn ngữ thay đổi thì đổi dữ liệu
  // Slider
  const [sliderItem, setSliderItem] = useState(SliderLVData.vie);
  useEffect(() => {
    if (language === "vie") {
      setSliderItem(SliderLVData.vie);
    } else {
      setSliderItem(SliderLVData.eng);
    }
  }, [language]);

  const { addToCart } = useContext(DataContainer);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterList.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemData.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  //New Products
  const [newProduct, setNewProduct] = useState(NewProducts.vie);
  useEffect(() => {
    if (language === "vie") {
      setNewProduct(
        NewProducts.vie.filter((product) => product.category2 === "phòng khách")
      );
    } else {
      setNewProduct(
        NewProducts.eng.filter((product) => product.category2 === "livingroom")
      );
    }
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productsubm-wrapper">
      <div className="productsubm-component">
        <div className="productsubm-content">
          <h1>
            {language === "vie"
              ? "Nội thất phòng khách"
              : "Livingroom Inferior Products"}
          </h1>
          <p>
            {language === "vie"
              ? "Cùng tân trang lại"
              : "Let's decorating your"}
            <b> {language === "vie" ? "phòng khách," : "livingroom,"}</b>{" "}
            {language === "vie"
              ? "chờ đón những điều may mắn, tươi vui sắp đến trong mùa xuân mới. Những màu sắc tươi sáng phối hợp với nhau một cách hài hòa, như đang chào đón những vị khách đến cho những cuộc gặp gỡ đầu năm."
              : "looking forward to the luck and joy coming in the new spring. The bright colors work together harmoniously, as if welcoming the guests to the meetings at the beginning of the year."}
          </p>
        </div>
        <SliderSubMenu sliderItem={sliderItem} />
      </div>
      
      <div className="productsubm-banner">
        <h1>
          {language === "vie"
            ? "Nội thất phòng khách"
            : "Our Livingroom Inferior Products"}
        </h1>
        <BannerSubmenu itemData={itemData} />
      </div>

      <div className="productsubm-product-wrapper">
        <div className="productsubm-title">
          <h1>{language === "vie" ? "Sản phẩm" : " Products List"}</h1>
        </div>
        <div className="productsubm-list">
          <div className="productsubm-left-bx">
            <div className="filter-search">
              <div className="filter">
                <FilterSelect
                  setFilterList={setFilterList}
                  itemData={itemData}
                />
              </div>
              <div className="search">
                <SearchBar setFilterList={setFilterList} itemData={itemData} />
              </div>
            </div>

            <div className="productsubm-pagination">
              <ShopListSubm itemData={currentPosts} addToCart={addToCart} />
              <Pagination className="productsubm-pagination-section">
                <Button
                  variant="outline-light"
                  className="productsubm-page-button"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  {language === "vie" ? "Trang trước" : "Previous Page"}
                </Button>

                {pageNumbers.map((number) => (
                  <Pagination.Item
                    className="productsubm-pagination-item"
                    key={number}
                    id={number}
                    active={number === currentPage}
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}{" "}
                  </Pagination.Item>
                ))}

                <Button
                  variant="outline-light"
                  className="productsubm-page-button"
                  onClick={nextPage}
                  disabled={
                    currentPage === Math.ceil(filterList.length / postsPerPage)
                  }
                >
                  {language === "vie" ? "Trang sau" : "Next Page"}
                </Button>
              </Pagination>
            </div>
          </div>

          <div className="productsubm-right-bx">
            <h1>
              {language === "vie" ? "Sản phẩm mới nhất" : " New Products"}
            </h1>
            <div>
              <ProductSubmNewContainer newProduct={newProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
