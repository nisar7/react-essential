import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  onAddNewItems: () => {},
  onItemIncremental: () => {},
  onItemDecremental: () => {},
});

export function CartContextProvider({children}) {
  const [items, setItems] = useState([]);

  function onAddNewItems(item) {
    setItems((preVal) => {
      const isItemExist = preVal.some((val) => val.id == item.id);
      if (isItemExist) {
        return preVal;
      } else {
        return [{...item , qty: (item.qty || 0) + 1 }, ...preVal];
      }
    });
  }

  function onItemIncremental(id) {
    setItems((prevVal) => {
      const item = prevVal.find((val) => val.id === id);
      if (!item) return prevVal;

      return [{ ...(item.qty + 1) }, prevVal];
    });
  }

  function onItemDecremental(id) {
    setItems((prevVal) => {
      const item = prevVal.find((val) => val.id === id);
      if (!item) return prevVal;

      return [{ ...(item.qty - 1) }, prevVal];
    });
  }

  const values = { items, onAddNewItems, onItemIncremental, onItemDecremental };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
