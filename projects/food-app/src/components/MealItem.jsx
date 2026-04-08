import { useContext } from "react";
import Button from "./UI/Button";
import { formatter } from "./utils/validation";
import { CartContext } from "../store/cartContext";

export default function MealItem({ item }) {
  const {onAddNewItem} = useContext(CartContext);
  function handleMealItemClicked() {
    onAddNewItem(item);
  }

  return (
    <>
      <article className="meal-item">
        <img
          src={`http://localhost:3000/${item?.image}`}
          alt={item?.name}
        ></img>
        <h3>{item?.name}</h3>
        <p className="meal-item-price">{formatter.format(item?.price)}</p>
        <p className="meal-item-description">{item?.description}</p>

        <Button
          onClick={handleMealItemClicked}
          isTextOnly="true"
          customClass=" meal-item-actions "
        >
          {" "}
          Add to Cart{" "}
        </Button>
      </article>
    </>
  );
}
