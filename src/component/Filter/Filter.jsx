import React from "react";
import './Filter.scss';
import Carousel from "../Carrousel/Carousel";

function Filter() {
    const images = [
        './img/Caroussel/gite1.jpg',
        './img/Caroussel/gite2.jpg',
        './img/Caroussel/gite3.jpg',
        './img/Caroussel/gite4.jpg'
    ]
    return (
        <div className="filterContainer">
            <div className="filters">
                <h3 className="filterTitle">Filtres</h3>
                <div className="filterFilter">
                    <div className="mer">
                        <img className="imgFilter" src="./img/mer.jpg" alt="mer" />
                        <a href="./">Mer</a>
                    </div>
                    <div className="montagne">
                        <img className="imgFilter" src="./img/mer.jpg" alt="montagne" />
                        <a href="./">Montagne</a>
                    </div>
                    <div className="ville">
                        <img className="imgFilter" src="./img/mer.jpg" alt="ville" />
                        <a href="./">Ville</a>
                    </div>
                    <div className="campagne">
                        <img className="imgFilter" src="./img/mer.jpg" alt="campagne" />
                        <a href="./">Campagne</a>
                    </div>
                    <div className="autres">
                        <img className="imgFilter" src="./img/mer.jpg" alt="autres" />
                        <a href="./">Plus de filtres</a>
                    </div>
                </div>
            </div>
            <div className="filters">
                <h3 className="filterTitle">Destinations</h3>
                <div className="filterCity">
                    <div className="mer">
                        <img className="imgFilter" src="./img/mer.jpg" alt="mer" />
                        <a href="./">Paris</a>
                    </div>
                    <div className="montagne">
                        <img className="imgFilter" src="./img/mer.jpg" alt="montagne" />
                        <a href="./">Marseille</a>
                    </div>
                    <div className="ville">
                        <img className="imgFilter" src="./img/mer.jpg" alt="ville" />
                        <a href="./">Saint Malo</a>
                    </div>
                    <div className="campagne">
                        <img className="imgFilter" src="./img/mer.jpg" alt="campagne" />
                        <a href="./">Lille</a>
                    </div>
                    <div className="autres">
                        <img className="imgFilter" src="./img/mer.jpg" alt="autres" />
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
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="deuxieme">
                        <Carousel className="imgGite" images={images} />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="troisieme">
                        <Carousel className="imgGite" images={images} />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="quatrieme" >
                        <Carousel images={images} className="imgGite" />
                        <a href="./">
                            <span className="nomGite">Nom du gîte</span>
                            <span className="comoditeGite">Comodité</span>
                            <span className="prixGite">Prix</span>
                        </a>
                    </div>
                    <div className="cinquieme">
                        <Carousel images={images} className="imgGite" />
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