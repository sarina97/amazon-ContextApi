import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductsGrid from "../components/molocule/ProductsGrid";

const Home = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [background, setBackground] = useState("");

  useEffect(() => {
    const fetchBackgrounds = async () => {
      try {
        const response = await axios.get("http://localhost:5000/homeBackground");
        setBackgrounds(response.data);
        setBackground(response.data[0]?.src || ""); 
      } catch (error) {
        console.error("Error fetching backgrounds:", error);
      }
    };

    fetchBackgrounds();
  }, []);

  return (
    <div className="relative 2xl:w-[80%] mx-auto bg-gray-50">
      {/* بک‌گراند داینامیک */}
      <div
        className="w-full h-[600px] absolute top-0 left-0 transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* اسلایدر برای تغییر بک‌گراند */}
      {backgrounds.length > 0 && (
        <Swiper
          modules={[Autoplay , Navigation]}
          loop={true}
          autoplay={{ delay: 9000, disableOnInteraction: false }}
          className="w-full h-[250px] absolute top-0 left-0"
          navigation
          onSlideChange={(swiper) =>
            setBackground(backgrounds[swiper.realIndex]?.src)
          }
        >
          {backgrounds.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* گرید روی بک‌گراند */}
      <div className="relative z-10 ">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Home;
