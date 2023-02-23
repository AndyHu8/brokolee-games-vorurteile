import './Navigation.css'
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function showNav() {
        const MobileUl = document.querySelector(".mobileNav");
        const burgerIcon = document.querySelector(".burger");

        //Öffne es
        if (!isNavOpen || "") {
            MobileUl.classList.add("panelSlideIn");
            MobileUl.classList.remove("panelSlideRight");
            setIsNavOpen(true);
            burgerIcon.classList.add("logoRotate");
        }

        //Schließe es
        else {
            MobileUl.classList.remove("panelSlideIn");
            MobileUl.classList.add("panelSlideRight");
            setIsNavOpen(false);
            burgerIcon.classList.remove("logoRotate");
        }
    }

    return (
        <>
        <div className="NaviContainer">
            <ul className="NavUl">
                <a href="#Startseite"><li>Startseite</li></a>
                <a href="#Vorurteile"><li>Vorurteile</li></a>
                <a href="#Newsletter"><li>Newsletter</li></a>
                <a href="#Kontakt"><li>Kontakt</li></a>
            </ul>
            <div className="burger" onClick={showNav}><BsList size={40}/></div>
        </div>

        <div className="mobileNav">
            <ul>
                <a href="#Startseite"><li className='firstLi' onClick={showNav}>Startseite</li></a>
                <a href="#Vorurteile"><li className='firstLi' onClick={showNav}>Vorurteile</li></a>
                <a href="#Newsletter"><li className='firstLi' onClick={showNav}>Newsletter</li></a>
                <a href="#Kontakt"><li className='firstLi' onClick={showNav}>Kontakt</li></a>
            </ul>
        </div>
        </>
    )
}

export default Navigation;