import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Your backend URL
  const API_URL = "https://kitans-fabrics-store-1.onrender.com/api";

  const handleRegister = async () => {
    try {
      // Call register endpoint
      const res = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });

      // Save token to localStorage (if backend sends token)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Optionally save user info
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      alert("User registered & logged in!");
      // Redirect or refresh if needed, e.g.:
      // window.location.href = "/"; // go to home page

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
