import '../css/hero.css';
import Animate from "../../utils/Animate";

const Hero = () =>
{
    return (
        <Animate>
            <section className="hero">
                <div className="hero-left">
                    <svg className="icon line" width="79" height="5" viewBox="0 0 79 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2.5" x2="78.0256" y2="2.5" stroke="#FF4200" strokeWidth="5"/>
                    </svg>
                    <svg className="icon circle" width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28.0128" cy="28" r="24.5" stroke="#FF4200" strokeWidth="7"/>
                        <circle cx="28.0128" cy="28" r="12" fill="white"/>
                    </svg>
                    <svg className="icon x" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.260817 25L10.5328 11.752L10.4848 12.424L0.788817 0.0879974H2.66082L11.4928 11.416H10.8208L19.6048 0.0879974H21.4288L11.6848 12.616L11.7328 11.704L22.1488 25H20.1808L10.8688 12.904L11.3968 12.952L2.13282 25H0.260817Z" fill="white"/>
                    </svg>
                    <Animate>
                        <h1>Innovación digital al alcance de tu mano</h1>
                    </Animate>
                    <Animate>
                        <p>¿Listo para llevar tu presencia en línea al siguiente nivel? Descubre cómo NovaGL puede ayudarte a alcanzar tus metas digitales.</p>
                    </Animate>
                    <Animate>
                        <button>Conócenos</button>
                    </Animate>
                </div>
                <div className="hero-right">
                    <div className="hero-right-trasparency">
                        <Animate>
                            <div className="hero-right-upper">
                                <span>It is Nova</span>
                            </div>
                        </Animate>
                        <div className="hero-right-bottom">
                            <Animate>
                                <div className="hero-right-title-1">
                                    <h1>Desing</h1>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="hero-right-title-2">
                                    <h1>{"</code>"}</h1>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </div>
            </section>
        </Animate>
    );
}

export default Hero;