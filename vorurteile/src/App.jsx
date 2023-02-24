import Footer from "./Footer/Footer";
import Kontakt from "./Kontakt/Kontakt";
import Navigation from "./Navigation/Navigation";
import Newsletter from "./Newsletter/Newsletter";
import Startseite from "./Startseite/Startseite";
import Vorurteile from "./Vorurteile/Vorurteile";

function App() {
  return (
    <div>
      <Navigation/>
      <Startseite/>
      <Vorurteile/>
      <Newsletter/>
      <Kontakt/>
      <Footer/>
    </div>
  );
}

export default App;
