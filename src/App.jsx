import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";   // ✅ singular
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/NavBar"; 

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
