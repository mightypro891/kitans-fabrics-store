import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Your backend URL
  const API_URL = "https://kitans-fabrics-store-1.onrender.com/api";

  const handleLogin = async () => {
    try {
      // Call login endpoint
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      // Save token to localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Save user info if returned
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      alert("Login successful!");
      // Optionally redirect user after login:
      // window.location.href = "/"; // go to homepage

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
