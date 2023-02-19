import './Navigation.css'

const Navigation = () => {
    return (
        <div className="NaviContainer">
            <ul className="NavUl">
                <a href="#Startseite"><li>Startseite</li></a>
                <a href="#Vorurteile"><li>Vorurteile</li></a>
                <a href="#Newsletter"><li>Newsletter</li></a>
                <a href="#Kontakt"><li>Kontakt</li></a>
            </ul>
        </div>
    )
}

export default Navigation;