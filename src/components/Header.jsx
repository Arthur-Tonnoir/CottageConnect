import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          console.log(res.data);
          setAuth(false);
        }
      })
      .catch((err) => console.log("Erreur !", err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:3001/users/logout")
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="header">
      <h1> CASA MAE </h1>
      <ul>
        {!auth ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
            <button onClick={handleDelete}>Logout</button>
          </>
        )}
      </ul>
    </div>
  );
}
export default Header;
