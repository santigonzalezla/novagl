import '../css/footer.css'
import Animate from "../../utils/Animate";
import { UilInstagram } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-first">
                <div className="footer-logo">
                    <Animate>
                        <h4>NOVAGL</h4>
                    </Animate>
                </div>
                <Animate>
                    <div className="first-social">
                        <div className="first-social-icon">
                            <UilWhatsapp />
                        </div>
                        <div className="first-social-icon">
                            <UilInstagram />
                        </div>
                        <div className="first-social-icon">
                            <UilFacebookF />
                        </div>
                        <div className="first-social-icon">
                            <UilTwitter />
                        </div>
                    </div>
                </Animate>
            </div>
            <div className="footer-second">
                <Animate>
                    <h3>Company</h3>
                </Animate>
                <ul>
                    <Animate>
                        <li>Nosotros</li>
                    </Animate>
                    <Animate>
                        <li>Servicios</li>
                    </Animate>
                    <Animate>
                        <li>Testimonios</li>
                    </Animate>
                    <Animate>
                        <li>Portafolio</li>
                    </Animate>
                    <Animate>
                        <li>Contacto</li>
                    </Animate>
                </ul>
            </div>
            <div className="footer-third">
                <Animate>
                    <h3>Legal</h3>
                </Animate>
                <ul>
                    <Animate>
                        <li>Política de privacidad</li>
                    </Animate>
                    <Animate>
                        <li>Términos y condiciones</li>
                    </Animate>
                </ul>
            </div>
            <div className="footer-fourth">
                <Animate>
                    <h3>Redes sociales</h3>
                </Animate>
                <ul>
                    <Animate>
                        <li>Facebook</li>
                    </Animate>
                    <Animate>
                        <li>Instagram</li>
                    </Animate>
                    <Animate>
                        <li>Twitter</li>
                    </Animate>
                    <Animate>
                        <li>LinkedIn</li>
                    </Animate>
                    <Animate>
                        <li>TikTok</li>
                    </Animate>
                </ul>
            </div>
            <div className="footer-fifth">
                <Animate>
                    <h3>Contáctanos</h3>
                </Animate>
                <ul>
                    <li>
                        +51 999 999 999
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;