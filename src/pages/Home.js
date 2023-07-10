import './css/home.css';
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Work from "../components/home/Work";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import AboutBanner from "../components/home/AboutBanner";
import ServiceBanner from "../components/home/ServiceBanner";
import Footer from "../components/home/Footer";
import Sign from "../components/home/Sign";

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