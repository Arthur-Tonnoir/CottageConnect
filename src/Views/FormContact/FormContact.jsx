import React from "react";
import './FormContact.scss';
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import Formulaire from "../../component/Formulaire/Formulaire";

function FormContact() {
    return (
        <div>
            <Nav />
            <div className="container__formulaire">
                <Formulaire />
            </div>
            <Footer />
        </div >
    )
}

export default FormContact;