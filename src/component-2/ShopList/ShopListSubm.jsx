import ProductSubMCard from "../ProductSubMCard/ProductSubMCard";
import { useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ShopListSubm({ itemData, addToCart }) {
  const { language } = useContext(LanguageContext);
  useEffect(() => {}, [itemData]);
  if (itemData.length === 0) {
    return <h1 className="not-found">{language === "vie" ? "Không tìm thấy sản phẩm !!" : "Products have not found !!"}</h1>;
  } else {
    return (
      <div className="productsubm-card">
        {itemData.map((itemData) => {
          return (
            <ProductSubMCard
              key={itemData.id}
              itemData={itemData}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    );
  }
}
