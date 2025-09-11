import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name} - {p.price} NGN</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;