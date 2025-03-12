import { useContext, useState, useMemo } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { ProductContext } from "../../context/ProductContext";

const HeaderSearch = () => {
  const { categories } = useContext(CategoryContext);
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredProducts = useMemo(() => {
    if (searchTerm.trim() === "") return [];

    return products.flatMap((category) =>
      category.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <div className=" w-full">
      {isFocused && (
        <div className="fixed inset-0 bg-black/50 z-10 transition-opacity"></div>
      )}

      {/* جستجو */}
      <div className="header_search flex items-center rounded-lg overflow-hidden w-full relative z-20">
        {/* دسته‌بندی‌ها */}
        <select
          className="bg-gray-200 text-[12px] h-full px-1 py-3 border-r focus:outline-none w-fit text-black"
          onClick={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {categories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>

        {/* فیلد جستجو */}
        <div className="w-full">
          <input
            type="search"
            placeholder="Search Amazon.co.uk"
            className="p-2 w-full focus:outline-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* دکمه جستجو */}
        <button className="bg-yellow-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {/* نمایش محصولات فیلتر شده */}
      {searchTerm && (
        <div className="absolute bg-white shadow-lg w-[50%] mt-12 max-h-60 overflow-y-auto border p-2 top-[11%] z-30">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-2 border-b text-black">
                {product.name} - ${product.price}
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
