import Navbar from "../components/home/Navbar";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Sign from "../components/home/Sign";
import HeroService from "../components/service/HeroService";

const ServicePage = () =>
{
    return (
        <div>
            <div className="home">
                <Navbar />
                <HeroService />
                <Services id="services" />
                <Contact id="contact" />
            </div>
            <Footer />
            <Sign />
        </div>
    );
}

export default ServicePage;