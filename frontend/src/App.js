import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import OrderManagement from "./pages/OrderManagement";

import { getProducts } from "./api"; // import your API

function App() {
  useEffect(() => {
    // Example: fetch products on load
    getProducts().then(console.log).catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
