import "./navbar.scss";

export function Navbar() {
  return (
    <ul className="nav">
      {/* <li className="nav-item">
        <a
          href="#contact"
        >
          Contact
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#about"
        // onClick={() => handlePageChange('General')}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact-form"
        >
          Contact
        </a>
      </li>
    </ul>
  )
}
