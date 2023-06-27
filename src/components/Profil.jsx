import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profil() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {auth ? (
        <div>
          <h2>{username}'s PROFIL</h2>
        </div>
      ) : (
        <div>
          <h3> {message}</h3>

          <Link to="/login">
            <h3> Login Now</h3>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profil;
