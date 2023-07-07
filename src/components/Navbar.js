import './css/navbar.css';
import { HashLink } from "react-router-hash-link";

const Navbar = () =>
{
    return (
        <nav className="navbar">
            <div className="logo">
                <h4>NOVAGL</h4>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <HashLink to="#about">Nosotros</HashLink>
                    </li>
                    <li>
                        <HashLink to="#service">Servicios</HashLink>
                    </li>
                    <li>Testimonios</li>
                    <li>
                        <HashLink to="#work">Portafolio</HashLink>
                    </li>
                    <li>
                        <HashLink to="#contact">Contacto</HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;