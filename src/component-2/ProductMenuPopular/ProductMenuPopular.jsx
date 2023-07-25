import SliderMenu from "../Slider/SliderMenu";
import { PopularProducts } from "../../utils/shop";
import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./productmenupopular.css";


export default function ProductMenuPopular() {
    const {language} = useContext(LanguageContext);
    const [sliderItem, setSliderItem] =useState(PopularProducts.vie)
    useEffect(() => {
        if (language === "vie") {
            setSliderItem(PopularProducts.vie);
        } else {
            setSliderItem(PopularProducts.eng);
        }
    }, [language]);       

    return(
        <div className="productmenu-popular">
            <div className="productmpopular-content">
                <h1>{language === "vie" ? "Những sản phẩm nội thất nổi bật" :"The most popular inferior products"}</h1>
            </div>

            <SliderMenu sliderItem={sliderItem}/>
        </div>
    )
};

