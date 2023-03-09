import './Startseite.css';
import { BsCaretDownFill } from "react-icons/bs";
import BrokoleeLogo from "../Bilder/brocolee_logo.png";

const Startseite = () => {
    return (
        <div id='Startseite' className='startseiteContainer'>
            <div className='startseiteContent'>
                <img src={BrokoleeLogo} alt="Vorurteile Games Logo" />
                <h1>Brokolee Games</h1>
                <p>Jedes Vorurteil kann auch ein Vorteil sein!</p>
                <a href='#Vorurteile'><BsCaretDownFill size={50} className="ArrowIcon"/></a>
            </div>
        </div>
    )
}

export default Startseite;