import '../css/services.css';
import brands from '../data/brands';
import Animate from "../../utils/Animate";

const ServiceBanner = () =>
{
    return (
        <Animate>
            <div className="service-banner">
                <div className="service-banner-left">
                    Aliados estratégicos:
                </div>
                <div className="service-banner-right">
                    <div className="marquee">
                        <div className="marquee--inner">
                        <span>
                            {
                                brands.map((item, index) =>
                                {
                                    return (
                                        <div className="orb" key={index}>
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                    )
                                })
                            }
                        </span>
                            <span>
                             {
                                 brands.map((item, index) =>
                                 {
                                     return (
                                         <div className="orb" key={index}>
                                             <img src={item.image} alt={item.name}/>
                                         </div>
                                     )
                                 })
                             }
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </Animate>
    );
}

export default ServiceBanner;