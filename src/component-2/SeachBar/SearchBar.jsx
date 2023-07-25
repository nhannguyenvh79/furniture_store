import { useState, useContext } from "react";
import "./searchbar.css";
import { LanguageContext } from "../../context/LanguageContext";


export default function SearchBar ({setFilterList,itemData}) {
    const [inputValue,setInputValue] =useState(null);
    const { language } = useContext(LanguageContext);
    
    const handelChange =(input)=> {
        setInputValue(input.target.value);
        setFilterList(itemData.filter(item => item.productName?.toLowerCase().includes(inputValue?.toLowerCase())));
    }
    
    return (
    <div className="search-container">
        <input
        type="text"
        placeholder= {`${language === "vie" ? "Tìm kiếm..." : "Search..."}`}
        onChange={handelChange}
        />
        <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
    );
};