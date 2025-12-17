import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginForm() {

  let [user, setUser] = useState({
    username: "",
    password: ""
  });

  let [message, setMessage] = useState("");
  let [isSuccess, setIsSuccess] = useState(false);

  // handle input change
  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // submit login form
  let handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/login", user)
      .then((response) => {
        setIsSuccess(true);
        setMessage("Login successful ✅");
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Login failed ❌");
      });
  };

  // useEffect reacts to login result
  useEffect(() => {
    if (message !== "") {
      alert(message);
    }
  }, [message]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
