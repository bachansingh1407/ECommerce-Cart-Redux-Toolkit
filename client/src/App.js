
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCart from "./cart/AddCart";
import Cart from "./cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCart />} />
        <Route path="/cart-items" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
