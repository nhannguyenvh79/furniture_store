import "./shop.css";
import SliderAdvertisement from "../../component-2/Slider/SliderAdvertisement";
import BannerMenu from "../../component-2/Banner/BannerMenu";
import ProductMenuContainer from "../../component-2/ProductMenuContainer/ProductMenuContainer";
import ProductMenuPopular from "../../component-2/ProductMenuPopular/ProductMenuPopular";
import { LanguageContext } from "../../context/LanguageContext";
import { AllProducts, AdvertisementShop } from "../../utils/shop";
import { Fragment, useState, useContext, useEffect } from "react";

const Shop = () => {
  const { language } = useContext(LanguageContext);
  const [itemData, setItemData] = useState(
    language === "vie" ? AllProducts.vie : AllProducts.eng
  );
  useEffect(() => {
    if (language === "vie") {
      setItemData(AllProducts.vie);
    } else {
      setItemData(AllProducts.eng);
    }
  }, [language]);

  const [adsItems, setAdsItems] = useState(AdvertisementShop.vie);
  useEffect(() => {
    if (language === "vie") {
      setAdsItems(AdvertisementShop.vie);
    } else {
      setAdsItems(AdvertisementShop.eng);
    }
  }, [language]);
  return (
    <Fragment>
      <div className="shop-wrapper">
        <SliderAdvertisement adsItems={adsItems} />
        <BannerMenu itemData={itemData} />
        <ProductMenuContainer />
        <ProductMenuPopular />
      </div>
    </Fragment>
  );
};

export default Shop;
