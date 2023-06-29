import React from "react";
import "./Inscription.scss";
import { useNavigate } from 'react-router';

function Inscription() {
    // const navigate = useNavigate();
    // const navigateToHome = () => {
    //     navigate('/Home');
    // };
    return (
        <div className='banner_content'>
            <div className='banner_title'>
                Créez un compte<br />
            </div>
            <form className='email_input'>
                <input placeholder='Adresse e-mail' className='email' />
            </form>
            <form className='password_input'>
                <input placeholder='Mot de passe' className='password' />
            </form>
            <form className='confirmPAssword_input'>
                <input placeholder='Mot de passe' className='password' />
            </form>
            {/* <button className='valider_inscription' onClick={navigateToHome}>S'inscrire</button> */}
            <button className='valider_inscription'>S'inscrire</button>
            <span className="signupScreen_grisatre">Vous avez déjà un compte ? </span>
            <div to='#' className={(nav) => nav.isActive ? 'lien Active' : 'lien'} id="signupScreen_lien">
                <span>Connectez vous ici</span>
            </div>
        </div>
    )
}
export default Inscription;