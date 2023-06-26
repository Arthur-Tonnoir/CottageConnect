import React from "react";
import './Formulaire.scss'

function Formulaire() {
    return (
        <div class="container">
            <h3>Contactez nous !</h3>
            <input type="text" id="Prenom" placeholder="Prénom" />

            <input type="text" id="Nom" placeholder="Nom" />

            <input id="Adresse email" type="email" placeholder="Votre email" />
            <br />
            <div class="message">
                <textarea id="message" placeholder="Votre message"></textarea>
            </div>
            <br />
            <div class="Soumettre">
                <button name="button"> Soumettre </button>
            </div>
        </div>
    )
}
export default Formulaire;