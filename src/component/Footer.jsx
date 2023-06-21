import React from 'react';
import ".//Style/Footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <ul className='footer__links'>
                    <li>
                        <li className='footer__link'>
                            <a href="./">Newsletter</a>
                        </li>
                        <li className='footer__link'>
                            <input type="email" placeholder='Adresse Email' />
                        </li>
                    </li>
                    <li>
                        <li className='footer__link'>
                            <a href="./">A propos</a>
                        </li>
                    </li>
                    <li>
                        <li className='footer__link'>
                            <li>
                                <a href="./">FAQ</a>
                            </li>
                            <li>
                                <a href="./">Nous contacter</a>
                            </li>
                        </li>
                    </li>
                </ul>
                <div className='footer__socials'>
                    <a href="./" className='footer__social'>
                        <FacebookIcon />
                    </a>
                    <a href="./" className='footer__social'>
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;