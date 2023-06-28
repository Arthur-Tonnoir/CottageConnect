import React from "react";
import './Faq.scss';
import Accordion from '../../component/Accordion/Accordion';
import Footer from '../../component/Footer/Footer'
import Nav from '../../component/Nav/Nav'


function Faq() {
    return (
        <body>
                <Nav />
                <div className="container__accordion">
                    <h3>Titre de la catégorie FAQ</h3>
                    <div className="accordion">
                        <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
                        <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
                        <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
                        <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
                        <button className="container__more">Plus de question</button>
                    </div>
                </div>
                <Footer />
        </body>
    )
}
export default Faq;