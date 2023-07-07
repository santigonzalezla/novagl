import './css/about.css';
const AboutBanner = () =>
{
    return (
        <div className="about-banner">
            <div className="about-banner-left">
                <h3>
                    Somos una agencia de desarrollo que brinda soluciones tecnológicas a las empresas y personas que lo necesiten.
                </h3>
            </div>
            <div className="about-banner-right">
                <div className="about-banner-right-item">
                    <span>5</span>
                    <p>Años de experiencia</p>
                </div>
                <div className="about-banner-right-item">
                    <span>10</span>
                    <p>Proyectos completados</p>
                </div>
                <div className="about-banner-right-item">
                    <span>+20</span>
                    <p>Clientes satisfechos</p>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;