import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Sign from "../components/Sign";

const ServicePage = () =>
{
    return (
        <div>
            <div className="home">
                <Navbar />
                <Services id="services" />
                <Contact id="contact" />
            </div>
            <Footer />
            <Sign />
        </div>
    );
}

export default ServicePage;