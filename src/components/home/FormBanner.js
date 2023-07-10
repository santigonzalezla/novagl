import '../css/formbanner.css'
import Animate from "../../utils/Animate";

const FormBanner = ({ message }) =>
{
    return (
        <div className="form-banner">
            <Animate>
                <h3>{message}</h3>
            </Animate>
        </div>
    );
}

export default FormBanner;