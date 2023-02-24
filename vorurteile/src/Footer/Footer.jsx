import "./Footer.css"
import Impressum from "../Bilder/Impressum_Brokolee_games.pdf";
import Datenschutz from "../Bilder/datenschutzerklaerung.pdf";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <h3 onClick={() => window.open(`${Impressum}`, '_blank')}>Impressum</h3>
                <h3>Entwickelt von <span onClick={() => window.open(`https://xiaohu.de/`, '_blank')}>Xiaohu 2023</span></h3>
                <h3 onClick={() => window.open(`${Datenschutz}`, '_blank')}>Datenschutz</h3>
            </div>
        </div>
    )
}

export default Footer;