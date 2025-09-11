import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) =>
    setCart(cart.filter((item) => item._id !== product._id));

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;