import React from "react";
import './Faq.scss';
import Accordion from "../Accordion/Accordion";


function Faq() {
    return (
        <div className="container">
            <h3>Titre de la catégorie</h3>
            <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
            <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
            <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
            <Accordion title="Question" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, fugiat nemo velit quod impedit, eveniet odio tempore voluptates sit quae labore, cum incidunt accusamus!" />
        </div>
    )
}
export default Faq;