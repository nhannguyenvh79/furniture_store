import "./designsubmenu.css";
import SliderSubMenu from "../../component-2/Slider/SliderSubMenu.jsx";
import ItemsList from "../../component-2/Items/ItemsList";
import Accordation from "../../component-2/Question/Accordation";
import { Pagination, Button } from "react-bootstrap";
import { ApartmentData } from "../../utils/design";
import { SliderApartmentData } from "../../utils/design";
import { LanguageContext } from "../../context/LanguageContext";
import { QuestionApartmentData } from "../../utils/questiondata";
import { useState, useContext, useEffect } from "react";
import { HomeFormEng, HomeFormVie } from "../../components/Form/HomeForm";

export default function ApartmentDetails() {
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(ApartmentData.vie);
  useEffect(() => {
    if (language === "vie") {
      setItemData(ApartmentData.vie);
    } else {
      setItemData(ApartmentData.eng);
    }
  }, [language]);

  const [sliderItem, setSliderItem] = useState(SliderApartmentData.vie);
  useEffect(() => {
    if (language === "vie") {
      setSliderItem(SliderApartmentData.vie);
    } else {
      setSliderItem(SliderApartmentData.eng);
    }
  }, [language]);

  const [question, setQuestion] = useState(QuestionApartmentData.vie);
  useEffect(() => {
    if (language === "vie") {
      setQuestion(QuestionApartmentData.vie);
    } else {
      setQuestion(QuestionApartmentData.eng);
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

  //Accordition
  const [isActive, setIsActive] = useState("0");

  const handleToggle = (index) => {
    if (isActive === index) {
      return setIsActive("0");
    }
    setIsActive(index);
  };

  return (
    <div className="designsubm-component">
      <div className="designsubm-topcontainer">
        <div className="designsubm-intro">
          <h1>{language === "vie" ? "Căn hộ - chung cư" : "Apartment"}</h1>
          <p>
            {language === "vie"
              ? "Nếu bạn đang tìm kiếm ý tưởng để"
              : "If you are looking for ideas to"}{" "}
            <b>
              {language === "vie"
                ? "trang trí căn hộ chung cư"
                : "decorate your apartment"}{" "}
            </b>
            {language === "vie"
              ? "của bạn và muốn tìm một công ty thiết kế nội thất đẹp với giá cả hợp lý,"
              : "and want to find a nice interior design company at a reasonable price"}{" "}
            <b>{language === "vie" ? "Nhà Gỗ" : "Nha Go"}</b>{" "}
            {language === "vie"
              ? "sẽ cung cấp cho quý khách hàng những mẫu thiết kế phù hợp với mong muốn của bạn"
              : "will provide customers with designs that fit your desires. "}{" "}
          </p>
          <SliderSubMenu sliderItem={sliderItem} />
        </div>
      </div>

      <div className="designsubm-pagination">
        <div className="designsubm-title">
          <h1>
            {language === "vie" ? "Các Mẫu Căn hộ" : " Our Apartment Designs"}
          </h1>
        </div>
        <ItemsList itemData={currentPosts} />
        <Pagination className="designsubm-pagination-section">
          <Button
            variant="outline-light"
            className="designsubm-page-button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {language === "vie" ? "Trang trước" : "Previous Page"}
          </Button>

          {pageNumbers.map((number) => (
            <Pagination.Item
              className="designsubm-pagination-item"
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
            className="designsubm-page-button"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(itemData.length / postsPerPage)}
          >
            {language === "vie" ? "Trang sau" : "Next Page"}
          </Button>
        </Pagination>
      </div>
      <div className="accordation-component">
        <div className="designsubm-title">
          <h1>
            {language === "vie"
              ? "Những câu hỏi thường gặp?"
              : "Common Questions?"}{" "}
          </h1>
        </div>
        <div className="accordation">
          {question.map((faq, index) => (
            <Accordation
              faq={faq}
              onToggle={() => handleToggle(index)}
              active={isActive === index}
            />
          ))}
        </div>
      </div>
      {language === "vie" ? <HomeFormVie /> : <HomeFormEng />}
    </div>
  );
}
