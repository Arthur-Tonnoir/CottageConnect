import React, { useEffect, useState } from "react";
import "./Nav.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { checkAuth } from "../auth";
import { Link } from "react-router-dom";

function Nav() {
  const [selectedLangue, setSelectedLangue] = useState("France");
  const handleLangueClick = (langue) => {
    setSelectedLangue(langue);
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const [navGreen, setNavGreen] = useState(false);
  const transitionNav = () => {
    window.scrollY > 100 ? setNavGreen(true) : setNavGreen(false);
  };
  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });
  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    checkAuth(setAuth, setAdmin);
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:3001/users/logout")
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  /* Permet de modifier le placeholder de l'input date pour Arrivee et Depart */
  const [showPlaceholder1, setShowPlaceholder1] = useState(true);
  const [showPlaceholder2, setShowPlaceholder2] = useState(true);

  const handleInputFocus1 = () => {
    setShowPlaceholder1(false);
  };

  const handleInputBlur1 = (event) => {
    if (event.target.value === "") {
      setShowPlaceholder1(true);
    }
  };
  const handleInputFocus2 = () => {
    setShowPlaceholder2(false);
  };

  const handleInputBlur2 = (event) => {
    if (event.target.value === "") {
      setShowPlaceholder2(true);
    }
  };

  /* Permet de gérer le changement de statut du menu déroulant en bloquant comme choix "Nombre de voyageur"*/
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(event.target.value === "open");
  };

  return (
    <header>
      <div
        className={`navbar ${
          navGreen || toggleMenu ? "navbarGreen" : "navbarTransparent"
        } 
            ${toggleMenu && "show"}`}
      >
        <button className="navbarBurger" onClick={handleClick}>
          <MenuIcon />
        </button>
        <li className="logoNav">
          <img src="./img/logo1.png" alt="img" />
        </li>
        <li className="destinationNav">
          Destinations
          <ul className="navbarDestination">
            <li className="vide"></li>
            <li>
              <a href="./">Categorie1</a>
            </li>
            <li>
              <a href="./">Categorie2</a>
            </li>
            <li>
              <a href="./">Categorie3</a>
            </li>
          </ul>
        </li>
        <li className="offreNav">
          Nos offres spéciales
          <ul className="navbarOffer">
            <li className="vide"></li>
            <li>
              <a href="./">Categorie1</a>
            </li>
            <li>
              <a href="./">Categorie2</a>
            </li>
          </ul>
        </li>
        <li>
          {!auth ? (
            <Link to="/login" className="annonceNav">
              Publiez votre annonce
            </Link>
          ) : (
            <Link to="/addcottage" className="annonceNav">
              Publiez votre annonce
            </Link>
          )}
        </li>
        <li className="rechercheNav">
          <a href="./">
            <img src="./img/loupe.png" alt="loupe" className="imgRecherche" />
          </a>
          <ul className="navbarSearch">
            <li className="recherche">
              <input
                className="inputDestination"
                type="text"
                name="destination"
                id="destination"
                placeholder="Ou souhaitez-vous aller?"
              />
              <br />
              <div className="conteneurRecherche">
                {showPlaceholder1 ? (
                  <input
                    className="champDate"
                    type="text"
                    placeholder="Arrivée"
                    onFocus={handleInputFocus1}
                  />
                ) : (
                  <input
                    className="champDate"
                    type="date"
                    onFocus={handleInputFocus1}
                    onBlur={handleInputBlur1}
                  />
                )}
              </div>
              <div>
                {showPlaceholder2 ? (
                  <input
                    className="champDate"
                    type="text"
                    placeholder="Départ"
                    onFocus={handleInputFocus2}
                  />
                ) : (
                  <input
                    className="champDate"
                    type="date"
                    onFocus={handleInputFocus2}
                    onBlur={handleInputBlur2}
                  />
                )}
              </div>

              <br />
              <select
                name="voyageurs"
                id="voyageurs"
                className="voyageurSelect"
                onChange={handleDropdownChange}
                value={selectedOption}
              >
                {!isOpen && selectedOption === "" && (
                  <option value="" disabled>
                    Nombre de Voyageur
                  </option>
                )}
                <option value="1">1 Voyageur</option>
                <option value="2">2 Voyageurs</option>
                <option value="3">3 Voyageurs</option>
                <option value="4">4 Voyageurs</option>
                <option value="5">5 Voyageurs</option>
                <option value="6">6 Voyageurs</option>
                <option value="7">7 Voyageurs</option>
                <option value="8">8 Voyageurs</option>
                <option value="9">9 Voyageurs</option>
                <option value="10">10 Voyageurs</option>
                <option value="11+">11 et plus</option>
              </select>
              <button className="btnRecherche">
                <span className="spanBtnRecherche">Recherche</span>
              </button>
            </li>
          </ul>
        </li>
        <li className="compteNav">
          <a href="./">
            <img src="./img/compte.png" alt="compte" />
          </a>

          <ul className="navbarCompte">
            <li className="vide"></li>
            {!auth ? (
              <>
                <li>
                  <Link to="/login">Connexion</Link>
                </li>
                <li>
                  <Link to="/register">Inscription</Link>
                </li>
              </>
            ) : admin ? (
              <>
                <li>
                  <Link to="/profil">Profil</Link>
                </li>
                <li>
                  <Link to="/admin">Admin Board</Link>
                </li>
                <button onClick={handleDelete}>Logout</button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/PageProfil">Profil</Link>
                </li>
                <button onClick={handleDelete}>Logout</button>
              </>
            )}
          </ul>
        </li>
        <li className="langueNav">
          <a href="./" className="langue">
            <img
              id="nomLangue"
              src={`./img/icons8-${selectedLangue.toLowerCase()}-20.png`}
              alt={selectedLangue}
            />
          </a>
          <ul className="navbarLangue">
            <li className="vide"></li>
            <li className="vide"></li>
            <li>
              <a
                href="./"
                onClick={() => handleLangueClick("France")}
                className={selectedLangue === "France" ? "hide" : ""}
              >
                <img
                  id="France"
                  src="./img/icons8-france-20.png"
                  alt="France"
                />
              </a>
            </li>
            <li>
              <a
                href="./"
                onClick={() => handleLangueClick("USA")}
                className={selectedLangue === "USA" ? "hide" : ""}
              >
                <img id="USA" src="./img/icons8-usa-20.png" alt="USA" />
              </a>
            </li>
            <li>
              <a
                href="./"
                onClick={() => handleLangueClick("Spain")}
                className={selectedLangue === "Spain" ? "hide" : ""}
              >
                <img id="Spain" src="./img/icons8-spain-20.png" alt="Spain" />
              </a>
            </li>
            <li>
              <a
                href="./"
                onClick={() => handleLangueClick("Germany")}
                className={selectedLangue === "Germany" ? "hide" : ""}
              >
                <img
                  id="Germany"
                  src="./img/icons8-germany-20.png"
                  alt="Germany"
                />
              </a>
            </li>
          </ul>
        </li>
      </div>
    </header>
  );
}

export default Nav;