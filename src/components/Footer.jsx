import { useContext } from "react";
import { FooterContext } from "../context/FooterContext";
import FooterSettings from "./FooterSetting";

const Footer = () => {
  const { language, currency, country } = useContext(FooterContext);

  return (
    <footer className="bg-gray-800 text-gray-300 text-sm mt-10">
      {/* دکمه بازگشت به بالا */}
      <div className="bg-gray-700 text-center p-3 cursor-pointer hover:bg-gray-700 transition">
       <a href="#"> Back to top</a>
      </div>
      {/* لینک‌ها */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 max-w-6xl mx-auto">
        <div>
          <h3 className="text-white font-bold mb-2">Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2">Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2">Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2">Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      {/* تنظیمات فوتر */}
      <div className="p-5 text-center">
        <FooterSettings />
      </div>
      {/* تنظیمات زبان، ارز و کشور */}
      <div className="border-t border-gray-700 p-5 flex justify-center space-x-4">
        <span>{language}</span>
        <span>{currency}</span>
        <span>{country}</span>
      </div>

      <div className="container mx-auto w-full bg-black/40">
        <div className="xl:w-[75%] p-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-[12px] p-2">
            <div>
              <h3 className="text-white font-bold mb-2">Amazon Music</h3>
              <p>Stream millions of songs</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Amazon Ads</h3>
              <p>Reach customers wherever they spend their time</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Amazon Business</h3>
              <p>Everything For Your Business</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">AmazonGlobal</h3>
              <p>Ship Orders Internationally</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">6pm</h3>
              <p>Score deals on fashion brands</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">IMDb</h3>
              <p>Movies, TV & Celebrities</p>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 mt-6 pt-4">
            <p>
              <a href="#" className="hover:underline">
                Conditions of Use
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Privacy Notice
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Consumer Health Data Privacy Disclosure
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Your Ads Privacy Choices
              </a>
            </p>
            <p className="mt-2">
              &copy; 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
