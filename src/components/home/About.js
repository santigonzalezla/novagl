import '../css/about.css'
import Animate from "../../utils/Animate";

const About = () =>
{
    return (
        <Animate>
            <div className="about" id="about">
                <div className="about-top">
                    <div className="about-left">
                        <div className="about-left-trasparency">
                        </div>
                    </div>
                    <div className="about-right">
                        <Animate>
                            <svg width="79" height="5" viewBox="0 0 79 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="2.5" x2="78.0256" y2="2.5" stroke="#FF4200" strokeWidth="5"/>
                            </svg>
                        </Animate>
                        <Animate>
                            <h1>Nuestra pasión, <span className="h1-sub">tu éxito:</span></h1>
                        </Animate>
                        <Animate>
                            <p>En NovaGL, hemos construido un legado de colaboración y dedicación para ayudar a nuestros
                                clientes a alcanzar sus metas digitales. Desde pequeñas empresas hasta grandes corporaciones,
                                hemos sido testigos de cómo nuestras soluciones personalizadas han transformado la presencia en
                                línea de nuestros clientes y han generado resultados tangibles. Permítenos compartir contigo
                                nuestra historia de éxito y cómo hemos superado desafíos, innovado y brindado resultados
                                excepcionales. Con NovaGL, tu éxito en línea está asegurado.
                            </p>
                        </Animate>
                        <Animate>
                            <button>Contáctanos</button>
                        </Animate>
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom-top">
                        <Animate>
                            <h5>Conoce nuestro equipo</h5>
                        </Animate>
                        <Animate>
                            <h1>Expertos en la era digital</h1>
                        </Animate>
                    </div>
                    <Animate>
                        <div className="about-bottom-bottom">
                            <div className="about-bottom-bottom-item">
                                <img src="https://i.imgur.com/2jSfbyx.jpg" alt="ceo" />
                                <div className="item-info">
                                    <Animate>
                                        <h4>CEO</h4>
                                    </Animate>
                                    <Animate>
                                        <h2>Santiago Gonzalez</h2>
                                    </Animate>
                                    <Animate>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                                    </Animate>
                                </div>
                            </div>
                            <div className="about-bottom-bottom-item">
                                <img src="https://i.imgur.com/2jSfbyx.jpg" alt="coo" />
                                <div className="item-info">
                                    <Animate>
                                        <h4>COO</h4>
                                    </Animate>
                                    <Animate>
                                        <h2>Santiago Dávila</h2>
                                    </Animate>
                                    <Animate>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                                    </Animate>
                                </div>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </Animate>
    );
}

export default About;