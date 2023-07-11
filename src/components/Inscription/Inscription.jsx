import React, { useState } from "react";
import "./Inscription.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Inscription() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    is_admin: false,
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
    <div className="containerInscription">
      <div className="signInScreen">
        <form onSubmit={handleSubmit} className="inscriptionForm">
          <h3>Créez un compte</h3>
          <span className="inputSignIn">Nom d'utilisateur</span>
          <br/>
          <input
            className="signInPlaceholder"
            type="text"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <br/>
          <span className="inputSignIn">Adresse mail</span>
          <br/>
          <input
            className="signInPlaceholder"
            type="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <br/>
          <span className="inputSignIn">Mot de passe</span>
          <br/>
          <input
            className="signInPlaceholder"
            type="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button type="submit" className="signInButton">
            S'inscrire
          </button>
          <br/>
          <br/>
          <div className="googleConnexion1">
            <span>Ou continuer avec </span>
            <a href="#">
              Google
            </a>
          </div>
          <div>
            <span className="signInScreen">Vous avez déjà un compte ? </span>
            <div
              to="#"
              className={(nav) => (nav.isActive ? "lien Active" : "lien")}
            >
              <span className="linkLogin">
                <a href="#">Connectez vous ici</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Inscription;
