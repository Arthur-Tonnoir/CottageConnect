import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/login", values)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/profil");
          window.location.reload();
        } else {
          console.log(res.data);
          alert(res.data.error);
        }
      })
      .then((err) => console.log(err));
  };
  return (
    <div className="login">
      <h1> LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          placeholder="your username"
          name="username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="your password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <Link to={"/register"}>Register</Link>
      </form>
    </div>
  );
}
