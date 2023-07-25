import "./productsubmcard.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

export default function ProductSubMCard ({itemData,addToCart}) {
    const {setSelectedProduct} =useContext(DataContainer);
    const router =useNavigate();
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    }
    const handleProductClick =()=> {
        setSelectedProduct(itemData);
        localStorage.setItem(`selectedProduct-${itemData.id}`,JSON.stringify(itemData));
        router(`/shop/${itemData.id}`);
    }
    const handelProductAdd =(itemData)=> {
        addToCart(itemData);
        toast.success("Sản phẩm đã có trong giỏ hàng!");
    }

    return (
    <section className="product">
        <img loading="lazy" onClick={()=>handleProductClick()} src={itemData.coverUrl} alt=""/>
        
        <div className="product-like">
            <label>{count}</label> <br />
            <ion-icon name="heart-outline" onClick={increment}></ion-icon>
        </div>
        <div className="product-details">
            <h3 onClick={()=>handleProductClick()}>
                {itemData.productName}
            </h3>

            <div className="product-descrip">
                <p>{itemData.description}</p>
            </div>
            <div className="product-categories">
                <p>{itemData.category1}</p>
                <p>{itemData.category2}</p>
            </div>
            <div className="price">
                <h4>${itemData.price.toLocaleString('en-US')}</h4>
                <button aria-label="Add" type="submit" className="add" onClick={() => handelProductAdd(itemData)}>
                    <ion-icon name="add"></ion-icon>
                </button>
            </div>
        </div>
    </section>
    );
};

