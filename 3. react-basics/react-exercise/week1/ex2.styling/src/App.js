import Nav from "./components/Nav";

import "./App.css";
import "./Promo.css";

function Promo(props) {
  return (
    <div className="promo-section">
      <div>
        <h1 style={{ color: "blue", fontSize: "40px", textAlign: "center" }}>
          {props.heading}
        </h1>
      </div>
      <div>
        <h2 style={{ color: "blue", fontSize: "40px", textAlign: "center" }}>
          {props.promoSubHeading}
        </h2>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Nav first="Go to our main page" />
      <Promo heading="Welcome" />
      <Promo promoSubHeading="to our page" />
    </div>
  );
}

export default App;
