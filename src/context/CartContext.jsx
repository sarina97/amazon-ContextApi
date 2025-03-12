import { createContext, useReducer } from "react";
import cartReducer from "../reducers/CartReducer";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
