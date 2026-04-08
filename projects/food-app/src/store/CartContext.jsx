import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({
  items: [],
  onAddNewItem: () => {},
  onUpdateItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_NEW_ITEM") {
    const existingIndex = state.items.findIndex(
      (val) => val.id === action.payload.item?.id,
    );

    if (existingIndex != -1) {
      const updatedVal = [...state.items];
      const existingVal = updatedVal[existingIndex];
      updatedVal[existingIndex] = { ...existingVal, qty: existingVal.qty + 1 };

      return { ...state, items: updatedVal };
    } else {
      return {
        ...state,
        items: [{ ...action.payload.item, qty: 1 }, ...state.items],
      };
    }
  }

  if (action.type === "ON_ITEM_UPDATE") {
    const existingIndex = state.items.findIndex(
      (val) => val.id === action.payload.id,
    );
    if (existingIndex === -1) return state;
    const updatedItems = [...state.items];
    const existingValue = updatedItems[existingIndex];
    if (existingValue.qty === 1) {
      return {
        ...state,
        items: updatedItems.filter((item) => item.id != existingValue.id),
      };
    } else {
      const updatedValue = { ...existingValue, qty: existingValue.qty - 1 };
      updatedItems[existingIndex] = updatedValue;
      return { ...state, items: updatedItems };
    }
  }
}

export function CartContextProvider({ children }) {
  const [cartItems, dispatchItems] = useReducer(cartReducer, { items: [] });

  function onAddNewItem(item) {
    dispatchItems({ type: "ADD_NEW_ITEM", payload: { item: item } });
  }

  function onUpdateItem(item) {
    dispatchItems({ type: "ON_ITEM_UPDATE", payload: { id: item?.id } });
  }

  const itemValues = {
    items: cartItems.items,
    onAddNewItem,
    onUpdateItem,
  };

  return (
    <>
      <CartContext.Provider value={itemValues}>{children}</CartContext.Provider>
    </>
  );
}
