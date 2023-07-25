import "./design.css";
import SliderMenu from "../../component-2/Slider/SliderMenu";
import ItemsList from "../../component-2/Items/ItemsList";
import { DesignProject } from "../../utils/design";
import { LanguageContext } from "../../context/LanguageContext";
import { Pagination, Button } from "react-bootstrap";
import { SliderDesignData } from "../../utils/design";
import { useState, useContext, useEffect } from "react";
import { HomeFormEng, HomeFormVie } from "../../components/Form/HomeForm";

export default function Design() {
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(DesignProject.vie);
  useEffect(() => {
    if (language === "vie") {
      setItemData(DesignProject.vie);
    } else {
      setItemData(DesignProject.eng);
    }
  }, [language]);

  const [sliderItem, setSliderItem] = useState(SliderDesignData.vie);
  useEffect(() => {
    if (language === "vie") {
      setSliderItem(SliderDesignData.vie);
    } else {
      setSliderItem(SliderDesignData.eng);
    }
  }, [language]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2); // Số bài viết trên 1 trang

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
  };

  // Hàm xử lý khi người dùng click vào nút "Trang tiếp"
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="designmenu-component">
      <SliderMenu sliderItem={sliderItem} />
      <div className="designmenu-title">
        <h1>
          {language === "vie"
            ? "Thiết kế - Thi công"
            : "Our Design - Construction"}
        </h1>
      </div>

      <div className="designmenu-introduction">
        <p>
          {" "}
          <b>{language === "vie" ? "Nhà Gỗ" : "Nha Go"}</b>{" "}
          {language === "vie"
            ? "chuyên Thiết Kế – Sản Xuất và Thi Công trọn gói"
            : "specializes in Design - Manufacturing and Construction Packages"}{" "}
          <b>
            {language === "vie"
              ? "Chung Cư cao cấp – Office – Studio & Store Makeup"
              : "Luxury Apartment – Office – Studio & Store Makeup"}
          </b>{" "}
          {language === "vie"
            ? "tại TPHCM và các tỉnh lân cận. Trực tiếp mang đến khách hàng những sản phẩm và dịch vụ chất lượng nhất, đón đầu xu hướng hiện đại nhất. Chúng tôi cam kết phục vụ khách hàng tận tình và đảm bảo chất lượng của sản phẩm cho khách hàng. Sự tin tưởng của quý khách là tài sản lớn của công ty chúng tôi."
            : "in Ho Chi Minh City and neighboring provinces. Directly bring customers the best quality products and services, keeping up with the most modern trends. We are committed to serving customers wholeheartedly and ensuring the quality of products for customers. Your trust is a great asset of our company."}
        </p>
      </div>
      <div className="designmenu-title">
        <h1>
          {language === "vie" ? "Các dự án tiêu biểu" : "Our Popular Projects"}
        </h1>
      </div>
      <div className="designmenu-pagination">
        <ItemsList itemData={currentPosts} />
        <Pagination className="designmenu-pagination-section">
          <Button
            variant="outline-light"
            className="designmenu-page-button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {language === "vie" ? "Trang trước" : "Previous Page"}
          </Button>

          {pageNumbers.map((number) => (
            <Pagination.Item
              className="designmenu-pagination-item"
              key={number}
              id={number}
              active={number === currentPage}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </Pagination.Item>
          ))}

          <Button
            variant="outline-light"
            className="designmenu-page-button"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(itemData.length / postsPerPage)}
          >
            {language === "vie" ? "Trang sau" : "Next Page"}
          </Button>
        </Pagination>
      </div>
      {language === "vie" ? <HomeFormVie /> : <HomeFormEng />}
    </div>
  );
}
