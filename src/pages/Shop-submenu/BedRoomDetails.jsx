import "./shopsubmenu.css";
import SliderSubMenu from "../../component-2/Slider/SliderSubMenu";
import BannerSubmenu from "../../component-2/Banner/BannerSubmenu";
import FilterSelect from "../../component-2/FilterSelect/FilterSelect";
import SearchBar from "../../component-2/SeachBar/SearchBar";
import ShopList from "../../component-2/ShopList/ShopListSubm";
import ProductSubmNewContainer from "../../component-2/ProductSubmNew/ProductSubmNewContainer";
import { BedroomProducts, SliderBRData, NewProducts } from "../../utils/shop";
import { DataContainer } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Pagination, Button } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";

export default function BedRoomDetails() {
  const { addToCart } = useContext(DataContainer);
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(
    language === "vie" ? BedroomProducts.vie : BedroomProducts.eng // khởi tạo theo ngôn ngữ
  );

  const [filterList, setFilterList] = useState(
    language === "vie"
      ? itemData.filter((item) => item.category3 === "tất cả")
      : itemData.filter((item) => item.category3 === "all")
  );
  useEffect(() => {
    setItemData(language === "vie" ? BedroomProducts.vie : BedroomProducts.eng);
    setFilterList(
      language === "vie"
        ? itemData.filter((item) => item.category3 === "tất cả")
        : itemData.filter((item) => item.category3 === "all")
    );
  }, [language]); //ngôn ngữ thay đổi thì đổi dữ liệu
  // Slider
  const [sliderItem, setSliderItem] = useState(SliderBRData.vie);
  useEffect(() => {
    if (language === "vie") {
      setSliderItem(SliderBRData.vie);
    } else {
      setSliderItem(SliderBRData.eng);
    }
  }, [language]);

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
        NewProducts.vie.filter((product) => product.category2 === "phòng ngủ")
      );
    } else {
      setNewProduct(
        NewProducts.eng.filter((product) => product.category2 === "bedroom")
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
              ? "Nội thất phòng ngủ"
              : "Bedroom Inferior Products"}
          </h1>
          <p>
            <b>{language === "vie" ? "Phòng ngủ" : "Bedroom"}</b>{" "}
            {language === "vie"
              ? "là không gian mang đậm tính riêng tư nhất trong một ngôi nhà, và cũng là chốn yên bình để nghỉ ngơi sau cả ngày dài hoạt động. Không gian này cần được chăm chút và chọn lựa các sản phẩm phù hợp để tạo nên phòng ngủ thư giãn tối đa, đảm bảo chất lượng cho giấc ngủ mỗi ngày. Những chiếc giường gỗ theo phong cách truyền thống luôn mang đến cảm giác ấm áp và vững chãi."
              : "is the most private space in a house, and also a peaceful place to rest after a long day of activities. This space needs to be cared for and selected the right products to create the most relaxing bedroom, ensuring quality for sleep every day. Traditional style wooden beds always bring a feeling of warmth and solidity."}
          </p>
        </div>
        <SliderSubMenu sliderItem={sliderItem} />
      </div>
      <div className="productsubm-banner">
        <h1>
          {language === "vie"
            ? "Nội thất phòng ngủ"
            : "Our Bedroom Inferior Products"}
        </h1>
        <BannerSubmenu itemData={itemData} />
      </div>

      <div className="productsubm-product-wrapper">
        <div className="productsubm-title">
          <h1>{language === "vie" ? "Sản phẩm" : "Products List"}</h1>
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
              <ShopList itemData={currentPosts} addToCart={addToCart} />
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
            <h1>{language === "vie" ? "Sản phẩm mới nhất" : "New Products"}</h1>
            <div>
              <ProductSubmNewContainer newProduct={newProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
