import React from "react";
import "./Connexion.scss";

function Connexion() {
    //     const signIn = (e) => {
    //         e.preventDefault();
    //     };
    // const register = (e) => {
    //     e.preventDefault();
    // };
    return (
        <body>
            <div className="signupScreen">
                <form>
                    <h1>S'identifier</h1>
                    <input className="signupScreen_placeholder" placeholder="E-mail " type="email" />
                    <input className="signupScreen_placeholder" placeholder="Mot de Passe" type="password" />
                    {/* <button type="submit" onClick={signIn}>S'identifier</button> */}
                    <div to='#' className={(nav) => nav.isActive ? 'lien Active' : 'lien'}>
                        <button type="submit" className="signupScreen_button">S'identifier</button>
                    </div>
                    <div>
                        <input type="checkbox" className="signupScreen_souvenir" />
                        <label className="signupScreen_labelsouvenir">  Se souvenir de moi </label>
                    </div>
                    <h4>
                        <span className="signupScreen_grisatre">Vous n'avez pas de compte ? </span>
                        {/* <span className="signupScreen_lien" onClick={register}>Inscrivez-vous.</span> */}
                        <div to='#' className={(nav) => nav.isActive ? 'lien Active' : 'lien'} id="signupScreen_lien">
                            <span>Inscrivez-vous ici</span>
                        </div>
                    </h4>
                </form>
            </div>
        </body>
    )
}

export default Connexion;