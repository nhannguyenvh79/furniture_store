import ProductMenuCard from "../ProductMenuCard/ProductMenuCard";
import { useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ShopListMenu({ itemData, addToCart }) {
    const { language } = useContext(LanguageContext);
    useEffect(() => { }, [itemData])

    if (itemData.length === 0) {
        return (
            <p className="not-found">{language === "vie" ? "Không tìm thấy sản phẩm !!" : "Product Not Found!!"}</p>
        )
    } else {
        return (
            <div className='productmenu-items'>
                {itemData.map((itemData) => {
                    return (
                        <ProductMenuCard
                            key={itemData.id}
                            itemData={itemData}
                            addToCart={addToCart}
                        />
            )
                })}
            </div>
        )
    }
}

