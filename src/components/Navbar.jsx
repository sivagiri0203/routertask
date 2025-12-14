import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-linear-to-r from-black to-gray-900 text-white shadow-lg">
      <Link
        to="/"
        className="text-xl font-extrabold tracking-wide hover:text-yellow-400 transition"
      >
        🛍 Fake Store
      </Link>

      <Link
        to="/cart"
        className="relative text-lg font-semibold hover:text-yellow-400 transition"
      >
        Cart
        <span className="ml-2 bg-yellow-400 text-black text-sm px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      </Link>
    </nav>
  );
}
