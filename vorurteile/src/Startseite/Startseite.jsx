import './Startseite.css';
import { BsCaretDownFill } from "react-icons/bs";
import BrokoleeLogo from "../Bilder/brocolee_logo.png";

const Startseite = () => {
    return (
        <div id='Startseite' className='startseiteContainer'>
            <div className='startseiteContent'>
                <img src={BrokoleeLogo} alt="Brokolee Games Logo" />
                <h1>Brokolee Games</h1>
                <p>maybe broccoli doesn't like you either.</p>
                <BsCaretDownFill size={50} className="ArrowIcon"/>
            </div>
        </div>
    )
}

export default Startseite;