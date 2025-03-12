import { FooterProvider } from "../context/FooterContext";
import {CategoryProvider} from "../context/CategoryContext"
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/molocule/Header"
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ProductCard from "../components/ProductCard";


function App() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <CartProvider>
          <FooterProvider> {/* 🔹 اضافه کردن FooterProvider */}
            <BrowserRouter>
              <div className="flex flex-col min-h-screen">
                {/* هدر */}
                <Header />


                {/* محتوای اصلی */}
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:product" element={<ProductCard />} />
                  </Routes>
                </main>

                {/* فوتر */}
                <Footer />
              </div>
            </BrowserRouter>
          </FooterProvider>
        </CartProvider>
      </ProductProvider>
    </CategoryProvider>
  );
}

export default App;
