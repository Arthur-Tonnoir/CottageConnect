import React from "react";
import './Login.scss';
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import Connexion from "../../component/Connexion/Connexion";

function Login() {
    return (
        <div>
            <Nav />
            <Connexion />
            <Footer />
        </div>
    )
}
export default Login;