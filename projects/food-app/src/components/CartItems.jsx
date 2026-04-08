import { useContext } from "react";
import { CartContext } from "../store/cartContext";

export default function CartItems() {
  const { items, onAddNewItem , onUpdateItem} = useContext(CartContext);

  return (
    <>
      <ul >
        {items?.map((item) => {
          return (
            <li key={item.id} className="cart-item" >
              <p>
                {item.name} - {item.qty} X {item.price}
              </p>
              <p className="cart-item-actions">
                <button onClick={() => onAddNewItem(item)}>+</button>
                <span>{item.qty}</span>
                <button onClick={() => onUpdateItem(item)}>-</button>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
