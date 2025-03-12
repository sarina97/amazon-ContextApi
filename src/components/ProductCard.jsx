import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductCard = () => {
  const { product } = useParams();
  const { products } = useContext(ProductContext);

  const selectedCategory = useMemo(() => {
    return products.find((cat) => cat.tag === product);
  }, [products, product]);

  if (!selectedCategory) {
    return <p className="p-6 text-red-500">product not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{selectedCategory.name}</h1>
      <div className="grid grid-cols-4 gap-6">
        {selectedCategory.products.length > 0 ? (
          selectedCategory.products.map((product) => (
            <div key={product.id} className="border p-4 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-green-600">{product.offer ? "On Sale" : ""}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
