import React from 'react';
import ".//Style/Footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
      {/* Footer diviser en 3 section */}

      {/* 1ere section */}
      <div className="footer-section">
        <ul>
          <li>
            <a href="./">Abonnez vous à la Newsletter</a>
          </li>
          <li>
            <input type="email" placeholder="Entrez votre adresse email" />
          </li>
        </ul>
      </div>

      {/* 2eme section */}
      <div className="footer-section">
        <ul>
          <li>
            <a href="./">A propos de nous</a>
          </li>
        </ul>
      </div>

      {/* 3eme section */}
      <div className="footer-section">
        <ul>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Nous contacter</a>
          </li>
        </ul>
      </div>
      {/* <div className='footer__socials'>
        <a href="./" className='footer__social'>
          <FacebookIcon />
        </a>
        <a href="./" className='footer__social'>
          <InstagramIcon />
        </a>
      </div> */}
    </footer>
  );
}


export default Footer;