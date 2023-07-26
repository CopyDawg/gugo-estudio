import facebookLogo from '../assets/icons/facebook-logo.png';
import instagramLogo from '../assets/icons/instagram-logo.png';

export const Footer = () => {
    return (
        <footer className="footer">
          <p>Todos los derechos reservados © 2023 | Gugost estudio</p>
          <div className="footer-links">
            <a href="https://www.facebook.com/Gugotattoos" target="_blank">
              <img src={facebookLogo}/>
            </a>
            <a href="https://www.instagram.com/gugost/" target="_blank">
              <img src={instagramLogo}/>
            </a>
          </div>
        </footer>
    )
}
