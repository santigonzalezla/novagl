import './css/services.css';
import services from "./data/services";

const Services = () =>
{
    return (
        <div className="services" id="service">
            <div className="services-bottom">
                <div className="services-bottom-left">
                    {services.map((item, index) =>
                    {
                        return (
                            <div className="service-item" key={index}>
                                <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="services-bottom-right">
                    <h3>Estás en las mejores manos</h3>
                    <h1>Usando Nuestros Servicios</h1>
                    <p>
                        En NovaGL nos especializamos en el desarrollo de soluciones digitales que ayuden a nuestros
                        clientes a alcanzar sus metas de negocio. Nuestro equipo de expertos está listo para ayudarte a
                        llevar tu presencia en línea al siguiente nivel.
                    </p>
                    <button>Pregunta por el tuyo</button>
                </div>
            </div>
        </div>
    );
}

export default Services;