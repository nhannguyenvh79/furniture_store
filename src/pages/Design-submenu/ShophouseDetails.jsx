import "./designsubmenu.css";
import SliderSubMenu from "../../component-2/Slider/SliderSubMenu.jsx";
import ItemsList from "../../component-2/Items/ItemsList";
import Accordation from "../../component-2/Question/Accordation";
import { Pagination, Button } from "react-bootstrap";
import { ShophouseData } from "../../utils/design";
import { SliderShophouseData } from "../../utils/design";
import { QuestionShophouseData } from "../../utils/questiondata";
import { LanguageContext } from "../../context/LanguageContext";
import { useState, useContext, useEffect } from "react";
import { HomeFormEng, HomeFormVie } from "../../components/Form/HomeForm";

export default function ShophouseDetails() {
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(ShophouseData.vie);
  useEffect(() => {
    if (language === "vie") {
      setItemData(ShophouseData.vie);
    } else {
      setItemData(ShophouseData.eng);
    }
  }, [language]);

  const [sliderItem, setSliderItem] = useState(SliderShophouseData.vie);
  useEffect(() => {
    if (language === "vie") {
      setSliderItem(SliderShophouseData.vie);
    } else {
      setSliderItem(SliderShophouseData.eng);
    }
  }, [language]);

  const [question, setQuestion] = useState(QuestionShophouseData.vie);
  useEffect(() => {
    if (language === "vie") {
      setQuestion(QuestionShophouseData.vie);
    } else {
      setQuestion(QuestionShophouseData.eng);
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
          <h1>
            {language === "vie" ? "Nhà phố - Villa" : "Shophouse - Villa"}
          </h1>
          <p>
            {" "}
            {language === "vie"
              ? "Thiết kế nội thất"
              : "Designing interior furniture of"}{" "}
            <b>
              {language === "vie"
                ? "nhà phố - nhà lô phố, nhà liền kề,..."
                : "shophouses, townhouses, so on"}
            </b>{" "}
            {language === "vie"
              ? "là vấn đề luôn được mọi người quan tâm, bởi để có một căn nhà phố đẹp hoàn thiện bạn cần phải hiểu rõ được những quy trình làm việc cụ thể. Từ giá thiết kế là bao nhiêu, đến phong cách thiết kế có hợp với mình hay không, đơn vị nào thiết kế nhà phố đẹp,... Chính vì điều đó,"
              : "is an issue that is always of concern to everyone, because in order to have a perfect townhouse, you need to understand the specific working processes. From how much is the design price, to whether the design style suits you or not, which unit designs beautiful townhouses,... Because of that,"}
            <b>{language === "vie" ? " " : " "}Nhà Gỗ</b>{" "}
            {language === "vie"
              ? "sẽ gợi ý cho bạn những xu hướng thiết kế nhà phố đẹp nhất cùng với báo giá, quy trình làm việc cụ thể để bạn có kế hoạch hoàn thiện và dự toán ngân sách rõ ràng hơn, hạn chế tối đa những phát sinh khi thực hiện."
              : "will suggest you the most beautiful townhouse design trends along with quotes, specific working processes so that you have a better plan and clearer budget estimate, minimizing the arising problems when implementing the project."}{" "}
          </p>
          <SliderSubMenu sliderItem={sliderItem} />
        </div>
      </div>

      <div className="designsubm-pagination">
        <div className="designsubm-title">
          <h1>
            {language === "vie"
              ? "Nhà phố - Villa"
              : "Our Shophouse - Villa Designs"}
          </h1>
        </div>
        <ItemsList itemData={currentPosts} />
        <Pagination className="pagination-section">
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
              : "Common Questions?"}
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
