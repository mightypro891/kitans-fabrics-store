import React, { useEffect, useState } from "react";
import { api } from "../api";

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err.response?.data?.message || err.message));
  }, []);

  return (
    <div>
      <h2>Manage Orders</h2>
      {orders.length === 0 && <p>No orders yet.</p>}
      {orders.map((o) => (
        <div key={o._id} className="card">
          <p>Order by {o.email}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderManagement;
