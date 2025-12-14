import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
      <div className="h-44 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h2 className="mt-3 text-sm font-bold line-clamp-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-extrabold text-lg mt-1">
        ₹ {product.price}
      </p>

      <button
        onClick={() =>
          inCart ? removeFromCart(product.id) : addToCart(product)
        }
        className={`mt-auto py-2 rounded-xl font-semibold transition ${
          inCart
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
