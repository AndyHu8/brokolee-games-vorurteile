import "./Newsletter.css"

const Newsletter = () => {
    return (
        <div id="Newsletter" className="newsletterContainer">
            <div className="newsletterContent">
                <h1>Newsletter</h1>
                <p>Fühlen Sie sich in unserer Gesellschaft verurteilt? <br/>
                Im Nachteil? <br/>
                Von <span style={{ fontWeight: 'bold' }}>Vorurteilen</span> betroffen? <br/>
                Wir wissen wie du dich fühlst & entwickeln ein Spiel für dich. <br/>
                Für mehr Informationen, trag dich in unseren Newsletter ein. <br/></p>
                <div className="newsletterInput">
                    <form action="https://formsubmit.co/info@brokolee.games" method="POST">
                        <input name="email" type="email" placeholder="Deine Email Adresse, bitte." required/>
                        <button type="submit">Abonnieren</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;