import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : null}
      {cart.map((item, i) => (
        <div key={i} className="card">
          <h4>{item.name}</h4>
          <p>{item.price} NGN</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;