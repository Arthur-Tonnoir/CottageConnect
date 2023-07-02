import React, { useState } from "react";
import './Nav.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from "@mui/material";

function Nav() {
    const [selectedLangue, setSelectedLangue] = useState('France');
    const handleLangueClick = (langue) => {
        setSelectedLangue(langue);
    };

    const [toggleMenu, setToggleMenu] = useState(false);
    const [navGreen, setNavGreen] = useState(false);
    const transitionNav = () => {
        window.scrollY > 100 ? setNavGreen(true) : setNavGreen(false);
    }
    useState(() => {
        document.addEventListener("scroll", transitionNav);
    })
    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }


    return (
        <header>
            <div className={`navbar ${navGreen || toggleMenu ? "navbarGreen" : "navbarTransparent"} 
            ${toggleMenu && "show"}`}>
                <button className="navbarBurger" onClick={handleClick}>
                    <MenuIcon />
                </button>
                <li>
                    <a href="#" className="logo">Logo</a>
                </li>
                    <li>Destinations
                        <ul className="navbarDestination">
                            <li className="vide"></li>
                            <li>
                                <a href="#">Cat1</a>
                            </li>
                            <li>
                                <a href="#">Cat2</a>
                            </li>
                            <li>
                                <a href="#">Cat3</a>
                            </li>
                        </ul>
                    </li>
                    <li>Nos offres spéciales
                        <ul className="navbarOffer">
                            <li className="vide"></li>
                            <li>
                                <a href="#">Categorie1</a>
                            </li>
                            <li>
                                <a href="#">Categorie2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Publiez votre annonce</a>
                    </li>
                <li>Recherche
                    <ul className="navbarSearch">
                        <li className="vide"></li>
                        <li className="recherche">
                            <input className="inputDestination" type="text" name="destination" id="destination" placeholder="Ou souhaitez-vous aller?" />
                            <br />
                            <input type="date" name="arrivee" id="arrivee" />
                            <input type="date" name="depart" id="depart" />
                            <br />
                            <select name="voyageurs" id="voyageurs">
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
                        </li>
                    </ul>
                </li>
                <li>Compte
                    <ul className="navbarCompte">
                        <li className="vide"></li>
                        <li>
                            <a href="#">Connexion</a>
                        </li>
                        <li>
                            <a href="#">Inscription</a>
                        </li>
                        <li>
                            <a href="#">Categorie3</a>
                        </li>
                        <li>
                            <a href="#">Categorie4</a>
                        </li>
                        <li>
                            <a href="#">Categorie5</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="langue">
                        <img id="nomLangue" src={`./img/icons8-${selectedLangue.toLowerCase()}-20.png`} alt={selectedLangue} />
                        <span className="langue__arrow"><KeyboardArrowDownIcon /></span>
                    </a>
                    <ul className="navbarLangue">
                        <li className="vide"></li>
                        <li>
                            <a
                                href="#"
                                onClick={() => handleLangueClick('France')}
                                className={selectedLangue === 'France' ? 'hide' : ''}
                            >
                                <img id="France" src="./img/icons8-france-20.png" alt="France" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => handleLangueClick('USA')}
                                className={selectedLangue === 'USA' ? 'hide' : ''}
                            >
                                <img id="USA" src="./img/icons8-usa-20.png" alt="USA" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => handleLangueClick('Spain')}
                                className={selectedLangue === 'Spain' ? 'hide' : ''}
                            >
                                <img id="Spain" src="./img/icons8-spain-20.png" alt="Spain" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => handleLangueClick('Germany')}
                                className={selectedLangue === 'Germany' ? 'hide' : ''}
                            >
                                <img id="Germany" src="./img/icons8-germany-20.png" alt="Germany" />
                            </a>
                        </li>
                    </ul>
                </li>
            </div>
        </header>
    );
}

export default Nav;
