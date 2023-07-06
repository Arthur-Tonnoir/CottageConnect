import React from "react";
import "./PageProfil.scss";
import Profil from "../../component/Profil/Profil";
import Footer from "../../component/Footer/Footer";
import Nav from "../../component/Nav/Nav";

function PageProfil() {
    return (
        <div>
            <Nav />
            <Profil />
            <Footer />
        </div>

    )
}
export default PageProfil;