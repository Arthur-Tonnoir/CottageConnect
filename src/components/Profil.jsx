import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Profil() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
          return axios.get(`http://localhost:3001/users/user/${res.data.id}`);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((res) => {
        if (res) {
          setData(res.data);
        } else {
          return console.log("Not Auth");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {auth ? (
        <div>
          <h2>{username}'s PROFIL</h2>
          <ul>
            <li>username : {data.username}</li>
            <li>password : {data.password}</li>
            <li>is_admin : {data.is_admin}</li>
            <li>firstname : {data.firstname}</li>
            <li>lastname : {data.lastname}</li>
            <li>phone : {data.phone}</li>
            <li>postal : {data.postal}</li>
            <li>city : {data.city}</li>
            <li>avatar : {data.avatar}</li>
            <li>website : {data.website}</li>
            <li>id : {data.id}</li>
          </ul>
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
