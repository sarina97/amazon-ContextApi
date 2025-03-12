import { createContext, useState } from "react";

export const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD - U.S. Dollar");
  const [country, setCountry] = useState("United States");

  return (
    <FooterContext.Provider value={{ language, setLanguage, currency, setCurrency, country, setCountry }}>
      {children}
    </FooterContext.Provider>
  );
};
