import '../css/contact.css';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TelegramIcon from '@mui/icons-material/Telegram';
import DuoIcon from '@mui/icons-material/Duo';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormBanner from "./FormBanner";
import Animate from "../../utils/Animate";

const Contact = () =>
{
    const form = useRef();
    const [showBanner, setShowBanner] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        project_description: "",
        contact_preference: selectedOption,
    });

    const handleChange = (e) =>
    {
        setFormData(prevFormData =>
        {
            const {name, value} = e.target;

            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    const handleSubmit = (e) =>
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

        setFormData({
            full_name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            project_description: "",
            contact_preference: selectedOption,
        });
        setSelectedOption('');
        setShowBanner(true);
        setTimeout(() =>
        {
            setShowBanner(false);
        }, 10000);
    };

    const handleSelectChange = (e) =>
    {
        setSelectedOption(e.target.value);
    }

    return (
        <Animate>
            <div className="contact" id="contact">
                <div className="contact-left">
                    <Animate>
                        <div className="contact-left-icon">
                            <EmailIcon />
                            <p>novagl@gmail.com</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <PhoneEnabledIcon />
                            <p>+57 (317) 4319914</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <TelegramIcon />
                            <p>@novagl.dev</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <DuoIcon />
                            <p>novagl-dev</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <SportsBasketballIcon />
                            <p>dribble.com/novagl</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <InstagramIcon />
                            <p>instagram.com/novagl</p>
                        </div>
                    </Animate>
                    <Animate>
                        <div className="contact-left-icon">
                            <YouTubeIcon />
                            <p>youtube.com/novagl</p>
                        </div>
                    </Animate>
                </div>
                <div className="contact-right">
                    <Animate>
                        <h2>¿Listo para dar vida a tu proyecto? ¡Conéctate hoy mismo para discutir tu proyecto y posibles colaboraciones!</h2>
                    </Animate>
                    <form className="contact-right-form" ref={form} onSubmit={handleSubmit}>
                        {showBanner && <FormBanner message="¡Muchas gracias por llenar el formulario, se ha enviado correctamente. Pronto estaremos en contacto!" />}
                        <div className="contact-right-form-info">
                            <div className="form-input">
                                <Animate>
                                    <label>Nombre Completo:</label>
                                </Animate>
                                <Animate>
                                    <input
                                        type="text"
                                        placeholder={"Nombre"}
                                        name={"full_name"}
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Animate>
                            </div>
                            <div className="form-input">
                                <Animate>
                                    <label>Email:</label>
                                </Animate>
                                <Animate>
                                    <input
                                        type="email"
                                        placeholder={"Correo electrónico"}
                                        name={"email"}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Animate>
                            </div>
                            <div className="form-input">
                                <Animate>
                                    <label>Teléfono:</label>
                                </Animate>
                                <Animate>
                                    <input
                                        className="number-form"
                                        type="number"
                                        placeholder={"Número de teléfono"}
                                        name={"phone"}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Animate>
                            </div>
                        </div>
                        <div className="contact-right-form-details">
                            <div className="form-input">
                                <Animate>
                                    <label>Servicio en el que estás interesado:</label>
                                </Animate>
                                <Animate>
                                    <input
                                        type="text"
                                        placeholder={"ej. Landing Page, E-commerce, etc."}
                                        name={"service"}
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    />
                                </Animate>
                            </div>
                            <div className="form-input">
                                <Animate>
                                    <label>Presupuesto aproximado:</label>
                                </Animate>
                                <Animate>
                                    <input
                                        className="number-form"
                                        type="number"
                                        placeholder={"ej. 5.000.000 - 7.000.000"}
                                        name={"budget"}
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                    />
                                </Animate>
                            </div>
                        </div>
                        <div className="form-input">
                            <Animate>
                                <label>Cuentanos de ti y lo que quieres hacer con tu proyecto:</label>
                            </Animate>
                            <Animate>
                                <textarea
                                    placeholder={"Danos más información sobre tu idea para estar preparados y darte las mejores opciones."}
                                    name={"project_description"}
                                    value={formData.project_description}
                                    onChange={handleChange}
                                    required
                                />
                            </Animate>
                        </div>
                        <div className="form-input">
                            <Animate>
                                <label>¿Cómo quieres que te contactemos?</label>
                            </Animate>
                            <Animate>
                                <select
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    name={"contact_preference"}
                                    required
                                >
                                    <option>Escoge una opción de contacto</option>
                                    <option value="zoom">Quiero agendar una llamada por zoom</option>
                                    <option value="telegram">Quiero ser contactado via Telegram</option>
                                    <option value="whatsapp">Quiero ser contactado  via WhatsApp</option>
                                    <option value="email">Quiero ser contactado via Email</option>
                                </select>
                            </Animate>
                        </div>
                        <Animate>
                            <button>Enviar solicitud de contacto</button>
                        </Animate>
                    </form>
                </div>
            </div>
        </Animate>
    );
}

export default Contact;