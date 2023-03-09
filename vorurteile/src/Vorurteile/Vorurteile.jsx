import "./Vorurteile.css";
import headline from "../Bilder/VorurteileLogo.png";
import map from "../Bilder/map.png";
import asset1 from "../Bilder/Asset_1.png";
import asset2 from "../Bilder/Asset_2.png";
import asset3 from "../Bilder/Asset_3.png";

const Vorurteile = () => {
    return (
        <div className="vorurteileContainer">
            <div className="vorurteileContent">
                <img src={headline} alt="Vor[ur]teile" className="headlineImg"/>
                <div className="kartenMitTextDiv">
                    <div>
                        <img src={asset1} alt="Karte 1" />
                        <h2>Grundsätzlich geht es darum, dass jeder Spieler eine geheime Nationalität hat und versucht nach seiner Weltreise in sein Heimatland zurückzukehren. Allerdings behindern sich alle Spieler gegenseitig dabei, indem sie unterschiedliche Aktions- und Vorurteils-Karten nutzen, die ihnen selbst Vorteile verschaffen oder andere am Vorankommen hindern.
                            Die Idee hinter dem Spiel ist, dass jedes Vorurteil auch einen Vorteil in sich bergen kann. 
                            Allerdings oft Vorteile auf Kosten des Planeten bzw. des globalen Klimas.</h2>
                    </div>
                    <div>
                        <img src={asset2} alt="Karte 2" className="karte2Mobile" />
                        <h2>Dieses sozialkritische Spiel stellt dabei Konstrukte wie Nationalitäten und Vorurteile in Zusammenhang mit dem eigenen Vorteil
                            und der Verschmutzung und Zerstörung des Planeten. Dabei manövriert es die Spieler in Zwickmühlen, in denen sie immer wieder zwischen ihrem
                            eigenen Vorteil und dem globalen Nachteil abwägen müssen, da sie durch ihr eigennütziges Handeln als Nationalität globale Effekte,
                            wie Naturkatastrophen etc., auslösen können, was schlussendlich sogar zum Armageddon und so zum Game Over für alle führen kann.</h2>
                        <img src={asset2} alt="Karte 2" className="karte1Mobile"/>
                    </div>
                    <div>
                        <img src={asset3} alt="Karte 3" />
                        <h2>Das Spiel enthält außerdem politisch unkorrekten schwarzen Humor, welcher sich allerdings nicht gegen eine bestimmte Nationalität richtet,
                            sondern gegen alle Nationalitäten, die in diesem Spiel vorkommen, gleichermaßen. Vor[ur]teile ist auf dem Global Game Jam 2019 zum Thema Heimat entstanden.
                            Seither haben wir es weiterentwickelt und u.a. auch digitalisiert. Mittlerweile ist es zu einem witzigen,
                            strategischen aber auch gesellschaftskritischen Unterhaltungsspiel geworden, dass zur Reflexion über die Probleme unserer Zeit anregt.
                            Viel Spaß beim Spielen 🙂</h2>
                    </div>
                </div>
                <img src={map} alt="Map von Vorurteile" className="map"/>
            </div>
        </div>
    )
}

export default Vorurteile;