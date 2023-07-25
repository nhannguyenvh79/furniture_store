import "./productdetails.css";
import SliderNewProducts from "../../component-2/Slider/SliderNewProducts";
import { Fragment, useContext, useEffect, useState } from "react";
import { DataContainer } from "../../App";
import { Col, Container, Row } from "react-bootstrap";
import { NewProducts, AllProducts } from "../../utils/shop";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LanguageContext } from "../../context/LanguageContext";

export default function ProductDetails() {
  const { language } = useContext(LanguageContext);
  const [listSelected, setListSelected] = useState("desc");
  const [itemData, setItemData] = useState(
    language === "vie" ? AllProducts.vie : AllProducts.eng
  );
  const { selectedProduct, setSelectedProduct, addToCart, decreaseQty } =
    useContext(DataContainer);
  const { id } = useParams();

  if (!selectedProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct-${id}`);
    setSelectedProduct(JSON.parse(storedProduct));
  }
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const handelAdd = (selectedProduct, quantity) => {
    addToCart(selectedProduct, quantity);
    toast.success("Product has been added to cart!");
  };

  //New Products

  const [newProduct, setNewProduct] = useState(
    language === "vie" ? NewProducts.vie : NewProducts.eng
  );
  const [filterNewProduct, setFilterNewProduct] = useState(
    NewProducts.eng.filter(
      (product) => product.category2 == selectedProduct?.category2
    )
  );
  useEffect(() => {
    if (language === "vie") {
      setNewProduct(NewProducts.vie);
      setItemData(AllProducts.vie);
      setFilterNewProduct(
        NewProducts.vie.filter(
          (product) => product.category2 == selectedProduct?.category2
        )
      );
    } else {
      setNewProduct(NewProducts.eng);
      setItemData(AllProducts.eng);
      setFilterNewProduct(
        NewProducts.eng.filter(
          (product) => product.category2 == selectedProduct?.category2
        )
      );
    }
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setItemData(
      language === "vie"
        ? AllProducts.vie
        : AllProducts.eng.filter(
            (item) =>
              item.category2 === selectedProduct?.category2 &&
              item.id !== selectedProduct?.id
          )
    );
  }, [selectedProduct, language]);

  return (
    <Fragment>
      <section className="product-page">
        <Container>
          <Row className="justify-contents-center">
            <Col md={6}>
              <img loading="lazy" src={selectedProduct?.coverUrl} alt="" />
            </Col>

            <Col md={6}>
              <h2>{selectedProduct?.productName}</h2>
              <div className="star-rating">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span className="rating">
                  {selectedProduct?.avgRating}{" "}
                  {language === "vie" ? "Đánh giá" : "Rating"}
                </span>
              </div>
              <div className="info">
                <span className="price">
                  ${selectedProduct?.price.toLocaleString("en-US")}
                </span>
                <span className="area">{selectedProduct?.category2}</span>
              </div>
              <p className="product-shortDesc">{selectedProduct?.shortDesc}</p>
              <div className="addtocart">
                <button
                  aria-label="Add"
                  type="submit"
                  className="add"
                  onClick={() => handelAdd(selectedProduct, quantity)}
                >
                  {language === "vie" ? "Thêm vào giỏ" : "Buy"}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="product-reviews">
        <Container>
          <ul>
            <li
              style={{
                color: listSelected === "desc" ? "white" : "black",
                backgroundColor: listSelected === "desc" ? "#7F4D3E" : "white",
              }}
              onClick={() => setListSelected("desc")}
            >
              {language === "vie" ? "Nội Dung" : "Information"}
            </li>
            <li
              style={{
                color: listSelected === "rev" ? "white" : "black",
                backgroundColor: listSelected === "rev" ? "#7F4D3E" : "white",
              }}
              onClick={() => setListSelected("rev")}
            >
              {language === "vie" ? "Các đánh giá" : "Ratings"} (
              {selectedProduct?.reviews.length})
            </li>
          </ul>
          {listSelected === "desc" ? (
            <p
              style={{
                border: "3px solid black",
                padding: "1rem",
                fontSize: "18px",
              }}
            >
              {selectedProduct?.description}
            </p>
          ) : (
            <div className="rates">
              {selectedProduct?.reviews.map((rate) => (
                <div className="rate-comment" key={rate.rating}>
                  <span>{rate.name}</span>
                  <span>{rate.rating} (rating)</span>
                  <p>{rate.text}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
      <section className="related-products">
        <Container>
          <h3>
            {language === "vie" ? "Sản phẩm có thể tham khảo:" : "Recommend:"}
          </h3>
          <SliderNewProducts newProduct={filterNewProduct} />
        </Container>
      </section>
    </Fragment>
  );
}
