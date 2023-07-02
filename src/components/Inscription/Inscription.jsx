import React from "react";
import "./Inscription.scss";
import GoogleIcon from '@mui/icons-material/Google';

function Inscription() {
    return (
        <div className="containerInscription">
            <div className='signInScreen'>
                <form className='inscriptionForm'>
                    <h3>Créez un compte</h3>
                    <span className='inputSignIn'>Adresse mail</span>
                    <input className='signInPlaceholder' type="email" />
                    <span className='inputSignIn'>Mot de passe</span>
                    <input className='signInPlaceholder' type="password" />
                    <span className="inputSignIn">Confirmation mot de passe</span>
                    <input className='signInPlaceholder' type="password" />
                    {/* <button className='valider_inscription' onClick={navigateToHome}>S'inscrire</button> */}
                    <button type="submit" className='signInButton'>S'inscrire</button>
                    <div className="googleConnexion">
                        <span>Ou continuer avec   </span>
                        <a href="#"> <GoogleIcon /> </a>
                    </div>
                    <div >
                        <span className="signInScreen">Vous avez déjà un compte ? </span>
                        <div to='#' className={(nav) => nav.isActive ? 'lien Active' : 'lien'}>
                            <span className="linkLogin">
                                <a href="#">Connectez vous ici</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Inscription;