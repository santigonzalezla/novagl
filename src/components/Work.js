import './css/work.css';
import work from "./data/work";

const Work = () =>
{
    return (
        <div className="work" id="work">
            <div className="work-top">
                <h5>Conoce los servicios que podemos ofrecerte</h5>
                <h1>Convierte tu visión en realidad</h1>
            </div>
            <div className="work-bottom">
                {
                    work.map((item, index) =>
                    {
                        return (
                            <div className="work-bottom-item" key={index}>
                                <img src={item.image} alt={item.title} />
                                <div className="work-bottom-item-info">
                                    <h3>{item.title}</h3>
                                    <div className="item-info-bottom">
                                        <div>
                                            <p>Tiempo requerido:</p>
                                            <p className="result">{item.time}</p>
                                        </div>
                                        <div>
                                            <p>Costo estimado:</p>
                                            <p className="result">{item.cost}</p>
                                        </div>
                                        <div>
                                            <p>Descripción:</p>
                                            <p className="result">VER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Work;