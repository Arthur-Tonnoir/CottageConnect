import React from "react";
import "./HomePage.scss";
import Nav from '../../component/Nav/Nav'
import Recherche from "../../component/Recherche/Recherche";
import Footer from '../../component/Footer/Footer';
import Filter from "../../component/Filter/Filter";
import Publier from "../../component/Publier/Publier";
import Presentation from "../../component/Presentation/Presentation";


function HomePage() {
    return (
        <div>
            <Nav />
            <Recherche />
            <Filter />
            <Publier />
            <Presentation/>
            <Footer />
        </div>
    )
}

export default HomePage;