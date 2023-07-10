import '../css/work.css';
import work from "../data/work";
import Animate from "../../utils/Animate";

const Work = () =>
{
    return (
        <Animate>
            <div className="work" id="work">
                <div className="work-top">
                    <Animate>
                        <h5>Conoce los servicios que podemos ofrecerte</h5>
                    </Animate>
                    <Animate>
                        <h1>Convierte tu visión en realidad</h1>
                    </Animate>
                </div>
                <div className="work-bottom">
                    {
                        work.map((item, index) =>
                        {
                            return (
                                <Animate>
                                    <div className="work-bottom-item" key={index}>
                                        <img src={item.image} alt={item.title} />
                                        <div className="work-bottom-item-info">
                                            <Animate>
                                                <h3>{item.title}</h3>
                                            </Animate>
                                            <div className="item-info-bottom">
                                                <div>
                                                    <Animate>
                                                        <p>Tiempo requerido:</p>
                                                    </Animate>
                                                    <Animate>
                                                        <p className="result">{item.time}</p>
                                                    </Animate>
                                                </div>
                                                <div>
                                                    <Animate>
                                                        <p>Costo estimado:</p>
                                                    </Animate>
                                                    <Animate>
                                                        <p className="result">{item.cost}</p>
                                                    </Animate>
                                                </div>
                                                <div>
                                                    <Animate>
                                                        <p>Descripción:</p>
                                                    </Animate>
                                                    <Animate>
                                                        <p className="result">VER</p>
                                                    </Animate>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Animate>
                            );
                        })
                    }
                </div>
            </div>
        </Animate>
    );
}

export default Work;