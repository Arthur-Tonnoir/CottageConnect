import React from "react";
import './Filter.scss';
import Carousel from "../Carrousel/Carousel";

function Filter() {
    const images = [
        './img/Caroussel/gite11.jpg',
        './img/Caroussel/gite12.jpg',
        './img/Caroussel/gite13.jpg',
        './img/Caroussel/gite14.jpg'
    ]

    const images2 = [
        './img/Caroussel/gite21.jpg',
        './img/Caroussel/gite22.jpg',
        './img/Caroussel/gite23.jpg',
        './img/Caroussel/gite24.jpg'
    ]

    const images3 = [
        './img/Caroussel/gite31.jpg',
        './img/Caroussel/gite32.jpg',
        './img/Caroussel/gite33.jpg',
        './img/Caroussel/gite34.jpg'
    ]

    const images4 = [
        './img/Caroussel/gite41.jpg',
        './img/Caroussel/gite42.jpg',
        './img/Caroussel/gite43.jpg',
        './img/Caroussel/gite44.jpg'
    ]

    const images5 = [
        './img/Caroussel/gite51.jpg',
        './img/Caroussel/gite52.jpg',
        './img/Caroussel/gite53.jpg',
        './img/Caroussel/gite54.jpg'
    ]

    
    return (
        <div className="filterContainer">
            <div className="filters">
                <h3 className="filterTitle">Filtres</h3>
                <div className="filterFilter">
                    <div className="mer">
                        <a href="./"><img className="imgFilter" src="./img/MerPlage.jpg" alt="mer" /></a>
                        <p>Mer</p>
                    </div>
                    <div className="montagne">
                        <a href="./"><img className="imgFilter" src="./img/Montagne.jpg" alt="montagne" /></a>
                        <p>Montagne</p>
                    </div>
                    <div className="ville">
                        <a href="./"><img className="imgFilter" src="./img/Ville.jpg" alt="ville" /></a>
                        <p>Ville</p>
                    </div>
                    <div className="campagne">
                        <a href="./"><img className="imgFilter" src="./img/Campagne.jpg" alt="campagne" /></a>
                        <p>Campagne</p>
                    </div>
                    <div className="autres">
                        <a href="./"><img className="imgFilter" src="./img/Plus.png" alt="autres" /></a>
                        <p>Plus de filtres</p>
                    </div>
                </div>
            </div>
            <div className="filters">
                <h3 className="filterTitle">Destinations</h3>
                <div className="filterCity">
                    <div className="mer">
                        <a href="./"><img className="imgFilter" src="./img/Paris.jpg" alt="paris" /></a>
                        <p>Paris</p>
                    </div>
                    <div className="montagne">
                        <a href="./"><img className="imgFilter" src="./img/Marseille.jpg" alt="marseille" /></a>
                        <p>Marseille</p>
                    </div>
                    <div className="ville">
                        <a href="./"><img className="imgFilter" src="./img/Bretagne.jpg" alt="bretagne" /></a>
                        <p>Saint Malo</p>
                    </div>
                    <div className="campagne">
                        <a href="./"><img className="imgFilter" src="./img/Lille.jpg" alt="lille" /></a>
                        <p>Lille</p>
                    </div>
                    <div className="autres">
                        <a href="./"><img className="imgFilter" src="./img/Plus.jpg" alt="autres" /></a>
                        <p>Plus de destinations</p>
                    </div>
                </div>
            </div>
            <div className="filters">
                <h3 className="filterTitle">Proposition Gîtes</h3>
                <div className="filterGite">
                    <div className="premier">
                        <Carousel className="imgGite" images={images} />
                        <a href="./">
                            <span className="nomGite">Gite La Valeria
                                <img className="badge" src="./img/badge-promo.png" alt="badge" />
                            </span>
                            <span className="comoditeGite">
                                <img className="imgIcone" src="./img/icons8-lit-20.png" alt="icone lit" />
                                    <p className="nbLit">2</p>
                                    <img className="imgIcone grp" src="./img/groupe.png" alt="icone personnes" />
                                    <p className="nbGens">3</p>
                            </span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix/nuit</span>
                        </a>
                    </div>

                    <div className="deuxieme">
                        <Carousel className="imgGite" images={images2} />
                        <a href="./">
                            <span className="nomGite">Logis en forêt
                            <img className="badge" src="./img/badge-eco.png" alt="badge" />
                            </span>
                            <span className="comoditeGite">
                                <img className="imgIcone" src="./img/icons8-lit-20.png" alt="icone lit" />
                                    <p className="nbLit">1</p>
                                <img className="imgIcone grp" src="./img/groupe.png" alt="icone personnes" />
                                    <p className="nbGens">2</p>
                            </span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix/nuit</span>
                        </a>
                    </div>
                    <div className="troisieme">
                        <Carousel className="imgGite" images={images3} />
                        <a href="./">
                            <span className="nomGite">Gite Le Repos
                                <img className="badge" src="./img/badge-culinaire.png" alt="badge" />
                            </span>
                            <span className="comoditeGite">
                                <img className="imgIcone" src="./img/icons8-lit-20.png" alt="icone lit" />
                                    <p className="nbLit">3</p>
                                <img className="imgIcone grp" src="./img/groupe.png" alt="icone personnes" />
                                    <p className="nbGens">6</p>
                            </span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix/nuit</span>
                        </a>
                    </div>
                    <div className="quatrieme" >
                        <Carousel images={images4} className="imgGite" />
                        <a href="./">
                            <span className="nomGite">Appartement vue mer
                                <img className="badge" src="./img/badge-promo.png" alt="badge" />
                            </span>
                            <span className="comoditeGite">
                                <img className="imgIcone" src="./img/icons8-lit-20.png" alt="icone lit" />
                                    <p className="nbLit">2</p>
                                <img className="imgIcone grp" src="./img/groupe.png" alt="icone personnes" />
                                    <p className="nbGens">4</p>
                            </span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix/nuit</span>
                        </a>
                    </div>
                    <div className="cinquieme">
                        <Carousel images={images5} className="imgGite" />
                        <a href="./">
                            <span className="nomGite">Nom du gîte
                                <img className="badge" src="./img/badge-super-hote.PNG" alt="badge"/>
                            </span>
                            <span className="comoditeGite">
                                <img className="imgIcone" src="./img/icons8-lit-20.png" alt="icone lit" />
                                    <p className="nbLit">3</p>
                                <img className="imgIcone grp" src="./img/groupe.png" alt="icone personnes" />
                                    <p className="nbGens">5</p>
                            </span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix/nuit</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;