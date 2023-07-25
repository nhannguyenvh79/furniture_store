import ProductSubMNewCard from '../../component-2/ProductSubmNew/ProductSubmNewCard';
import "./productsubmnew.css";

export default function ProductSubmNewContainer({newProduct}){
    return(
        <div>
            {newProduct.map ((element, index) => {
                return(
                    <ProductSubMNewCard 
                        id={index}
                        coverUrl = {element.coverUrl}
                        productName = {element.productName}
                        category2 = {element.category2}
                        price = {element.price}
                    />
                )

            })}
        </div>
    )
}