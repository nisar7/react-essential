import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Counter from "../counter/Counter";

export default function CartItems() {
  const { items } = useContext(CartContext);

  console.log("Items==>>" , items);
  
  return (
    <>
      <div className="cart-item">
        <h3>Your CART!</h3>
        <ol className="cart-item">
          {items?.map((item) => {
            return (
              <li key={item.id} className="cart-row">
                <Counter
                  value={item.qty}
                  onIncrement={() => incrementItem(item.id)}
                  onDecrement={() => decrementItem(item.id)}
                />
                <span className="item-name">{item.name}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
