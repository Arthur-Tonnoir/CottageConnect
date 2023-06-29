import React from "react";
import './FormContact.scss';
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import Formulaire from "../../component/Formulaire/Formulaire";

function FormContact() {
    return (
        <body>
            <Nav />
            <div className="containerormulaire">
                <Formulaire />
            </div>
            <Footer />
        </body>
    )
}

export default FormContact;