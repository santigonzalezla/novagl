import './css/heroservice.css';
import Animate from "../../utils/Animate";

const HeroService = () =>
{
    return (
        <Animate>
            <section className="hero-service">
                <div className="hero-service-left">
                    <Animate>
                        <h1>Soluciones a medida para tu éxito digital</h1>
                    </Animate>
                    <Animate>
                        <p>
                            Descubre una amplia gama de servicios especializados diseñados para satisfacer tus necesidades y superar
                            tus expectativas.
                        </p>
                    </Animate>
                    <form className="hero-service-left-form">
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Correo"/>
                        <select>
                            <option value="1">Servicio 1</option>
                            <option value="2">Servicio 2</option>
                            <option value="3">Servicio 3</option>
                            <option value="4">Servicio 4</option>
                            <option value="5">Servicio 5</option>
                            <option value="6">Servicio 6</option>
                        </select>
                        <button>Agendar una cita</button>
                    </form>
                </div>
                <div className="hero-service-right">
                    <img src="https://i.imgur.com/xrdOBNm.png" alt="Hero Servicios"/>
                </div>
            </section>
        </Animate>
    )
}

export default HeroService;