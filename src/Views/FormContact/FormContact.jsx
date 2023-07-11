import React from "react";
import './Formulaire.scss';
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import Formulaire from "../../component/Formulaire/Formulaire";

function FormContact() {
    return (
        <div>
            <Nav />
            <div className="containerormulaire">
                <Formulaire />
            </div>
            <Footer />
        </div>
    )
}

export default FormContact;