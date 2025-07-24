import './Footer.css';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtube} alt="YouTube" />
          </a>
        </div>

        <p className="company-info">
          Energia 365 | CNPJ: 00.000.000/0000-00 Rua Sem Saída, 000 | CEP: 00000-000
        </p>
        <p className="rights">
          © Direitos Reservados www.energia365.com.br
        </p>
      </div>
    </footer>
  );
}

export default Footer;
