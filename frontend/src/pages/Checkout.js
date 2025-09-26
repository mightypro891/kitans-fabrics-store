import React, { useState } from "react";
import axios from "axios";

function Checkout() {
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    const res = await axios.post("/api/orders", { email });
    alert("Order placed: " + res.data._id);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}

export default Checkout;