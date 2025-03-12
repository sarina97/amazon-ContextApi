import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/HeaderCategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
