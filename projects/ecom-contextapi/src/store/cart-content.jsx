import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContent = createContext({

    items: [],
    onUpdateItemQuantity: () => { },
    onAddToCart: () => { }
})

function shoppingCartStateReducer(state, action) {

    if (action.type === 'add-item') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === "edit-item") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        }
    }
}

export function CartContentProvider({ children }) {

    const [shoppingCartState, dispatchShoppingCartState] = useReducer(
        shoppingCartStateReducer, {
        items: [],
    })
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    function handleAddItemToCart(id) {
        dispatchShoppingCartState({
            type: 'add-item',
            payload: id
        })

    }

    function handleUpdateCartItemQuantity(productId, amount) {
        dispatchShoppingCartState({
            type: 'edit-item',
            payload: { productId, amount }
        })

    }

    const cartContent = { items: shoppingCartState?.items, onUpdateItemQuantity: handleUpdateCartItemQuantity, onAddToCart: handleAddItemToCart }

    return <CartContent.Provider value={cartContent}> {children}</CartContent.Provider>
} 