import './css/footer.css'

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-first">
                <div className="footer-logo">
                    <h4>NOVAGL</h4>
                </div>
                <div className="first-social">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="footer-second">
                <h3>Company</h3>
                <ul>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Testimonios</li>
                    <li>Portafolio</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="footer-third">
                <h3>Legal</h3>
                <ul>
                    <li>Política de privacidad</li>
                    <li>Términos y condiciones</li>
                </ul>
            </div>
            <div className="footer-fourth">
                <h3>Redes sociales</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>TikTok</li>
                </ul>
            </div>
            <div className="footer-fifth">
                <h3>Contáctanos</h3>
                <ul>
                    <li>
                        <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                        +51 999 999 999
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;