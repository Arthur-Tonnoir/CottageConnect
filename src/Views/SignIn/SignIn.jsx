import React from "react";
import "./SignIn.scss";
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import Inscription from "../../component/Inscription/Inscription"

function SignIn() {
    return (
        <div>
            <Nav />
            <Inscription />
            <Footer />
        </div>
    )
}

export default SignIn;