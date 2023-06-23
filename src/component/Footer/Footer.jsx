import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__section">
          <div className="footer__newsletter">
            <header>
              <h3>Abonnez-vous à notre Newsletter</h3>
            </header>
            <form>
              <input type="email" name="email" placeholder="Adresse e-mail" />
              <button>S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="footer__section">
          <div className='footer__propos'>
            <header>
              <h3>A propos de Casa Mea</h3>
            </header>
            <ul>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./">Lorem</a>
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__section">
          <div className="footer__contact">
            <button>
              <a href="">FAQ</a>
            </button>
            <button>
              <a href="">Nous contacter</a>
            </button>
            <div className='footer__socials'>
              <a href="./" className='footer__social'>
                <FacebookIcon />
              </a>
              <a href="./" className='footer__social'>
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
