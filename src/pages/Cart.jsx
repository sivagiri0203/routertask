import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-gray-500">
              ₹ {item.price} × {item.quantity}
            </p>
            <p className="font-semibold">
              Total: ₹ {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              −
            </button>

            <span className="font-bold">{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <p>Total: ₹ {total.toFixed(2)}</p>
          <p>Discount (10%): ₹ {discount.toFixed(2)}</p>
          <p className="text-xl font-extrabold mt-2">
            Final Price: ₹ {finalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
