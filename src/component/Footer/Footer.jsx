import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerRow">
        <div className="footerSection">
          <div className="footerNewsletter">
            <h3>Abonnez-vous à notre Newsletter</h3>
            <form>
              <input type="email" name="email" placeholder="Adresse e-mail" className='footerInput' />
              <button className='footerButton'>S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="footerSection">
          <div className='footerPropos'>
            <h3>A propos de Casa Mea</h3>
            <ul>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button className='footerButton'>
                  <a href="./">Lorem</a>
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="footerSection">
          <div className="footerContact">
            <button className='footerButton'>
              <a href="">FAQ</a>
            </button>
            <button className='footerButton'>
              <a href="">Nous contacter</a>
            </button>
            <div className='footerSocials'>
              <a href="./" className='footerSocial'>
                <FacebookIcon />
              </a>
              <a href="./" className='footerSocial'>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
