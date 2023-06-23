import React, { useState } from 'react'
import "./Accordion.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Accordion({ title, content }) {
    const [active, setActive] = useState(false)
    const handleToggle = e => {
        setActive(!active)
    }
    return (
        <div className='container'>
            <div className={`accordion ${active && "active"}`}>
                <div className='accordion__title' onClick={handleToggle}>
                    <ArrowForwardIosIcon /> {title}
                </div>
                <div className='accordion__content'>{content}</div>
            </div>
        </div>
    )
}

export default Accordion
