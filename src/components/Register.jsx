import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    is_admin: false
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/user", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          alert(res.data.message);
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup">
      <h1> REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username </label>
        <input
          type="text"
          placeholder="your username"
          name="username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          placeholder="your email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="your password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit">SignUp</button>
        <Link to={"/login"}>LogIn</Link>
      </form>
    </div>
  );
}
