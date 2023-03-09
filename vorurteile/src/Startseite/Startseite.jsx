import './Startseite.css';
import { BsCaretDownFill } from "react-icons/bs";
import headline from "../Bilder/VorurteileLogo.png";

const Startseite = () => {
    return (
        <div id='Startseite' className='startseiteContainer'>
            <div className='startseiteContent'>
                <img src={headline} alt="Vor[ur]teile" className="headlineImg"/>
                <h1>Vor[ur]teile Games</h1>
                <p>Jedes Vorurteil kann auch ein Vorteil sein!</p>
                <a href='#Vorurteile'><BsCaretDownFill size={50} className="ArrowIcon"/></a>
            </div>
        </div>
    )
}

export default Startseite;