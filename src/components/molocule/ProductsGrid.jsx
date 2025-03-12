import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const ProductsGrid = () => {
  const { products } = useContext(ProductContext);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col"
          >
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>

            {/* کارت‌هایی که بیش از 3 تصویر دارند → گرید ۲×۲ */}
            {product.products.length > 3 ? (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {product.products.slice(0, 4).map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-28 object-cover rounded-md"
                  />
                ))}
              </div>
            ) : product.products.length === 1 ? (
              /* کارت‌هایی که فقط 1 تصویر دارند */
              <div className="flex-grow mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              /* کارت‌هایی که بیش از 1 تصویر دارند */
              <div className="grid grid-cols-1 gap-2 mb-4">
                {product.products.slice(0, 4).map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    className="w-full h-28 object-cover rounded-md"
                  />
                ))}
              </div>
            )}

            <p className="text-gray-600 mt-2">
              {product.products.length} items available
            </p>
            <Link
              to={`/product/${product.tag}`}
              className="text-blue-600 mt-2 inline-block"
            >
              Shop now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
