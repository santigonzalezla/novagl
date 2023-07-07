import './css/contact.css';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TelegramIcon from '@mui/icons-material/Telegram';
import DuoIcon from '@mui/icons-material/Duo';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () =>
{
    const form = useRef();
    const [selectedOption, setSelectedOption] = useState('');

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_po94d02', 'template_qilrzyg', form.current, 'p9sy5KN1V1jg0pnLd')
            .then((result) =>
            {
                console.log(result.text);
            }, (error) =>
            {
                console.log(error.text);
            });
    };



    const handleSelectChange = (e) =>
    {
        setSelectedOption(e.target.value);
    }

    return (
        <div className="contact" id="contact">
            <div className="contact-left">
                <div className="contact-left-icon">
                    <EmailIcon />
                    <p>novagl@gmail.com</p>
                </div>
                <div className="contact-left-icon">
                    <PhoneEnabledIcon />
                    <p>+57 (317) 4319914</p>
                </div>
                <div className="contact-left-icon">
                    <TelegramIcon />
                    <p>@novagl.dev</p>
                </div>
                <div className="contact-left-icon">
                    <DuoIcon />
                    <p>novagl-dev</p>
                </div>
                <div className="contact-left-icon">
                    <SportsBasketballIcon />
                    <p>dribble.com/novagl</p>
                </div>
                <div className="contact-left-icon">
                    <InstagramIcon />
                    <p>instagram.com/novagl</p>
                </div>
                <div className="contact-left-icon">
                    <YouTubeIcon />
                    <p>youtube.com/novagl</p>
                </div>
            </div>
            <div className="contact-right">
                <h2>¿Listo para dar vida a tu proyecto? ¡Conéctate hoy mismo para discutir tu proyecto y posibles colaboraciones!</h2>
                <form className="contact-right-form" ref={form} onSubmit={sendEmail}>
                    <div className="contact-right-form-info">
                        <div className="form-input">
                            <label>Nombre Completo:</label>
                            <input
                                type="text"
                                placeholder={"Nombre"}
                                name={"full_name"}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder={"Correo electrónico"}
                                name={"email"}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label>Teléfono:</label>
                            <input
                                className="number-form"
                                type="number"
                                placeholder={"Número de teléfono"}
                                name={"phone"}
                                required
                            />
                        </div>
                    </div>
                    <div className="contact-right-form-details">
                        <div className="form-input">
                            <label>Servicio en el que estás interesado:</label>
                            <input
                                type="text"
                                placeholder={"ej. Landing Page, E-commerce, etc."}
                                name={"service"}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label>Presupuesto aproximado:</label>
                            <input
                                className="number-form"
                                type="number"
                                placeholder={"ej. 5.000.000 - 7.000.000"}
                                name={"budget"}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-input">
                        <label>Cuentanos de ti y lo que quieres hacer con tu proyecto:</label>
                        <textarea
                            placeholder={"Danos más información sobre tu idea para estar preparados y darte las mejores opciones."}
                            name={"project_description"}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label>¿Cómo quieres que te contactemos?</label>
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            name={"contact_preference"}
                        >
                            <option>Escoge una opción de contacto</option>
                            <option value="zoom">Quiero agendar una llamada por zoom</option>
                            <option value="telegram">Quiero ser contactado via Telegram</option>
                            <option value="whatsapp">Quiero ser contactado  via WhatsApp</option>
                            <option value="email">Quiero ser contactado via Email</option>
                        </select>
                    </div>
                    <button>Enviar solicitud de contacto</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;