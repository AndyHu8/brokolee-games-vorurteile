import "./Newsletter.css"

const Newsletter = () => {
    return (
        <div id="Newsletter" className="newsletterContainer">
            <div className="newsletterContent">
                <h1>Community Newsletter</h1>
                <p>Jetzt schnellstmöglich eintragen & alle News über Brokolee Games, <br/> sowie die Spiele selbst bekommen!</p>
                <div className="newsletterInput">
                    <input type="text" placeholder="Deine Email Adresse, bitte." />
                    <button>Abonnieren</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;