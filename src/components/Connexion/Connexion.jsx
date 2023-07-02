import React from "react";
import "./Connexion.scss";
import GoogleIcon from '@mui/icons-material/Google';

function Connexion() {
    //     const signIn = (e) => {
    //         e.preventDefault();
    //     };
    // const register = (e) => {
    //     e.preventDefault();
    // };
    return (
        <div className="containerConnexion">
            <div className="loginScreen">
                <form className="connexionForm">
                    <h3>Se connecter</h3>
                    <span className="inputLogin">Adresse mail</span>
                    <input className="loginPlaceholder" placeholder="E-mail " type="email" />
                    <span className="inputLogin">Mot de Passe</span>
                    <input className="loginPlaceholder" placeholder="Mot de Passe" type="password" />
                    {/* <button type="submit" onClick={signIn}>S'identifier</button> */}
                    <button type="submit" className="loginButton">S'identifier</button>
                    <div className="googleConnexion">
                        <span>Ou continuer avec   </span>
                        <a href="#"> <GoogleIcon /> </a>
                    </div>
                    <div>
                        <input type="checkbox" className="loginScreenSouvenir" />
                        <label className="signupScreenLabelsouvenir">  Se souvenir de moi </label>
                    </div>
                    <div>
                        <span className="loginScreen">Vous n'avez pas de compte ? </span>
                        {/* <span className="signupScreen_lien" onClick={register}>Inscrivez-vous.</span> */}
                        <div to='#' className={(nav) => nav.isActive ? 'lien Active' : 'lien'}>
                            <span className="linkSignIn">
                                <a href="#">Inscrivez-vous ici</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Connexion;