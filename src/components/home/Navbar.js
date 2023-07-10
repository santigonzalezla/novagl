import '../css/navbar.css';
import { HashLink } from "react-router-hash-link";
import Animate from "../../utils/Animate";

const Navbar = () =>
{
    const scrollWithOffset = (el) =>
    {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <Animate>
                    <HashLink smooth to="/"><h4>NOVAGL</h4></HashLink>
                </Animate>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <Animate>
                            <HashLink smooth to="#about" scroll={el => scrollWithOffset(el)}>Nosotros</HashLink>
                        </Animate>
                    </li>
                    <li>
                        <Animate>
                            <HashLink smooth to="#service" scroll={el => scrollWithOffset(el)}>Servicios</HashLink>
                        </Animate>
                    </li>
                    <Animate>
                        <li>Testimonios</li>
                    </Animate>
                    <li>
                        <Animate>
                            <HashLink smooth to="#work" scroll={el => scrollWithOffset(el)}>Portafolio</HashLink>
                        </Animate>
                    </li>
                    <li>
                        <Animate>
                            <HashLink smooth to="#contact" scroll={el => scrollWithOffset(el)}>Contacto</HashLink>
                        </Animate>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;