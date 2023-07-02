import React from "react";
import "./HomePage.scss";
import Nav from '../../component/Nav/Nav'
import Recherche from "../../component/Recherche/Recherche";
import Footer from '../../component/Footer/Footer';


function HomePage() {
    return (
        <div>
            <Nav/>
            <Recherche />
            <Footer/>
        </div>
    )
}

export default HomePage;