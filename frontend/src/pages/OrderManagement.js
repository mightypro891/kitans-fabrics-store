import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Manage Orders</h2>
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