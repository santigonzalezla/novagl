import '../css/about.css';
import Animate from "../../utils/Animate";

const AboutBanner = () =>
{
    return (
        <Animate>
            <div className="about-banner">
                <div className="about-banner-left">
                    <Animate>
                        <h3>
                            Somos una agencia de desarrollo que brinda soluciones tecnológicas a las empresas y personas que lo necesiten.
                        </h3>
                    </Animate>
                </div>
                <div className="about-banner-right">
                    <div className="about-banner-right-item">
                        <Animate>
                            <span>5</span>
                        </Animate>
                        <Animate>
                            <p>Años de experiencia</p>
                        </Animate>
                    </div>
                    <div className="about-banner-right-item">
                        <Animate>
                            <span>10</span>
                        </Animate>
                        <Animate>
                            <p>Proyectos completados</p>
                        </Animate>
                    </div>
                    <div className="about-banner-right-item">
                        <Animate>
                            <span>+20</span>
                        </Animate>
                        <Animate>
                            <p>Clientes satisfechos</p>
                        </Animate>
                    </div>
                </div>
            </div>
        </Animate>
    );
}

export default AboutBanner;