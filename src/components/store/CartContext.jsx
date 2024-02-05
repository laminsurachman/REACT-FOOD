import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //... update the state to add meal item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updateItems };
  }
  if (action.type === "REMOVE_ITEM") {
    //... update the state to remove meal item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
  }
  return state;
}
export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
