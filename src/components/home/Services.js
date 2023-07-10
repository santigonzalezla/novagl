import '../css/services.css';
import services from "../data/services";
import Animate from "../../utils/Animate";

const Services = () =>
{
    return (
        <Animate>
            <div className="services" id="service">
                <div className="services-bottom">
                    <div className="services-bottom-left">
                        {services.map((item, index) =>
                            {
                                return (
                                    <div className="service-item" key={index}>
                                        <Animate>
                                            <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                                        </Animate>
                                        <Animate>
                                            <h3>{item.name}</h3>
                                        </Animate>
                                        <Animate>
                                            <p>{item.description}</p>
                                        </Animate>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="services-bottom-right">
                        <Animate>
                            <h3>Estás en las mejores manos</h3>
                        </Animate>
                        <Animate>
                            <h1>Usando Nuestros Servicios</h1>
                        </Animate>
                        <Animate>
                            <p>
                                En NovaGL nos especializamos en el desarrollo de soluciones digitales que ayuden a nuestros
                                clientes a alcanzar sus metas de negocio. Nuestro equipo de expertos está listo para ayudarte a
                                llevar tu presencia en línea al siguiente nivel.
                            </p>
                        </Animate>
                        <Animate>
                            <button>Pregunta por el tuyo</button>
                        </Animate>
                    </div>
                </div>
            </div>
        </Animate>
    );
}

export default Services;