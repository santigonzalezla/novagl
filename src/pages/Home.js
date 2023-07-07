import './css/home.css';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Services from "../components/Services";
import Contact from "../components/Contact";
import AboutBanner from "../components/AboutBanner";
import ServiceBanner from "../components/ServiceBanner";
import Footer from "../components/Footer";
import Sign from "../components/Sign";

const Home = () =>
{
    return (
        <div>
            <div className="home">
                <Navbar />
                <Hero />
                <AboutBanner />
                <About />
                <ServiceBanner />
                <Services />
                <Work />
                <Contact />
            </div>
            <Footer />
            <Sign />
        </div>
    );
}

export default Home;