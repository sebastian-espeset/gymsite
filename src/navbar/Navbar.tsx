import "./navbar.scss";
import logo from '../assets/logo.png';
export function Navbar() {
  return (
    <ul className="nav">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="gym logo and name" />
        </div>
      </div>
      <div className="right">
        
      <li className="nav-item">
        <a href="#about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact-form">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact-form">
          Pricing and Promo
        </a>
      </li>
      </div>
    </ul>
  )
}
