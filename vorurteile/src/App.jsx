import Footer from "./Footer/Footer";
import Kontakt from "./Kontakt/Kontakt";
import Navigation from "./Navigation/Navigation";
import Newsletter from "./Newsletter/Newsletter";
import Startseite from "./Startseite/Startseite";

function App() {
  return (
    <div>
      <Navigation/>
      <Startseite/>
      <Newsletter/>
      <Kontakt/>
      <Footer/>
    </div>
  );
}

export default App;
