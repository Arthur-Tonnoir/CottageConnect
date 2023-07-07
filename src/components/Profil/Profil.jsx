import React from "react";
import { useState } from "react";
import "./Profil.scss";

function Profil() {
    const [activeContent, setActiveContent] = useState("#Ip");

    const handleLinkClick = (event, target) => {
        event.preventDefault();
        setActiveContent(target);
    };

    return (
        <div class="containerProfil">
            <div class="menuProfil">
                <ul>
                    <li><a href="#Ip" onClick={(event) => handleLinkClick(event, "#Ip")}>Informations personnelles</a></li>
                    <li><a href="#Mdp" onClick={(event) => handleLinkClick(event, "#Mdp")}>Mot de passe</a></li>
                    <li><a href="#Idp" onClick={(event) => handleLinkClick(event, "#Idp")}>Informations de paiement</a></li>
                    <li><a href="#Smc" onClick={(event) => handleLinkClick(event, "#Smc")}>Supprimer mon compte</a></li>
                </ul>
            </div>
            <div class="contentProfil">
                <div id="Ip" style={{ display: activeContent === "#Ip" ? "block" : "none" }}>
                    <form className="formProfil">
                        <ul>
                            <li>
                                <label for="texte1">Adresse mail</label><br />
                                <input type="text" id="texte1" name="texte1" />
                            </li>
                            <li>
                                <label for="texte2">Téléphone</label><br />
                                <input type="text" id="texte2" name="texte2" />
                            </li>
                            <li>
                                <label for="texte3">Civilité</label><br />
                                <input type="text" id="texte3" name="texte3" />
                            </li>
                            <li>
                                <label for="texte4">Nom</label><br />
                                <input type="text" id="texte4" name="texte4" />
                            </li>
                            <li>
                                <label for="texte5">Prenom</label><br />
                                <input type="text" id="texte5" name="texte5" />
                            </li>
                            <li>
                                <label for="texte6">Adresse</label><br />
                                <input type="text" id="texte6" name="texte6" />
                            </li>
                            <li>
                                <label for="texte7">Code postal</label><br />
                                <input type="text" id="texte7" name="texte7" />
                            </li>
                            <li>
                                <label for="texte8">Ville</label><br />
                                <input type="text" id="texte8" name="texte8" />
                            </li>
                            <li>
                                <label for="texte9">Pays</label><br />
                                <input type="text" id="texte9" name="texte9" />
                            </li>
                        </ul>

                        <button type="submit" className="buttonProfil">Confirmer</button>
                    </form>
                </div>
                <div id="Mdp" style={{ display: activeContent === "#Mdp" ? "block" : "none" }}>
                    <form className="formProfil">
                        <ul>
                            <li>
                                <label for="texte1">Nouveau mot de passe</label><br />
                                <input type="text" id="texte1" name="texte1" />
                            </li>
                            <li>
                                <label for="texte2">Confirmer votre nouveau mot de passe</label><br />
                                <input type="text" id="texte2" name="texte2" />
                            </li>
                        </ul>

                        <button className="buttonProfil" type="submit">Confirmer</button>
                    </form>
                </div>
                <div id="Idp" style={{ display: activeContent === "#Idp" ? "block" : "none" }}>
                    <form className="formProfil">
                        <ul>
                            <li>
                                <label for="card-number">Numéro de carte :</label><br />
                                <input type="text" id="card-number" name="card-number" placeholder="Numéro de carte" />
                                <br />
                            </li>
                            <li>
                                <label for="card-holder">Nom du titulaire :</label><br />
                                <input type="text" id="card-holder" name="card-holder" placeholder="Nom du titulaire" />
                                <br />
                            </li>
                            <li>
                                <label for="expiry-date">Date d'expiration :</label><br />
                                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/AA" />
                                <br />
                            </li>

                            <li>
                                <label for="cvv">CVV :</label><br />
                                <input type="number" id="cvv" name="cvv" placeholder="CVV" />
                                <br />
                            </li>
                        </ul>
                        <button type="submit" className="buttonProfil" value="Valider">Valider</button>
                    </form>
                </div>
                <div id="Smc" style={{ display: activeContent === "#Smc" ? "block" : "none" }}>
                    <p className="deleteTxt">Une fois votre compte supprimé, vos données personnelles,vos réservations <br />ainsi que toutes vos
                        factures seront définitivement perdues.</p>
                    <button className="buttonProfilDelete" type="submit">Supprimer mon compte</button>
                </div>
            </div>
        </div >
    )
}
export default Profil;