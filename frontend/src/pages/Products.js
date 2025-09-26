import React, { useEffect, useState } from "react";
import { api } from "../api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err.response?.data?.message || err.message));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) =>
    setCart(cart.filter((item) => item._id !== product._id));

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 && <p>No products yet.</p>}
      {products.map((p) => (
        <ProductCard key={p._id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
