import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import LocationDetector from "./LocationUser";

const Header = () => {
  const { cartItems } = useContext(CartContext);


  return (
    <header className="bg-gray-900 text-white flex justify-between items-center h-fit w-full relative px-2">
      <div className="header_left flex items-center w-[30%] gap-6">
        <div className="logos flex items-center">
          <img
            src="/src/assets/icon/logo.png"
            alt="logo"
            className="w-[100px]"
          />
          <span>.co.uk</span>
        </div>

        <div className="location flex flex-col items-left ">
          <span className="text-[12px] text-gray-500">
            delivery to london W1D 7
          </span>
          <div className="flex  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <Link to={"/"} className="font-bold text-[13px]">
             <LocationDetector/>
            </Link>
          </div>
        </div>
      </div>

      <div className="header_search flex items-center border rounded-lg overflow-hidden w-[65%] ">
        <HeaderSearch />
      </div>
      <div className="header_right flex gap-3 w-[30%] justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
        <div className=" flex flex-col items-left ">
          <span className="text-[12px] text-gray-500">
            return
          </span>
          <div className="flex  items-center">
            
            <Link to={"/"} className="font-bold text-[13px]">
              &order
            </Link>
          </div>
        </div>
        <div className=" flex flex-col items-left ">
          <span className="text-[12px] text-gray-500">
            hello sign in
          </span>
          <div className="flex  items-center">
            
            <Link to={"/"} className="font-bold text-[13px]">
              accoun and list
            </Link>
          </div>
        </div>

        <div>🛒 Cart ({cartItems.length})</div>
      </div>
    </header>
  );
};

export default Header;
