import './css/about.css'

const About = () =>
{
    return (
        <div className="about" id="about">
            <div className="about-top">
                <div className="about-left">
                    <div className="about-left-trasparency">
                    </div>
                </div>
                <div className="about-right">
                    <svg width="79" height="5" viewBox="0 0 79 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2.5" x2="78.0256" y2="2.5" stroke="#FF4200" strokeWidth="5"/>
                    </svg>
                    <h1>Nuestra pasión, <span className="h1-sub">tu éxito:</span></h1>
                    <p>En NovaGL, hemos construido un legado de colaboración y dedicación para ayudar a nuestros
                        clientes a alcanzar sus metas digitales. Desde pequeñas empresas hasta grandes corporaciones,
                        hemos sido testigos de cómo nuestras soluciones personalizadas han transformado la presencia en
                        línea de nuestros clientes y han generado resultados tangibles. Permítenos compartir contigo
                        nuestra historia de éxito y cómo hemos superado desafíos, innovado y brindado resultados
                        excepcionales. Con NovaGL, tu éxito en línea está asegurado.
                    </p>
                    <button>Contáctanos</button>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-top">
                    <h5>Conoce nuestro equipo</h5>
                    <h1>Expertos en la era digital</h1>
                </div>
                <div className="about-bottom-bottom">
                    <div className="about-bottom-bottom-item">
                        <img src="https://i.imgur.com/2jSfbyx.jpg" alt="ceo" />
                        <div className="item-info">
                            <h4>CEO</h4>
                            <h2>Santiago Gonzalez</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                    </div>
                    <div className="about-bottom-bottom-item">
                        <img src="https://i.imgur.com/2jSfbyx.jpg" alt="coo" />
                        <div className="item-info">
                            <h4>COO</h4>
                            <h2>Santiago Dávila</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;