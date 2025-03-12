import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
  
    fetchProducts();
  }, []);
  

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
