import React from "react";
import './Formulaire.scss'

function Formulaire() {
    return (
        <div class="container__form">
            <h3 className="form__title">Contactez nous !</h3>
            <div className="input__formulaires">
                <input className="input__formulaire" type="text" id="Prenom" placeholder="Prénom" />

                <input className="input__formulaire" type="text" id="Nom" placeholder="Nom" />

                <input className="input__formulaire" type="email" placeholder="Votre email" />
            </div>
            <div className="text__messages">
                <textarea className="message" placeholder="Votre message"></textarea>
            </div>
            <div className="button__submits">
                <button className="button__submit" name="button"> Soumettre </button>
            </div>
        </div>
    )
}
export default Formulaire;