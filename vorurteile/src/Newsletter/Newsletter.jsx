import "./Newsletter.css"

const Newsletter = () => {
    return (
        <div id="Newsletter" className="newsletterContainer">
            <div className="newsletterContent">
                <h1>Newsletter</h1>
                <p>Fühlen Sie sich in unserer Gesellschaft verurteilt? <br/>
                Im Nachteil? <br/>
                Von <span style={{ fontWeight: 'bold' }}>Vorurteilen</span> betroffen? <br/>
                Wir wissen wie Sie sich fühlen & bereiten ein Spiel für Sie vor. <br/>
                Für mehr Informationen, tragen Sie sich in den Newsletter ein. <br/>
                <br/>
                Es wird krass, Sie Schlawiner! ( ͡° ͜ʖ ͡°)</p>
                <div className="newsletterInput">
                    <input type="text" placeholder="Deine Email Adresse, bitte." />
                    <button>Abschicken</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;