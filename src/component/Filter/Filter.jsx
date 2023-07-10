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
                        <img className="imgFilter" src="./img/MerPlage.jpg" alt="mer" />
                        <a href="./">Mer</a>
                    </div>
                    <div className="montagne">
                        <img className="imgFilter" src="./img/Montagnes.jpg" alt="montagne" />
                        <a href="./">Montagne</a>
                    </div>
                    <div className="ville">
                        <img className="imgFilter" src="./img/Ville.jpg" alt="ville" />
                        <a href="./">Ville</a>
                    </div>
                    <div className="campagne">
                        <img className="imgFilter" src="./img/Campagne.jpg" alt="campagne" />
                        <a href="./">Campagne</a>
                    </div>
                    <div className="autres">
                        <img className="imgFilter" src="./img/Plus.jpg" alt="autres" />
                        <a href="./">Plus de filtres</a>
                    </div>
                </div>
            </div>
            <div className="filters">
                <h3 className="filterTitle">Destinations</h3>
                <div className="filterCity">
                    <div className="mer">
                        <img className="imgFilter" src="./img/Paris.jpg" alt="paris" />
                        <a href="./">Paris</a>
                    </div>
                    <div className="montagne">
                        <img className="imgFilter" src="./img/Marseille.jpg" alt="marseille" />
                        <a href="./">Marseille</a>
                    </div>
                    <div className="ville">
                        <img className="imgFilter" src="./img/Bretagne.jpg" alt="bretagne" />
                        <a href="./">Saint Malo</a>
                    </div>
                    <div className="campagne">
                        <img className="imgFilter" src="./img/Lille.jpg" alt="lille" />
                        <a href="./">Lille</a>
                    </div>
                    <div className="autres">
                        <img className="imgFilter" src="./img/Plus.jpg" alt="autres" />
                        <a href="./">Plus de destinations</a>
                    </div>
                </div>
            </div>
            <div className="filters">
                <h3 className="filterTitle">Proposition Gîtes</h3>
                <div className="filterGite">
                    <div className="premier">
                        <Carousel className="imgGite" images={images} />
                        <a href="./">
                            <span className="nomGite">Gite la Valeria</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="deuxieme">
                        <Carousel className="imgGite" images={images2} />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite"><p className="meaPrix">à partir de</p>Prix</span>
                        </a>
                    </div>
                    <div className="troisieme">
                        <Carousel className="imgGite" images={images3} />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="quatrieme" >
                        <Carousel images={images4} className="imgGite" />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="cinquieme">
                        <Carousel images={images5} className="imgGite" />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;