import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export default function ProductItem({ productItem , onProductSelect }) {
    const {onAddNewItems} = useContext(CartContext)
    return (
        <div className="meal-item">
            <article>
                <img src={productItem.image} alt={productItem.name} />

                <h3>{productItem.name}</h3>

                <p className="meal-item-description">
                    {productItem.description}
                </p>

                <div className="meal-item-price">
                    ${productItem.price}
                </div>

                <div className="meal-item-actions">
                    <button className="button" onClick={() => onAddNewItems(productItem)}>Add To Cart</button>
                </div>
            </article>
        </div>
    );
}